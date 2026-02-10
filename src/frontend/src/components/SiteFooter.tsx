import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import { MapPin, Phone, Clock, Heart } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-muted/30">
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
                className="h-9 w-9 transition-colors hover:text-primary hover:bg-primary/10"
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
                className="h-9 w-9 transition-colors hover:text-primary hover:bg-primary/10"
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

          {/* Order Online */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">Order Online</h3>
            <p className="text-sm text-muted-foreground">
              Enjoy our delicious food from the comfort of your home.
            </p>
            <Button 
              className="w-full transition-all hover:shadow-warm" 
              onClick={() => window.open('https://www.zomato.com', '_blank')}
            >
              Order on Zomato
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
          <p>
            © {currentYear}. Built with <Heart className="inline h-3.5 w-3.5 text-primary fill-primary" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-xs">
            Restaurant near GIFT City Gandhinagar
          </p>
        </div>
      </div>
    </footer>
  );
}
