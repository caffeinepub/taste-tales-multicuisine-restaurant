import { useState } from 'react';
import { BRAND_ASSETS } from '@/lib/brandAssets';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

export default function BrandLogo({ size = 'md', className = '', showText = false }: BrandLogoProps) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10 md:h-12 md:w-12',
    lg: 'h-24 w-24 md:h-32 md:w-32',
    xl: 'h-12 w-12',
  };

  const textSizeClasses = {
    sm: 'text-base',
    md: 'text-lg md:text-xl',
    lg: 'text-2xl md:text-3xl',
    xl: 'text-xl',
  };

  if (imageError) {
    // Fallback: Show text-based brand mark
    return (
      <div className={`flex items-center justify-center rounded-full bg-primary/10 ${sizeClasses[size]} ${className}`}>
        <span className={`font-serif font-bold text-primary ${textSizeClasses[size]}`}>
          T&T
        </span>
      </div>
    );
  }

  return (
    <img 
      src={BRAND_ASSETS.logo}
      alt={showText ? "Taste & Tales Logo" : "Taste & Tales"}
      className={`${sizeClasses[size]} ${className}`}
      onError={() => setImageError(true)}
      width={size === 'lg' ? '128' : size === 'xl' ? '48' : '48'}
      height={size === 'lg' ? '128' : size === 'xl' ? '48' : '48'}
    />
  );
}
