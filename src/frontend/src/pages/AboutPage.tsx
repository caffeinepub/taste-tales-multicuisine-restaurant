import Section from '@/components/Section';
import Seo from '@/components/Seo';
import LogoMotif from '@/components/LogoMotif';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Utensils, Heart, Shield, Users } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Utensils,
      title: 'Global Cuisines',
      description: 'We bring together the finest flavours from around the world – North Indian, Chinese, Mexican, Thai, Italian, Fast Food, Desserts & Shakes – each crafted with authenticity and care.',
    },
    {
      icon: Heart,
      title: 'Quality Ingredients',
      description: 'Every dish is prepared with premium, fresh ingredients sourced thoughtfully to ensure authentic taste, nutrition, and the highest culinary standards.',
    },
    {
      icon: Shield,
      title: 'Hygiene First',
      description: 'We maintain the highest standards of cleanliness and food safety, ensuring a safe and comfortable dining experience for your entire family.',
    },
    {
      icon: Users,
      title: 'Family Friendly',
      description: 'Our warm, welcoming atmosphere is thoughtfully designed for families, friends, and celebrations of all kinds, creating memories that last.',
    },
  ];

  return (
    <>
      <Seo 
        title="About Us – Taste & Tales Multicuisine Restaurant"
        description="Learn about Taste & Tales, a premium family-friendly multicuisine restaurant near GIFT City, Gandhinagar. Passionate about global cuisines, quality ingredients, heritage, and thoughtful hospitality."
      />

      {/* Hero */}
      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto text-center px-4">
          <Badge variant="secondary" className="mb-4">Our Story</Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            About <span className="text-primary">Taste & Tales</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Where every dish tells a story and every meal creates a memory
          </p>
        </div>
      </Section>

      {/* Story */}
      <Section>
        <div className="max-w-4xl mx-auto px-4">
          <LogoMotif className="mx-auto mb-6 sm:mb-8" size="lg" />
          <div className="prose prose-lg max-w-none">
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4 sm:mb-6">
              Welcome to <strong className="text-foreground">Taste & Tales</strong>, your destination for 
              an extraordinary multicuisine dining experience near GIFT City, Gandhinagar. 
              We are more than just a restaurant – we are a celebration of global flavours, brought together 
              under one roof with passion, heritage, and dedication.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4 sm:mb-6">
              Our journey began with a simple vision: to create a space where families and friends can 
              come together to enjoy authentic, thoughtfully crafted food from around the world. From the rich, 
              aromatic traditions of <strong className="text-foreground">North Indian</strong> cuisine to the 
              delicate balance of <strong className="text-foreground">Thai</strong>, the vibrant warmth of{' '}
              <strong className="text-foreground">Mexican</strong>, the timeless comfort of{' '}
              <strong className="text-foreground">Italian</strong>, the bold flavours of{' '}
              <strong className="text-foreground">Chinese</strong>, and the indulgence of our{' '}
              <strong className="text-foreground">Desserts & Shakes</strong> – we bring the world to your plate.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              At Taste & Tales, we believe that great food starts with great ingredients and a story worth sharing. 
              That's why we source only the finest, freshest produce and maintain the highest standards of hygiene and 
              food safety. Our chefs are passionate about their craft, preparing each dish with care, attention to detail, 
              and respect for culinary heritage. Whether you're dining in with family or celebrating a special occasion, 
              we promise a premium yet welcoming experience that delights your senses and warms your heart.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-muted/30">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <LogoMotif className="mx-auto mb-4" />
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            What Makes Us Special
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence in every aspect of your dining experience
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <Card key={index} className="border-2 transition-all hover:shadow-warm">
              <CardContent className="p-4 sm:p-6">
                <div className="flex gap-3 sm:gap-4">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Positioning */}
      <Section>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Premium Yet Welcoming
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            We believe everyone deserves access to quality dining. That's why we've created a space 
            that feels premium and elegant, with an atmosphere that remains warm and accessible to all. 
            Whether you're celebrating a special occasion or enjoying a casual meal with loved ones, 
            Taste & Tales offers the perfect setting for togetherness.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">200+</div>
              <p className="text-sm sm:text-base text-muted-foreground">Menu Items</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">7</div>
              <p className="text-sm sm:text-base text-muted-foreground">Global Cuisines</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">4.2</div>
              <p className="text-sm sm:text-base text-muted-foreground">Customer Rating</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
