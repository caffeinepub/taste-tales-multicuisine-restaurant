import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SiFacebook, SiInstagram, SiX, SiGoogle } from 'react-icons/si';
import { MapPin, Phone, Clock } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import { SOCIAL_LINKS } from '@/lib/socialLinks';

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border/60 bg-background/95 backdrop-blur-md">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BrandLogo size="xl" />
              <span className="font-serif text-xl font-bold text-primary">
                Taste & Tales
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              A World of Flavours, Thoughtfully Crafted. Premium family-friendly multicuisine dining experience.
            </p>
            <div className="flex gap-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-9 w-9 transition-colors hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a 
                  href={SOCIAL_LINKS.facebook}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                >
                  <SiFacebook className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-9 w-9 transition-colors hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a 
                  href={SOCIAL_LINKS.instagram}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram page"
                >
                  <SiInstagram className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-9 w-9 transition-colors hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a 
                  href={SOCIAL_LINKS.twitter}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit our Twitter page"
                >
                  <SiX className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">Quick Links</h3>
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
            <h3 className="font-serif text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                <span>Raysan, near GIFT City, Gandhinagar, Gujarat</span>
              </div>
              <div className="flex gap-2">
                <Phone className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                <a href="tel:+917567678009" className="hover:text-primary transition-colors">
                  +91 75676 78009
                </a>
              </div>
              <div className="flex gap-2">
                <Clock className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                <span>Open Daily: 11:00 AM – 11:00 PM</span>
              </div>
            </div>
          </div>

          {/* Social Connect */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">Social Connect</h3>
            <p className="text-sm text-muted-foreground">
              Stay connected with us and share your experience.
            </p>
            <div className="flex flex-col gap-3">
              <Button 
                variant="outline"
                className="w-full justify-start transition-all hover:shadow-warm" 
                asChild
              >
                <a 
                  href={SOCIAL_LINKS.instagram}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <SiInstagram className="mr-2 h-4 w-4" />
                  Connect us on Instagram
                </a>
              </Button>
              <Button 
                variant="outline"
                className="w-full justify-start transition-all hover:shadow-warm" 
                asChild
              >
                <a 
                  href={SOCIAL_LINKS.google}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <SiGoogle className="mr-2 h-4 w-4" />
                  Review us on Google
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>
            Copyright © {new Date().getFullYear()} Taste & Tales - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
