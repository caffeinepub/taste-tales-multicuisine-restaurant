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
      <Section className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background/50">
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
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background/70 backdrop-blur border border-border/50">
              <Star className="h-5 w-5 text-primary" />
              <span className="font-semibold">4.2 Rating</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background/70 backdrop-blur border border-border/50">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-semibold">Family Friendly</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background/70 backdrop-blur border border-border/50">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-semibold">11 AM – 11 PM</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background/70 backdrop-blur border border-border/50">
              <Music className="h-5 w-5 text-primary" />
              <span className="font-semibold">Live Music</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Brand Story */}
      <Section className="bg-background/80">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <LogoMotif size="lg" />
          </div>
          <h2 className="font-serif text-3xl font-bold mb-6 md:text-4xl">
            Where Every Dish Tells a Story
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            At Taste & Tales, we believe dining is more than a meal—it's a journey through cultures, 
            traditions, and flavours. From the rich spices of North India to the delicate balance of Thai cuisine, 
            every plate is crafted with care, quality ingredients, and a passion for excellence.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're celebrating with family, catching up with friends, or simply treating yourself, 
            we invite you to experience a world of taste in a warm, welcoming atmosphere.
          </p>
        </div>
      </Section>

      {/* Cuisine Showcase */}
      <Section className="bg-muted/20">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-sm">
            Our Specialties
          </Badge>
          <h2 className="font-serif text-3xl font-bold mb-4 md:text-4xl">
            A World of Cuisines Under One Roof
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse menu featuring authentic flavours from around the globe
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cuisines.map((cuisine) => (
            <Card key={cuisine.name} className="group overflow-hidden transition-all hover:shadow-warm bg-card/80 backdrop-blur border-border/60">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={cuisine.image}
                  alt={cuisine.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <span className="text-2xl">{cuisine.icon}</span>
                  {cuisine.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{cuisine.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" onClick={() => navigate({ to: '/menu' })} className="transition-all hover:shadow-warm">
            View Full Menu
          </Button>
        </div>
      </Section>

      {/* Dining Experience */}
      <Section className="bg-background/80">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-sm">
            The Experience
          </Badge>
          <h2 className="font-serif text-3xl font-bold mb-4 md:text-4xl">
            More Than Just a Meal
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="text-center bg-card/80 backdrop-blur border-border/60">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Family Friendly</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Spacious seating and a welcoming atmosphere perfect for families and groups
              </p>
            </CardContent>
          </Card>
          <Card className="text-center bg-card/80 backdrop-blur border-border/60">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Music className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Live Entertainment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Enjoy live music and a vibrant ambience that enhances your dining experience
              </p>
            </CardContent>
          </Card>
          <Card className="text-center bg-card/80 backdrop-blur border-border/60">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Premium Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Fresh ingredients, expert preparation, and attention to every detail
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className="bg-gradient-to-b from-muted/20 to-background/50">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold mb-6 md:text-4xl">
            Visit Us Today
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-2 text-lg">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Raysan, near GIFT City, Gandhinagar, Gujarat</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:+917567678009" className="hover:text-primary transition-colors">
                +91 75676 78009
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Clock className="h-5 w-5 text-primary" />
              <span>Open Daily: 11:00 AM – 11:00 PM</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleBookTable} className="transition-all hover:shadow-warm-lg">
              Book a Table
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate({ to: '/contact' })} className="transition-all hover:shadow-warm">
              Get Directions
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
