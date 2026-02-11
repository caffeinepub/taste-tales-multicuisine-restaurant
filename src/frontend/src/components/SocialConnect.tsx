import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SiInstagram, SiGoogle } from 'react-icons/si';
import { SOCIAL_CONNECT_LINKS } from '@/lib/socialConnectLinks';

interface SocialConnectProps {
  variant?: 'default' | 'compact';
  className?: string;
}

/**
 * Social Connect component displaying visible text links for Instagram and Google Reviews.
 * Provides clear, accessible calls-to-action for social engagement.
 */
export default function SocialConnect({ variant = 'default', className = '' }: SocialConnectProps) {
  if (variant === 'compact') {
    return (
      <div className={`space-y-3 ${className}`}>
        <h3 className="font-semibold text-sm">Social Connect</h3>
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="w-full justify-start transition-all hover:shadow-warm hover:border-primary"
          >
            <a
              href={SOCIAL_CONNECT_LINKS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram className="mr-2 h-4 w-4" />
              {SOCIAL_CONNECT_LINKS.instagram.label}
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="w-full justify-start transition-all hover:shadow-warm hover:border-primary"
          >
            <a
              href={SOCIAL_CONNECT_LINKS.googleReview.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGoogle className="mr-2 h-4 w-4" />
              {SOCIAL_CONNECT_LINKS.googleReview.label}
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Card className={`border-2 ${className}`}>
      <CardContent className="p-6">
        <h3 className="font-serif text-lg font-semibold mb-4">Social Connect</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Stay connected with us and share your experience
        </p>
        <div className="flex flex-col gap-3">
          <Button
            variant="outline"
            asChild
            className="w-full justify-start transition-all hover:shadow-warm hover:border-primary"
          >
            <a
              href={SOCIAL_CONNECT_LINKS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram className="mr-2 h-5 w-5" />
              {SOCIAL_CONNECT_LINKS.instagram.label}
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="w-full justify-start transition-all hover:shadow-warm hover:border-primary"
          >
            <a
              href={SOCIAL_CONNECT_LINKS.googleReview.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGoogle className="mr-2 h-5 w-5" />
              {SOCIAL_CONNECT_LINKS.googleReview.label}
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
