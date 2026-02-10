import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * Gallery image component with error handling and fallback UI.
 * Maintains aspect ratio and layout stability even when images fail to load.
 */
export default function GalleryImage({ src, alt, className = '', loading = 'lazy' }: GalleryImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex flex-col items-center justify-center bg-muted text-muted-foreground ${className}`}>
        <ImageOff className="h-12 w-12 mb-2 opacity-50" />
        <p className="text-sm text-center px-4">Image unavailable</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setHasError(true)}
    />
  );
}
