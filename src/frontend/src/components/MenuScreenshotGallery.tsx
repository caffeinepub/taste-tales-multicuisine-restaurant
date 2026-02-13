import { useState } from 'react';

interface MenuScreenshotGalleryProps {
  screenshots: readonly string[];
}

export default function MenuScreenshotGallery({ screenshots }: MenuScreenshotGalleryProps) {
  return (
    <div className="space-y-6">
      {/* Screenshot Viewer */}
      <div className="relative">
        <MenuScreenshotImage 
          url={screenshots[0]} 
          index={0} 
        />
      </div>
    </div>
  );
}

interface MenuScreenshotImageProps {
  url: string;
  index: number;
}

function MenuScreenshotImage({ url, index }: MenuScreenshotImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    // Render nothing visible when image fails to load
    // This maintains layout and keeps navigation functional
    return <div className="w-full min-h-[400px]" />;
  }

  return (
    <div className="relative w-full bg-muted/20 rounded-lg overflow-hidden border border-border">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center min-h-[400px]">
          <div className="animate-pulse text-muted-foreground">Loading menu screenshot {index + 1}...</div>
        </div>
      )}
      <img
        src={url}
        alt={`Menu screenshot ${index + 1}`}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-auto object-contain transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
}
