import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SiInstagram, SiGoogle } from 'react-icons/si';
import { MapPin, Phone, Clock } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import { SOCIAL_CONNECT_LINKS } from '@/lib/socialConnectLinks';

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border/60 bg-background/95 backdrop-blur-md">
      <div className="container py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BrandLogo size="xl" />
              <span className="font-serif text-lg sm:text-xl font-bold text-primary">
                Taste & Tales
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              A World of Flavours, Thoughtfully Crafted. Premium family-friendly multicuisine dining experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-base sm:text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Menu
              </Link>
              <Link to="/offers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Offers & Deals
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-base sm:text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex gap-2 items-start">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                <span className="break-words">Raysan, near GIFT City, Gandhinagar, Gujarat</span>
              </div>
              <div className="flex gap-2 items-start">
                <Phone className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                <a href="tel:+917567678009" className="hover:text-primary transition-colors break-all">
                  +91 75676 78009
                </a>
              </div>
              <div className="flex gap-2 items-start">
                <Clock className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                <span className="break-words">Open Daily: 11:00 AM – 11:00 PM</span>
              </div>
            </div>
          </div>

          {/* Social Connect */}
          <div className="space-y-4">
            <h3 className="font-serif text-base sm:text-lg font-semibold">Social Connect</h3>
            <p className="text-sm text-muted-foreground">
              Stay connected and share your experience
            </p>
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
                  <SiInstagram className="mr-2 h-4 w-4 shrink-0" />
                  <span className="truncate">{SOCIAL_CONNECT_LINKS.instagram.label}</span>
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
                  <SiGoogle className="mr-2 h-4 w-4 shrink-0" />
                  <span className="truncate">{SOCIAL_CONNECT_LINKS.googleReview.label}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-6 sm:my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
          <p className="break-words">
            Copyright © {new Date().getFullYear()} Taste & Tales - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
