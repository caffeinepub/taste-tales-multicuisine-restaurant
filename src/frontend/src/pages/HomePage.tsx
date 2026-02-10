import Section from '@/components/Section';
import Seo from '@/components/Seo';
import LogoMotif from '@/components/LogoMotif';
import BrandLogo from '@/components/BrandLogo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from '@tanstack/react-router';
import { MapPin, Phone, Clock, Star, Users, Music } from 'lucide-react';
import { BRAND_ASSETS } from '@/lib/brandAssets';

export default function HomePage() {
  const navigate = useNavigate();

  const cuisines = [
    {
      name: 'North Indian',
      icon: '🍛',
      description: 'Rich, aromatic dishes inspired by timeless recipes',
      image: '/assets/generated/gallery-north-indian.dim_1200x800.png',
    },
    {
      name: 'Chinese',
      icon: '🥢',
      description: 'Classic textures and bold flavours crafted with balance',
      image: '/assets/generated/gallery-chinese.dim_1200x800.png',
    },
    {
      name: 'Mexican',
      icon: '🌮',
      description: 'Vibrant plates with warm spices and fresh ingredients',
      image: '/assets/generated/gallery-mexican.dim_1200x800.png',
    },
    {
      name: 'Thai',
      icon: '🍜',
      description: 'Fragrant bowls layered with sweet, spicy, and sour notes',
      image: '/assets/generated/gallery-thai.dim_1200x800.png',
    },
    {
      name: 'Italian',
      icon: '🍝',
      description: 'Comforting pastas, sauces, and timeless favourites',
      image: '/assets/generated/gallery-italian.dim_1200x800.png',
    },
    {
      name: 'Fast Food',
      icon: '🍔',
      description: 'Quick bites made with care and quality',
      image: '/assets/generated/gallery-fast-food.dim_1200x800.png',
    },
    {
      name: 'Desserts & Shakes',
      icon: '🍰',
      description: 'Indulgent treats to end your story on a sweet note',
      image: '/assets/generated/gallery-desserts.dim_1200x800.png',
    },
  ];

  const handleOrderOnline = () => {
    window.open('https://www.zomato.com', '_blank');
  };

  const handleBookTable = () => {
    navigate({ to: '/contact' });
  };

  return (
    <>
      <Seo 
        title="Taste & Tales – Restaurant near GIFT City Gandhinagar"
        description="Taste & Tales – A World of Flavours, Thoughtfully Crafted. Premium multicuisine restaurant near GIFT City, Gandhinagar. Serving North Indian, Chinese, Mexican, Thai, Italian, Fast Food, Desserts & Shakes."
      />

      {/* Hero */}
      <Section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={BRAND_ASSETS.hero}
            alt="" 
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <BrandLogo size="lg" showText />
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl mb-6">
            Taste & Tales
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            A World of Flavours, Thoughtfully Crafted
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={handleBookTable} className="text-base transition-all hover:shadow-warm-lg">
              Book a Table
            </Button>
            <Button size="lg" variant="outline" onClick={handleOrderOnline} className="text-base transition-all hover:shadow-warm">
              Order Online
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background/50 backdrop-blur">
              <Star className="h-5 w-5 text-primary" />
              <span className="font-semibold">4.2 Rating</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background/50 backdrop-blur">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-semibold">Family Friendly</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background/50 backdrop-blur">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-semibold">11 AM – 11 PM</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background/50 backdrop-blur">
              <Music className="h-5 w-5 text-primary" />
              <span className="font-semibold">DJ Nights</span>
            </div>
          </div>
        </div>
      </Section>

      {/* About the Brand */}
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <LogoMotif className="mx-auto mb-6" size="lg" />
          <h2 className="font-serif text-3xl font-bold md:text-4xl mb-6">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            At Taste & Tales, every dish tells a story. We bring together the finest flavours from around the world, crafted with care and served with warmth. Whether you're celebrating a special moment or simply enjoying time with loved ones, we're here to make every meal memorable.
          </p>
          <Button variant="outline" onClick={() => navigate({ to: '/about' })} className="transition-all hover:shadow-warm">
            Learn More About Us
          </Button>
        </div>
      </Section>

      {/* Cuisine Showcase */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold md:text-4xl mb-4">
            A World of Cuisines
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From the spice-rich traditions of India to the vibrant streets of Mexico, explore a carefully curated menu that celebrates global flavours.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cuisines.map((cuisine) => (
            <Card key={cuisine.name} className="group overflow-hidden transition-all hover:shadow-warm-lg">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cuisine.image}
                  alt={cuisine.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-4xl">{cuisine.icon}</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-xl">{cuisine.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{cuisine.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" onClick={() => navigate({ to: '/menu' })} className="transition-all hover:shadow-warm-lg">
            View Full Menu
          </Button>
        </div>
      </Section>

      {/* Dining Experience */}
      <Section>
        <div className="text-center mb-12">
          <LogoMotif className="mx-auto mb-6" size="md" />
          <h2 className="font-serif text-3xl font-bold md:text-4xl mb-4">
            The Taste & Tales Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just a meal—it's an experience crafted for families, friends, and food lovers.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="text-center transition-all hover:shadow-warm">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-serif text-xl">Family Friendly</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A warm, welcoming space designed for families to gather, celebrate, and create lasting memories together.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center transition-all hover:shadow-warm">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Music className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-serif text-xl">DJ Nights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Enjoy live music and DJ performances on select evenings, adding rhythm and energy to your dining experience.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center transition-all hover:shadow-warm">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-serif text-xl">Premium Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Every ingredient is carefully selected, every dish thoughtfully prepared, ensuring excellence in every bite.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Gallery Preview */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold md:text-4xl mb-4">
            Moments Worth Sharing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the flavours, ambience, and experiences that make Taste & Tales special.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative h-64 overflow-hidden rounded-lg">
            <img 
              src={BRAND_ASSETS.ambienceGallery}
              alt="Restaurant ambience"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg">
            <img 
              src="/assets/generated/gallery-north-indian.dim_1200x800.png"
              alt="North Indian cuisine"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg">
            <img 
              src="/assets/generated/gallery-desserts.dim_1200x800.png"
              alt="Desserts"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" onClick={() => navigate({ to: '/gallery' })} className="transition-all hover:shadow-warm">
            View Full Gallery
          </Button>
        </div>
      </Section>

      {/* Contact & Location */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <LogoMotif className="mx-auto mb-6" size="md" />
            <h2 className="font-serif text-3xl font-bold md:text-4xl mb-4">
              Visit Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Restaurant near GIFT City Gandhinagar
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="transition-all hover:shadow-warm">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Location & Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Raysan, near GIFT City</p>
                    <p className="text-sm text-muted-foreground">Gandhinagar, Gujarat</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Open Daily</p>
                    <p className="text-sm text-muted-foreground">11:00 AM – 11:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <a href="tel:+917567678009" className="font-medium hover:text-primary transition-colors">
                      +91 75676 78009
                    </a>
                    <p className="text-sm text-muted-foreground">Call for reservations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-warm">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Whether you're planning a celebration, have questions about our menu, or simply want to say hello, we'd love to hear from you.
                </p>
                <div className="flex flex-col gap-3">
                  <Button onClick={handleBookTable} className="w-full transition-all hover:shadow-warm">
                    Book a Table
                  </Button>
                  <Button variant="outline" onClick={() => navigate({ to: '/contact' })} className="w-full transition-all hover:shadow-warm">
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
