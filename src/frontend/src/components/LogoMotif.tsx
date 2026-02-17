import { useState } from 'react';
import { BRAND_ASSETS } from '@/lib/brandAssets';

interface LogoMotifProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LogoMotif({ size = 'md', className = '' }: LogoMotifProps) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  const dimensions = {
    sm: { width: '32', height: '32' },
    md: { width: '48', height: '48' },
    lg: { width: '64', height: '64' },
  };

  if (imageError) {
    // Fallback: Show text-based brand mark with decorative opacity
    return (
      <div className={`flex items-center justify-center rounded-full bg-primary/5 opacity-20 ${sizeClasses[size]} ${className}`}>
        <span className={`font-serif font-bold text-primary ${textSizeClasses[size]}`}>
          T&T
        </span>
      </div>
    );
  }

  return (
    <img 
      src={BRAND_ASSETS.logo}
      alt="" 
      className={`${sizeClasses[size]} opacity-20 ${className}`}
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      width={dimensions[size].width}
      height={dimensions[size].height}
      onError={() => setImageError(true)}
    />
  );
}
