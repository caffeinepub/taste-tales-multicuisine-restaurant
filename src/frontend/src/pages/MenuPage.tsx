import Section from '@/components/Section';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Download } from 'lucide-react';

export default function MenuPage() {
  const menuCategories = [
    {
      name: 'North Indian',
      icon: '🍛',
      description: 'Rich, aromatic dishes inspired by timeless recipes',
      items: [
        'Butter Chicken',
        'Paneer Tikka Masala',
        'Dal Makhani',
        'Tandoori Roti',
        'Biryani',
        'Naan Varieties',
      ],
    },
    {
      name: 'Chinese',
      icon: '🥢',
      description: 'Classic textures and bold flavours crafted with balance',
      items: [
        'Hakka Noodles',
        'Manchurian',
        'Fried Rice',
        'Spring Rolls',
        'Chilli Chicken',
        'Szechuan Dishes',
      ],
    },
    {
      name: 'Mexican',
      icon: '🌮',
      description: 'Vibrant plates with warm spices and fresh ingredients',
      items: [
        'Tacos',
        'Burritos',
        'Quesadillas',
        'Nachos',
        'Enchiladas',
        'Mexican Rice',
      ],
    },
    {
      name: 'Thai',
      icon: '🍜',
      description: 'Fragrant bowls layered with sweet, spicy, and sour notes',
      items: [
        'Pad Thai',
        'Green Curry',
        'Red Curry',
        'Tom Yum Soup',
        'Thai Fried Rice',
        'Spring Rolls',
      ],
    },
    {
      name: 'Italian',
      icon: '🍝',
      description: 'Comforting pastas, sauces, and timeless favourites',
      items: [
        'Pasta Varieties',
        'Wood-Fired Pizza',
        'Risotto',
        'Lasagna',
        'Garlic Bread',
        'Bruschetta',
      ],
    },
    {
      name: 'Fast Food',
      icon: '🍔',
      description: 'Quick bites made with care and quality',
      items: [
        'Burgers',
        'Sandwiches',
        'French Fries',
        'Wraps',
        'Nuggets',
        'Hot Dogs',
      ],
    },
    {
      name: 'Desserts',
      icon: '🍰',
      description: 'Indulgent treats to end your story on a sweet note',
      items: [
        'Ice Cream',
        'Brownies',
        'Cakes',
        'Pastries',
        'Gulab Jamun',
        'Tiramisu',
      ],
    },
    {
      name: 'Shakes',
      icon: '🥤',
      description: 'Refreshing beverages and thick shakes',
      items: [
        'Chocolate Shake',
        'Strawberry Shake',
        'Mango Shake',
        'Oreo Shake',
        'Fresh Juices',
        'Smoothies',
      ],
    },
  ];

  const handleDownloadMenu = () => {
    window.open('/assets/menu.pdf', '_blank');
  };

  return (
    <>
      <Seo 
        title="Menu – Taste & Tales Restaurant near GIFT City Gandhinagar"
        description="Explore our thoughtfully crafted menu featuring North Indian, Chinese, Mexican, Thai, Italian, Fast Food, Desserts & Shakes. Download our full menu PDF."
      />

      {/* Hero */}
      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Our Menu</Badge>
          <h1 className="font-serif text-4xl font-bold md:text-5xl mb-6">
            Explore Our <span className="text-primary">Crafted Menu</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            From traditional favourites to international delights, discover a world of flavours thoughtfully prepared
          </p>
          <Button size="lg" onClick={handleDownloadMenu} className="transition-all hover:shadow-warm-lg">
            <Download className="mr-2 h-5 w-5" />
            Download Menu (PDF)
          </Button>
        </div>
      </Section>

      {/* Menu Categories - Desktop Cards */}
      <Section className="hidden md:block">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.map((category, index) => (
            <Card key={index} className="border-2 transition-all hover:shadow-warm-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{category.icon}</span>
                  <CardTitle className="font-serif text-2xl">{category.name}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Menu Categories - Mobile Accordion */}
      <Section className="md:hidden">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {menuCategories.map((category, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-2 rounded-lg px-4"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <div className="text-left">
                    <div className="font-serif text-lg font-semibold">{category.name}</div>
                    <div className="text-xs text-muted-foreground">{category.description}</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pt-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* CTA */}
      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold md:text-4xl mb-4">
            Ready to Order?
          </h2>
          <p className="text-muted-foreground mb-6">
            Get your favourite dishes delivered or visit us for a memorable dining experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="transition-all hover:shadow-warm-lg">
              <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer">
                Order on Zomato
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="transition-all hover:shadow-warm">
              <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer">
                Order on Swiggy
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
