import React, { useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BrandLogo from '@/components/BrandLogo';
import GlobalSearch from '@/components/GlobalSearch/GlobalSearch';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { useIsCallerAdmin } from '@/hooks/useQueries';
import { SiInstagram, SiGoogle } from 'react-icons/si';
import { SOCIAL_CONNECT_LINKS } from '@/lib/socialConnectLinks';

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { identity } = useInternetIdentity();
  const { data: isAdmin } = useIsCallerAdmin();

  const isAuthenticated = !!identity;
  const showMenuManagement = isAuthenticated && isAdmin;

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/menu', label: 'Menu' },
    { to: '/offers', label: 'Offers' },
    { to: '/contact', label: 'Contact' },
  ];

  if (showMenuManagement) {
    navLinks.push({ to: '/menu-management', label: 'Menu Management' });
  }

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-xl bg-background/80 supports-[backdrop-filter]:bg-background/60 shadow-warm-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-14 sm:h-16 items-center justify-between gap-2 sm:gap-4">
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
            <BrandLogo size="sm" />
            <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-primary tracking-tight truncate">
              Taste & Tales
            </span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-md mx-4">
            <GlobalSearch />
          </div>

          {/* Desktop Navigation & Social Connect */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4 flex-shrink-0">
            <nav className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  <Button
                    variant={isActive(link.to) ? 'default' : 'ghost'}
                    size="sm"
                    className={isActive(link.to) ? 'bg-primary text-primary-foreground' : ''}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </nav>

            {/* Desktop Social Connect */}
            <div className="flex items-center gap-2 pl-2 xl:pl-4 border-l border-border/40">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="transition-all hover:bg-primary/10 hover:text-primary"
              >
                <a
                  href={SOCIAL_CONNECT_LINKS.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us on Instagram"
                >
                  <SiInstagram className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="transition-all hover:bg-primary/10 hover:text-primary"
              >
                <a
                  href={SOCIAL_CONNECT_LINKS.googleReview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Review us on Google"
                >
                  <SiGoogle className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-accent flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Search & Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 border-t border-border/40">
            {/* Mobile Search */}
            <div className="px-2">
              <GlobalSearch />
            </div>

            {/* Mobile Nav Links */}
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant={isActive(link.to) ? 'default' : 'ghost'}
                    className={`w-full justify-start ${isActive(link.to) ? 'bg-primary text-primary-foreground' : ''}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </nav>

            {/* Mobile Social Connect */}
            <div className="px-2 pt-4 border-t border-border/40">
              <h3 className="font-semibold text-sm mb-3 text-muted-foreground">Social Connect</h3>
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
                    onClick={() => setMobileMenuOpen(false)}
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
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <SiGoogle className="mr-2 h-4 w-4" />
                    {SOCIAL_CONNECT_LINKS.googleReview.label}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
