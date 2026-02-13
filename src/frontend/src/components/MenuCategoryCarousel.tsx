import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MenuCategory } from '@/data/menuData';
import { useHorizontalSwipe } from '@/hooks/useHorizontalSwipe';
import { formatMenuPrice } from '@/lib/menuPrice';

interface MenuCategoryCarouselProps {
  categories: MenuCategory[];
}

export default function MenuCategoryCarousel({ categories }: MenuCategoryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(categories.length - 1, prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, categories.length]);

  // Swipe navigation
  const swipeRef = useHorizontalSwipe({
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrevious,
  });

  if (categories.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No menu items found</p>
      </div>
    );
  }

  const currentCategory = categories[currentIndex];
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === categories.length - 1;

  return (
    <div className="w-full max-w-4xl mx-auto" ref={swipeRef} tabIndex={0}>
      {/* Navigation Controls */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="outline"
          size="lg"
          onClick={goToPrevious}
          disabled={isFirstSlide}
          className="gap-2"
        >
          <ChevronLeft className="h-5 w-5" />
          Previous
        </Button>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {currentIndex + 1} of {categories.length}
          </p>
        </div>

        <Button
          variant="outline"
          size="lg"
          onClick={goToNext}
          disabled={isLastSlide}
          className="gap-2"
        >
          Next
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Category Card */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{currentCategory.icon}</span>
            <CardTitle className="text-2xl md:text-3xl font-serif uppercase">
              {currentCategory.name}
            </CardTitle>
          </div>
          <p className="text-base text-muted-foreground">{currentCategory.description}</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {currentCategory.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex justify-between items-start gap-3 pb-3 border-b border-border/50 last:border-0"
              >
                <div className="flex-1">
                  <span className="text-base text-foreground block">{item.name}</span>
                  {item.description && (
                    <span className="text-sm text-muted-foreground block mt-1">
                      {item.description}
                    </span>
                  )}
                </div>
                <Badge variant="secondary" className="shrink-0 text-base px-3 py-1">
                  {formatMenuPrice(item)}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Keyboard hint */}
      <p className="text-center text-xs text-muted-foreground mt-4">
        Use arrow keys ← → or swipe to navigate
      </p>
    </div>
  );
}
