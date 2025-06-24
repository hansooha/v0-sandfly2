'use client';

import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title, className = '' }) => {
  return (
    <div className={`relative w-full ${className}`} style={{ paddingBottom: '56.25%' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default YouTubeEmbed;