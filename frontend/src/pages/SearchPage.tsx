import { useSearch } from '@tanstack/react-router';
import Section from '@/components/Section';
import Seo from '@/components/Seo';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, FileText, Tag, Menu, AlertCircle } from 'lucide-react';
import { searchGlobal, SearchResult } from '@/lib/globalSearchContent';
import { Link, useNavigate } from '@tanstack/react-router';
import { useState, FormEvent } from 'react';
import type { LucideIcon } from 'lucide-react';

export default function SearchPage() {
  const search = useSearch({ from: '/search' });
  const navigate = useNavigate();
  const query = search.q || '';
  const [localQuery, setLocalQuery] = useState(query);

  const { menuResults, offerResults, pageResults, totalResults } = searchGlobal(query);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = localQuery.trim();
    if (trimmed) {
      navigate({ to: '/search', search: { q: trimmed } });
    } else {
      navigate({ to: '/search' });
    }
  };

  const renderResultGroup = (
    title: string,
    Icon: LucideIcon,
    results: SearchResult[],
    emptyMessage: string
  ) => {
    if (results.length === 0) return null;

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-primary" />
          <h2 className="font-serif text-2xl font-bold">{title}</h2>
          <Badge variant="secondary">{results.length}</Badge>
        </div>
        <div className="grid gap-4">
          {results.map((result, index) => (
            <Link key={index} to={result.link}>
              <Card className="transition-all hover:shadow-warm hover:border-primary/50 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-lg">{result.title}</CardTitle>
                        {result.badge && (
                          <Badge variant="outline" className="text-xs">
                            {result.badge}
                          </Badge>
                        )}
                      </div>
                      {result.description && (
                        <CardDescription className="text-sm">
                          {result.description}
                        </CardDescription>
                      )}
                      {result.category && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Category: {result.category}
                        </p>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <Seo
        title={query ? `Search results for "${query}" – Taste & Tales` : 'Search – Taste & Tales'}
        description="Search our menu, offers, and pages to find exactly what you're looking for at Taste & Tales Restaurant."
      />

      {/* Search Header */}
      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="font-serif text-4xl font-bold md:text-5xl mb-4">
              Search <span className="text-primary">Taste & Tales</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Find menu items, offers, and information across our site
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search anything..."
                  value={localQuery}
                  onChange={(e) => setLocalQuery(e.target.value)}
                  className="pl-10 h-12 text-base"
                  aria-label="Search site"
                  autoFocus
                />
              </div>
              <Button type="submit" size="lg" className="shrink-0">
                Search
              </Button>
            </div>
          </form>

          {query && (
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {totalResults > 0 ? (
                  <>
                    Found <span className="font-semibold text-foreground">{totalResults}</span>{' '}
                    {totalResults === 1 ? 'result' : 'results'} for{' '}
                    <span className="font-semibold text-foreground">"{query}"</span>
                  </>
                ) : (
                  <>
                    No results found for{' '}
                    <span className="font-semibold text-foreground">"{query}"</span>
                  </>
                )}
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* Results */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          {!query ? (
            // Empty state - no query
            <Card className="border-2 border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <Search className="h-16 w-16 text-muted-foreground/50 mb-4" />
                <h3 className="font-serif text-2xl font-bold mb-2">Start Your Search</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Enter a keyword above to search across our menu, offers, and pages. Try searching
                  for a dish name, cuisine type, or offer.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-accent"
                    onClick={() => {
                      setLocalQuery('pizza');
                      navigate({ to: '/search', search: { q: 'pizza' } });
                    }}
                  >
                    pizza
                  </Badge>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-accent"
                    onClick={() => {
                      setLocalQuery('paneer');
                      navigate({ to: '/search', search: { q: 'paneer' } });
                    }}
                  >
                    paneer
                  </Badge>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-accent"
                    onClick={() => {
                      setLocalQuery('offers');
                      navigate({ to: '/search', search: { q: 'offers' } });
                    }}
                  >
                    offers
                  </Badge>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-accent"
                    onClick={() => {
                      setLocalQuery('chinese');
                      navigate({ to: '/search', search: { q: 'chinese' } });
                    }}
                  >
                    chinese
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ) : totalResults === 0 ? (
            // No results state
            <Card className="border-2">
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <AlertCircle className="h-16 w-16 text-muted-foreground/50 mb-4" />
                <h3 className="font-serif text-2xl font-bold mb-2">No Results Found</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  We couldn't find anything matching "{query}". Try different keywords or browse our
                  menu and pages.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" onClick={() => navigate({ to: '/menu' })}>
                    Browse Menu
                  </Button>
                  <Button variant="outline" onClick={() => navigate({ to: '/offers' })}>
                    View Offers
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setLocalQuery('');
                      navigate({ to: '/search' });
                    }}
                  >
                    Clear Search
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            // Results
            <>
              {renderResultGroup('Menu Items', Menu, menuResults, 'No menu items found')}
              {renderResultGroup('Offers', Tag, offerResults, 'No offers found')}
              {renderResultGroup('Pages', FileText, pageResults, 'No pages found')}
            </>
          )}
        </div>
      </Section>

      {/* Quick Links */}
      {query && totalResults > 0 && (
        <Section className="bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-bold mb-6">Explore More</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="outline" onClick={() => navigate({ to: '/' })}>
                Home
              </Button>
              <Button variant="outline" onClick={() => navigate({ to: '/menu' })}>
                Full Menu
              </Button>
              <Button variant="outline" onClick={() => navigate({ to: '/offers' })}>
                All Offers
              </Button>
              <Button variant="outline" onClick={() => navigate({ to: '/contact' })}>
                Contact Us
              </Button>
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
