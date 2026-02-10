import Section from '@/components/Section';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { menuCategories } from '@/data/menuData';

export default function MenuPage() {
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
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Discover a world of flavors with our carefully curated menu featuring authentic Indian cuisine, international favorites, and signature specialties.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories - Desktop Grid */}
      <Section className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{category.icon}</span>
                  <CardTitle className="text-xl font-serif uppercase">
                    {category.name}
                  </CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start gap-2 pb-2 border-b border-border/50 last:border-0">
                      <span className="text-sm text-foreground flex-1">{item.name}</span>
                      <Badge variant="secondary" className="shrink-0">
                        ₹{item.price}
                      </Badge>
                    </div>
                  ))}
                </div>
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
              className="border rounded-lg px-4 bg-card"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3 text-left">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold uppercase">
                      {category.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{category.description}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div className="space-y-3 pt-2">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start gap-2 pb-2 border-b border-border/50 last:border-0">
                      <span className="text-sm text-foreground flex-1">{item.name}</span>
                      <Badge variant="secondary" className="shrink-0">
                        ₹{item.price}
                      </Badge>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Experience Our Flavors?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Visit us today or call to make a reservation. We're located near GIFT City, Gandhinagar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="tel:+919825012345">Call to Order</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">Visit Us</a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
