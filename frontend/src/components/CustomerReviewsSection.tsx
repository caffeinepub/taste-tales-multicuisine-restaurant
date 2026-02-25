import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ExternalLink } from 'lucide-react';
import { CUSTOMER_REVIEWS, GOOGLE_REVIEWS_URL } from '@/data/customerReviews';

export default function CustomerReviewsSection() {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating
                ? 'fill-amber-400 text-amber-400'
                : 'fill-muted text-muted'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">What Our Customers Say</Badge>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Customer <span className="text-primary">Reviews</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Real experiences from our valued guests
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {CUSTOMER_REVIEWS.map((review) => (
          <Card key={review.id} className="border-2 transition-all hover:shadow-warm-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{review.name}</h3>
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                "{review.text}"
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button
          variant="outline"
          size="lg"
          asChild
          className="transition-all hover:shadow-warm"
        >
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <ExternalLink className="h-5 w-5" />
            View More Reviews on Google
          </a>
        </Button>
      </div>
    </div>
  );
}
