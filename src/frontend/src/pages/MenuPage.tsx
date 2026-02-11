import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Seo from '@/components/Seo';
import Section from '@/components/Section';
import { useGetMenu } from '@/hooks/useQueries';
import { mergeMenuData } from '@/lib/menuAdapters';
import { MenuCategoryIcon } from '@/components/menu/MenuCategoryIcon';
import { Loader2 } from 'lucide-react';

export default function MenuPage() {
  const { data: backendMenu, isLoading } = useGetMenu();

  // Merge backend data with default data (fallback to default if backend is empty)
  const categories = mergeMenuData(backendMenu || null);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      <Seo
        title="Our Menu"
        description="Explore our diverse menu featuring authentic Indian cuisine, Chinese specialties, Italian favorites, and more. Fresh ingredients, traditional recipes, and modern flavors."
      />

      <Section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Menu</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, crafted with the finest ingredients and authentic flavors
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden backdrop-blur-sm bg-card/95 shadow-warm-md">
              {category.coverImage && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.coverImage}
                    alt={`${category.name} category`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
              )}
              <CardHeader className={category.coverImage ? '-mt-16 relative z-10' : ''}>
                <div className="flex items-center gap-4">
                  <MenuCategoryIcon iconKey={category.iconKey} className="flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-serif">{category.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-start gap-4 py-2 border-b border-border/50 last:border-0">
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground">{item.name}</h3>
                        {item.description && (
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        )}
                      </div>
                      <span className="font-semibold text-primary whitespace-nowrap">₹{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Accordion Layout */}
        <div className="md:hidden">
          <Accordion type="single" collapsible className="space-y-4">
            {categories.map((category) => (
              <AccordionItem key={category.id} value={category.id} className="border rounded-lg overflow-hidden backdrop-blur-sm bg-card/95 shadow-warm-md">
                <AccordionTrigger className="px-4 py-4 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <MenuCategoryIcon iconKey={category.iconKey} className="flex-shrink-0" />
                    <div>
                      <h2 className="font-serif font-semibold text-lg">{category.name}</h2>
                      <p className="text-xs text-muted-foreground mt-0.5">{category.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  {category.coverImage && (
                    <div className="relative h-32 overflow-hidden rounded-lg mb-4 -mx-4">
                      <img
                        src={category.coverImage}
                        alt={`${category.name} category`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="space-y-3">
                    {category.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-start gap-3 py-2 border-b border-border/50 last:border-0">
                        <div className="flex-1">
                          <h3 className="font-medium text-sm text-foreground">{item.name}</h3>
                          {item.description && (
                            <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                          )}
                        </div>
                        <span className="font-semibold text-primary text-sm whitespace-nowrap">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </>
  );
}
