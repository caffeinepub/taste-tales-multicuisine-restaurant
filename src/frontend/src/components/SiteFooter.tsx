import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import { MapPin, Phone, Clock, Heart } from 'lucide-react';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/assets/generated/taste-tales-logo.dim_512x512.png" 
                alt="Taste & Tales" 
                className="h-12 w-12"
                width="48"
                height="48"
              />
              <span className="font-serif text-xl font-bold text-primary">
                Taste & Tales
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              A World of Flavours Under One Roof. Premium family-friendly multicuisine dining experience.
            </p>
            <div className="flex gap-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-9 w-9"
                asChild
              >
                <a 
                  href="https://facebook.com" 
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
                className="h-9 w-9"
                asChild
              >
                <a 
                  href="https://instagram.com" 
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
                className="h-9 w-9"
                asChild
              >
                <a 
                  href="https://twitter.com" 
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
              <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex gap-3 text-sm">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  Raysan, Near GIFT City<br />Gandhinagar, Gujarat
                </span>
              </div>
              <div className="flex gap-3 text-sm">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a 
                  href="tel:+917567678009" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 75676 78009
                </a>
              </div>
              <div className="flex gap-3 text-sm">
                <Clock className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  Open Daily<br />11:00 AM – 11:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Order Online */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">Order Online</h3>
            <p className="text-sm text-muted-foreground">
              Get your favorite dishes delivered to your doorstep
            </p>
            <div className="flex flex-col gap-2">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                asChild
              >
                <a 
                  href="https://www.zomato.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Order via Zomato
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                asChild
              >
                <a 
                  href="https://www.swiggy.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Order via Swiggy
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
          <p>
            © {currentYear} Taste & Tales. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 fill-primary text-primary" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
