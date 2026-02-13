import { useNavigate, useSearch } from '@tanstack/react-router';
import Section from '@/components/Section';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { menuCategories } from '@/data/menuData';
import { MENU_SCREENSHOT_ASSETS } from '@/lib/menuScreenshotAssets';
import MenuScreenshotGallery from '@/components/MenuScreenshotGallery';
import MenuCategoryCarousel from '@/components/MenuCategoryCarousel';

export default function MenuPage() {
  const navigate = useNavigate();
  const search = useSearch({ from: '/menu' });
  const searchQuery = search.q || '';

  // Update URL when search query changes
  const handleSearchChange = (value: string) => {
    if (value) {
      navigate({ to: '/menu', search: { q: value }, replace: true });
    } else {
      navigate({ to: '/menu', search: {}, replace: true });
    }
  };

  // Filter menu items based on search query with improved matching
  const normalizedQuery = searchQuery.toLowerCase().trim();
  const filteredCategories = menuCategories.map(category => ({
    ...category,
    items: category.items.filter(item => {
      const nameMatch = item.name.toLowerCase().includes(normalizedQuery);
      const descriptionMatch = item.description?.toLowerCase().includes(normalizedQuery);
      const categoryMatch = category.name.toLowerCase().includes(normalizedQuery);
      return nameMatch || descriptionMatch || categoryMatch;
    })
  })).filter(category => category.items.length > 0);

  return (
    <>
      <Seo 
        title="Menu – Taste & Tales Restaurant near GIFT City Gandhinagar"
        description="Explore our extensive menu featuring Indian specialties, international cuisine, tandoori delights, and more at Taste & Tales Restaurant near GIFT City Gandhinagar."
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Menu
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Discover a world of flavors with our carefully curated menu featuring authentic Indian cuisine, international favorites, and signature specialties.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Screenshots Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <MenuScreenshotGallery screenshots={MENU_SCREENSHOT_ASSETS} />
        </div>
      </Section>

      {/* Search Bar */}
      <Section className="pt-8 pb-4">
        <div className="max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            Search Menu Items
          </h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>
      </Section>

      {/* Menu Categories Carousel */}
      <Section className="pt-4">
        <MenuCategoryCarousel categories={filteredCategories} />
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Order?
          </h2>
          <p className="text-muted-foreground mb-8">
            Experience our delicious cuisine from the comfort of your home or visit us for an unforgettable dining experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="transition-all hover:shadow-warm"
              onClick={() => window.open('https://www.zomato.com', '_blank')}
            >
              Order Online
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="transition-all hover:shadow-warm"
              asChild
            >
              <a href="tel:+917567678009">Call to Reserve</a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

