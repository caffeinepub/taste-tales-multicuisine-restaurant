import React from 'react';
import { ICON_POSITIONS } from '@/data/menuData';

interface MenuCategoryIconProps {
  iconKey: string;
  className?: string;
}

export function MenuCategoryIcon({ iconKey, className = '' }: MenuCategoryIconProps) {
  const position = ICON_POSITIONS[iconKey];

  if (!position) {
    // Fallback for missing icons
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-primary text-lg">•</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-block ${className}`}
      style={{
        width: '48px',
        height: '48px',
        backgroundImage: 'url(/assets/generated/menu-icons-sheet.dim_2048x2048.png)',
        backgroundPosition: `-${position.x}px -${position.y}px`,
        backgroundSize: '2048px 2048px',
        imageRendering: 'crisp-edges',
      }}
      role="img"
      aria-label={`${iconKey} icon`}
    />
  );
}
