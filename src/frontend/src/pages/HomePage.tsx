import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Section from '@/components/Section';
import Seo from '@/components/Seo';
import { useNavigate } from '@tanstack/react-router';
import { Star, Users, Clock, CreditCard, ChefHat, Heart, Sparkles } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  const handleOrderOnline = () => {
    window.open('https://www.zomato.com', '_blank');
  };

  const handleBookTable = () => {
    navigate({ to: '/contact' });
  };

  const highlights = [
    { icon: Star, label: '4.2 Dining Rating', color: 'text-accent' },
    { icon: Users, label: 'Family Friendly', color: 'text-chart-1' },
    { icon: Clock, label: 'Open 11 AM – 11 PM', color: 'text-primary' },
    { icon: CreditCard, label: 'Digital Payments Accepted', color: 'text-chart-3' },
  ];

  const cuisines = [
    { name: 'North Indian', icon: '🍛' },
    { name: 'Chinese', icon: '🥢' },
    { name: 'Mexican', icon: '🌮' },
    { name: 'Thai', icon: '🍜' },
    { name: 'Italian', icon: '🍝' },
    { name: 'Fast Food', icon: '🍔' },
    { name: 'Desserts', icon: '🍰' },
    { name: 'Shakes', icon: '🥤' },
  ];

  return (
    <>
      <Seo 
        title="Taste & Tales – Multicuisine Restaurant near GIFT City Gandhinagar"
        description="A World of Flavours Under One Roof. Premium family-friendly restaurant in Raysan, near GIFT City, Gandhinagar. Serving North Indian, Chinese, Mexican, Thai, Italian & more. Open 11 AM – 11 PM."
        ogImage="/assets/generated/taste-tales-hero.dim_1920x1080.png"
      />

      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/assets/generated/taste-tales-hero.dim_1920x1080.png)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        </div>
        
        <div className="container relative z-10 text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            Restaurant near GIFT City Gandhinagar
          </Badge>
          
          <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            A World of Flavours
            <br />
            <span className="text-primary">Under One Roof</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl mb-8">
            Experience premium multicuisine dining in a family-friendly atmosphere. 
            From authentic North Indian to exotic Thai, we bring the world to your plate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={handleOrderOnline} className="text-base">
              Order Online
            </Button>
            <Button size="lg" variant="outline" onClick={handleBookTable} className="text-base">
              Book a Table
            </Button>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-2 bg-card/80 backdrop-blur">
                <CardContent className="flex flex-col items-center gap-2 p-4 md:p-6">
                  <highlight.icon className={`h-6 w-6 md:h-8 md:w-8 ${highlight.color}`} />
                  <p className="text-xs md:text-sm font-medium text-center leading-tight">
                    {highlight.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisines Section */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold md:text-4xl mb-4">
            Explore Our Cuisines
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From traditional favorites to international delights, discover a diverse menu 
            crafted with passion and premium ingredients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {cuisines.map((cuisine, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer transition-all hover:shadow-warm hover:scale-105"
              onClick={() => navigate({ to: '/menu' })}
            >
              <CardContent className="flex flex-col items-center gap-3 p-6">
                <span className="text-4xl md:text-5xl">{cuisine.icon}</span>
                <h3 className="font-serif text-base md:text-lg font-semibold text-center">
                  {cuisine.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" onClick={() => navigate({ to: '/menu' })}>
            View Full Menu
          </Button>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-3">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <ChefHat className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold">Quality Ingredients</h3>
            <p className="text-muted-foreground text-sm">
              We use only the finest, freshest ingredients to create authentic flavors that delight your taste buds.
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold">Family Friendly</h3>
            <p className="text-muted-foreground text-sm">
              A warm, welcoming atmosphere perfect for family gatherings, celebrations, and creating memories.
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold">Premium Yet Affordable</h3>
            <p className="text-muted-foreground text-sm">
              Experience fine dining without breaking the bank. Quality food at prices that make sense.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold md:text-4xl mb-4">
            Ready to Experience the Flavours?
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-lg">
            Visit us today or order online for a delightful culinary journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate({ to: '/contact' })}
            >
              Get Directions
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:+917567678009">Call Now</a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
