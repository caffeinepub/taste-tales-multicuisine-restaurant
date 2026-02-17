import { Button } from '@/components/ui/button';
import { MapPin, Navigation } from 'lucide-react';
import { DIRECTIONS_URL } from '@/lib/directions';

export default function GetDirectionsBar() {
  return (
    <div className="sticky top-[73px] z-40 border-b bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/90">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/10">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-primary-foreground truncate">
                Visit Us Today
              </p>
              <p className="text-xs text-primary-foreground/80 truncate">
                Near GIFT City, Gandhinagar
              </p>
            </div>
          </div>
          <Button 
            asChild 
            size="sm" 
            variant="secondary"
            className="shrink-0 font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <a 
              href={DIRECTIONS_URL}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Navigation className="mr-2 h-4 w-4" />
              Get Directions
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
