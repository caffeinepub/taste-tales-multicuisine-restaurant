import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Search, X, FileText, Gift, UtensilsCrossed, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { useGlobalSearch } from '@/hooks/useGlobalSearch';
import { buildMenuFocusUrl } from '@/utils/urlParams';

export default function GlobalSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const debouncedQuery = useDebouncedValue(query, 300);
  const results = useGlobalSearch(debouncedQuery);

  const totalResults =
    results.pages.length +
    results.offers.length +
    results.menuCategories.length +
    results.menuItems.length;

  const hasResults = totalResults > 0;
  const showResults = isOpen && debouncedQuery.trim().length > 0;

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const handleResultClick = (type: string, data: any) => {
    setIsOpen(false);
    setQuery('');

    if (type === 'page') {
      navigate({ to: data.path });
    } else if (type === 'offer') {
      navigate({ to: '/offers' });
    } else if (type === 'menu-category') {
      const url = buildMenuFocusUrl(data.categoryId);
      navigate({ to: url as any });
    } else if (type === 'menu-item') {
      const url = buildMenuFocusUrl(data.categoryId, data.itemName);
      navigate({ to: url as any });
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search the site…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="pl-9 pr-9 w-full"
          aria-label="Search the site"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {showResults && (
        <div className="absolute top-full mt-2 w-full min-w-[280px] sm:min-w-[320px] bg-popover border border-border rounded-lg shadow-warm-lg z-50 overflow-hidden">
          <ScrollArea className="max-h-[60vh] sm:max-h-[400px]">
            {!hasResults ? (
              <div className="p-4 sm:p-6 text-center text-muted-foreground">
                <p className="text-sm">No results found for "{debouncedQuery}"</p>
                <p className="text-xs mt-1">Try searching for menu items, pages, or offers</p>
              </div>
            ) : (
              <div className="p-2">
                {/* Pages */}
                {results.pages.length > 0 && (
                  <div className="mb-2">
                    <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Pages
                    </div>
                    {results.pages.map((page, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleResultClick('page', page)}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors text-left"
                      >
                        <FileText className="h-4 w-4 text-primary flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">{page.title}</div>
                          {page.description && (
                            <div className="text-xs text-muted-foreground truncate">{page.description}</div>
                          )}
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Offers */}
                {results.offers.length > 0 && (
                  <div className="mb-2">
                    <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Offers
                    </div>
                    {results.offers.map((offer, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleResultClick('offer', offer)}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors text-left"
                      >
                        <Gift className="h-4 w-4 text-accent flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">{offer.title}</div>
                          <div className="text-xs text-muted-foreground line-clamp-1">{offer.description}</div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Menu Categories */}
                {results.menuCategories.length > 0 && (
                  <div className="mb-2">
                    <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Menu Categories
                    </div>
                    {results.menuCategories.map((category, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleResultClick('menu-category', category)}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors text-left"
                      >
                        <UtensilsCrossed className="h-4 w-4 text-primary flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">{category.categoryName}</div>
                          <div className="text-xs text-muted-foreground truncate">{category.description}</div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Menu Items */}
                {results.menuItems.length > 0 && (
                  <div>
                    <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Menu Items
                    </div>
                    {results.menuItems.slice(0, 10).map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleResultClick('menu-item', item)}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors text-left"
                      >
                        <UtensilsCrossed className="h-4 w-4 text-chart-1 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">{item.itemName}</div>
                          <div className="text-xs text-muted-foreground truncate">
                            {item.categoryName} • ₹{item.price}
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      </button>
                    ))}
                    {results.menuItems.length > 10 && (
                      <div className="px-3 py-2 text-xs text-muted-foreground text-center">
                        +{results.menuItems.length - 10} more items
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </ScrollArea>
        </div>
      )}

      {showResults && !hasResults && debouncedQuery.trim().length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-popover border border-border rounded-lg shadow-warm-lg z-50 p-4 sm:p-6 text-center text-muted-foreground">
          <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
          <p className="text-sm">Start typing to search</p>
          <p className="text-xs mt-1">Search for menu items, pages, or offers</p>
        </div>
      )}
    </div>
  );
}
