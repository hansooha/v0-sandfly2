import re
import base64
import os
from pathlib import Path

def extract_and_replace_images():
    project_root = Path('/Users/hansoo./Dev/sandfly.kr')
    markdown_file_path = project_root / 'public/docs/phrack-rootkit-analysis.md'
    image_dir = project_root / 'public/images/phrack-rootkit-assets'
    
    image_dir.mkdir(parents=True, exist_ok=True)

    try:
        content = markdown_file_path.read_text(encoding='utf-8')
    except FileNotFoundError:
        print(f"Error: Markdown file not found at {markdown_file_path}")
        return

    # A more robust regex to find base64 image data in markdown format
    pattern = re.compile(r'!\[(.*?)\]\((data:image/([a-zA-Z+]+);base64,([^\)]+))\)')
    
    new_content = content
    matches = list(pattern.finditer(content))
    
    if not matches:
        print("No base64 images found to extract.")
        return

    for i, match in enumerate(matches):
        original_full_match = match.group(0)
        alt_text = match.group(1)
        full_data_uri = match.group(2)
        img_format = match.group(3)
        base64_data = match.group(4)
        
        # Sanitize alt_text for a safe filename
        safe_alt_text = re.sub(r'[^a-zA-Z0-9_-]', '_', alt_text).lower()[:50]
        image_filename = f'{safe_alt_text}_{i+1}.{img_format}'
        image_save_path = image_dir / image_filename
        
        try:
            # Decode the base64 string, handling potential padding errors
            image_data = base64.b64decode(base64_data)
            image_save_path.write_bytes(image_data)
            print(f"Saved image to {image_save_path}")
        except Exception as e:
            print(f"Error saving image {image_filename}: {e}")
            continue

        # Create a relative path from the markdown file to the new image
        relative_image_path = os.path.relpath(image_save_path, start=markdown_file_path.parent)
        # Ensure forward slashes for web/markdown compatibility
        relative_image_path = str(Path(relative_image_path)).replace('\\', '/')
        new_image_md = f'![{alt_text}]({relative_image_path})'
        
        # Replace the base64 URI with the new relative path
        new_content = new_content.replace(original_full_match, new_image_md)

    try:
        markdown_file_path.write_text(new_content, encoding='utf-8')
        print(f"Successfully updated {markdown_file_path}")
    except IOError as e:
        print(f"Error writing updated markdown file: {e}")

if __name__ == '__main__':
    extract_and_replace_images()
