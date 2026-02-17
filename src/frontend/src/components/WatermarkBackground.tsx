import { useEffect, useState } from 'react';
import { WATERMARK_ASSETS } from '@/lib/brandAssets';

export default function WatermarkBackground() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Defer watermark loading until after initial content is interactive
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Multiple Indian cooking themed watermark layers for visual depth - using optimized 1200x800 images */}
      <div 
        className="absolute inset-0 bg-repeat opacity-[0.03]"
        style={{
          backgroundImage: `url(${WATERMARK_ASSETS.tile1})`,
          backgroundSize: '600px 400px',
          backgroundPosition: '0 0',
        }}
      />
      <div 
        className="absolute inset-0 bg-repeat opacity-[0.02]"
        style={{
          backgroundImage: `url(${WATERMARK_ASSETS.tile2})`,
          backgroundSize: '650px 433px',
          backgroundPosition: '200px 100px',
        }}
      />
      <div 
        className="absolute inset-0 bg-repeat opacity-[0.02]"
        style={{
          backgroundImage: `url(${WATERMARK_ASSETS.tile3})`,
          backgroundSize: '625px 417px',
          backgroundPosition: '400px 200px',
        }}
      />
    </div>
  );
}
