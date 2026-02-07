import { useState } from 'react';
import { Link, useNavigate, useRouterState } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/menu', label: 'Menu' },
    { href: '/offers', label: 'Offers' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleOrderOnline = () => {
    window.open('https://www.zomato.com', '_blank');
  };

  const handleBookTable = () => {
    navigate({ to: '/contact' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <BrandLogo size="md" />
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold leading-tight text-primary md:text-xl">
              Taste & Tales
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              Multicuisine Restaurant
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPath === link.href ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" size="sm" onClick={handleOrderOnline} className="transition-all hover:shadow-warm">
            Order Online
          </Button>
          <Button size="sm" onClick={handleBookTable} className="transition-all hover:shadow-warm">
            Book a Table
          </Button>
          <Button variant="ghost" size="icon" asChild className="transition-colors">
            <a href="tel:+917567678009" aria-label="Call us">
              <Phone className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button variant="ghost" size="icon" asChild className="md:hidden">
            <a href="tel:+917567678009" aria-label="Call us">
              <Phone className="h-5 w-5" />
            </a>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col gap-6 py-6">
                <div className="flex items-center gap-2">
                  <BrandLogo size="sm" />
                  <span className="font-serif text-xl font-bold text-primary">
                    Taste & Tales
                  </span>
                </div>
                
                <nav className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        to={link.href}
                        className={`rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent ${
                          currentPath === link.href ? 'bg-accent text-accent-foreground' : ''
                        }`}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className="flex flex-col gap-3 border-t pt-6">
                  <Button onClick={handleOrderOnline} className="w-full">
                    Order Online
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsOpen(false);
                      handleBookTable();
                    }}
                    className="w-full"
                  >
                    Book a Table
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <a href="tel:+917567678009">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
