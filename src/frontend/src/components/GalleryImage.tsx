import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface GalleryImageProps {
  src: string;
  alt: string;
  onClick?: () => void;
}

export default function GalleryImage({ src, alt, onClick }: GalleryImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <Card className="aspect-[3/2] flex flex-col items-center justify-center gap-3 bg-muted/50 p-6 text-center">
        <ImageOff className="h-12 w-12 text-muted-foreground/50" />
        <p className="text-sm text-muted-foreground">Image unavailable</p>
      </Card>
    );
  }

  return (
    <Card 
      className="group relative aspect-[3/2] overflow-hidden cursor-pointer transition-all hover:shadow-warm hover:scale-[1.02]"
      onClick={onClick}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-muted/50 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Card>
  );
}
