import { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface HeaderSearchProps {
  initialValue?: string;
  onSubmit: (query: string) => void;
  className?: string;
}

export default function HeaderSearch({ initialValue = '', onSubmit, className = '' }: HeaderSearchProps) {
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="relative flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 h-9"
            aria-label="Search site"
          />
        </div>
        <Button type="submit" size="sm" className="shrink-0">
          Search
        </Button>
      </div>
    </form>
  );
}
