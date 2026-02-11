import React, { useEffect, useRef } from 'react';
import Section from '@/components/Section';
import Seo from '@/components/Seo';
import { useGetMenu } from '@/hooks/useQueries';
import { mergeMenuData } from '@/lib/menuAdapters';
import { menuCategories } from '@/data/menuData';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Loader2 } from 'lucide-react';
import { MenuCategoryIcon } from '@/components/menu/MenuCategoryIcon';
import { readSearchFocusParams, clearSearchFocusParams } from '@/utils/urlParams';

export default function MenuPage() {
  const { data: backendMenu, isLoading } = useGetMenu();
  const categories = backendMenu ? mergeMenuData(backendMenu) : menuCategories;
  const focusParams = readSearchFocusParams();
  const hasScrolled = useRef(false);

  useEffect(() => {
    if (!focusParams || hasScrolled.current) return;

    const timer = setTimeout(() => {
      if (focusParams.categoryId) {
        const categoryElement = document.getElementById(`category-${focusParams.categoryId}`);
        if (categoryElement) {
          categoryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          categoryElement.classList.add('ring-2', 'ring-primary', 'ring-offset-2');
          setTimeout(() => {
            categoryElement.classList.remove('ring-2', 'ring-primary', 'ring-offset-2');
          }, 2000);
        }
      }

      if (focusParams.itemName) {
        const itemElement = document.getElementById(`item-${focusParams.itemName}`);
        if (itemElement) {
          itemElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          itemElement.classList.add('ring-2', 'ring-primary', 'ring-offset-2');
          setTimeout(() => {
            itemElement.classList.remove('ring-2', 'ring-primary', 'ring-offset-2');
          }, 2000);
        }
      }

      hasScrolled.current = true;
      clearSearchFocusParams();
    }, 300);

    return () => clearTimeout(timer);
  }, [focusParams]);

  if (isLoading) {
    return (
      <Section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading menu...</p>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Seo 
        title="Menu – Taste & Tales Multicuisine Restaurant"
        description="Explore our diverse menu featuring North Indian, Chinese, Mexican, Thai, Italian, Fast Food, Desserts & Shakes. Over 200 dishes crafted with care and quality ingredients."
      />

      {/* Hero */}
      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto text-center px-4">
          <Badge variant="secondary" className="mb-4">Our Menu</Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Explore Our <span className="text-primary">Menu</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            A world of flavours awaits – from North Indian classics to Italian comfort, Thai delicacies to Mexican zest
          </p>
        </div>
      </Section>

      {/* Desktop Grid View */}
      <Section className="hidden md:block">
        <div className="space-y-12 lg:space-y-16">
          {categories.map((category) => (
            <div key={category.id} id={`category-${category.id}`} className="scroll-mt-24 transition-all duration-300">
              <div className="mb-6 lg:mb-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <MenuCategoryIcon iconKey={category.iconKey} className="w-8 h-8 sm:w-10 sm:h-10" />
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold">{category.name}</h2>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground max-w-3xl">{category.description}</p>
              </div>

              <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {category.items.map((item) => (
                  <Card 
                    key={item.name} 
                    id={`item-${item.name}`}
                    className="transition-all hover:shadow-warm scroll-mt-24 duration-300"
                  >
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex justify-between items-start gap-3 sm:gap-4">
                        <div className="min-w-0 flex-1">
                          <CardTitle className="text-base sm:text-lg mb-1 sm:mb-2 break-words">{item.name}</CardTitle>
                          <CardDescription className="text-xs sm:text-sm line-clamp-2">{item.description}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="shrink-0 text-xs sm:text-sm">₹{item.price}</Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Mobile Accordion View */}
      <Section className="md:hidden">
        <Accordion type="single" collapsible className="space-y-4">
          {categories.map((category) => (
            <AccordionItem 
              key={category.id} 
              value={category.id}
              id={`category-${category.id}`}
              className="border rounded-lg px-4 scroll-mt-24 transition-all duration-300"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3 text-left">
                  <MenuCategoryIcon iconKey={category.iconKey} className="w-8 h-8 shrink-0" />
                  <div className="min-w-0">
                    <h2 className="font-serif text-lg font-bold break-words">{category.name}</h2>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{category.description}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <Card 
                      key={item.name}
                      id={`item-${item.name}`}
                      className="scroll-mt-24 transition-all duration-300"
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start gap-3">
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-sm mb-1 break-words">{item.name}</h3>
                            <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                          </div>
                          <Badge variant="secondary" className="shrink-0 text-xs">₹{item.price}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
