import email
import os
import base64
from urllib.parse import unquote

MHT_FILE_PATH = 'public/images/Phrack에서 유출된 Linux 스텔스 루트킷 분석.mht'
OUTPUT_DIR = 'output'

def main():
    print(f"Processing {MHT_FILE_PATH}...")

    if not os.path.exists(MHT_FILE_PATH):
        print(f"Error: File not found at {MHT_FILE_PATH}")
        return

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print(f"Output directory '{OUTPUT_DIR}' created or already exists.")

    with open(MHT_FILE_PATH, 'rb') as f:
        msg = email.message_from_bytes(f.read())

    html_part = None
    image_count = 0

    for part in msg.walk():
        content_type = part.get_content_type()
        content_location = part.get('Content-Location')

        if part.is_multipart():
            continue

        if content_type == 'text/html':
            print("Found HTML part.")
            html_part = part

        elif content_type.startswith('image/'):
            if content_location:
                filename = os.path.basename(unquote(content_location))
                filepath = os.path.join(OUTPUT_DIR, filename)
                print(f"Extracting image: {filename}")
                with open(filepath, 'wb') as img_f:
                    img_f.write(part.get_payload(decode=True))
                image_count += 1

    if html_part:
        html_output_path = os.path.join(OUTPUT_DIR, 'index.html')
        print(f"Saving HTML to {html_output_path}")
        payload = html_part.get_payload(decode=True)
        charset = html_part.get_content_charset() or 'utf-8'
        try:
            html_content = payload.decode(charset, errors='replace')
        except LookupError:
            print(f"Unknown charset {charset}, falling back to utf-8.")
            html_content = payload.decode('utf-8', errors='replace')
        
        with open(html_output_path, 'w', encoding='utf-8') as f:
            f.write(html_content)
    else:
        print("HTML part not found.")

    print(f"\nExtraction complete.")
    print(f"- HTML file saved: {'Yes' if html_part else 'No'}")
    print(f"- Images extracted: {image_count}")

if __name__ == '__main__':
    main()
