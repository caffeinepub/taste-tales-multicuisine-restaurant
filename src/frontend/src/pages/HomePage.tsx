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
        <div className="relative z-10 mx-auto max-w-4xl text-center px-4">
          <div className="mb-6 sm:mb-8 flex justify-center">
            <BrandLogo size="lg" showText />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            Taste & Tales
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 font-light px-4">
            A World of Flavours, Thoughtfully Crafted
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <Button size="lg" onClick={handleBookTable} className="text-base transition-all hover:shadow-warm-lg w-full sm:w-auto">
              Book a Table
            </Button>
            <Button size="lg" variant="outline" onClick={handleOrderOnline} className="text-base transition-all hover:shadow-warm w-full sm:w-auto">
              Order Online
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-sm">
            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg bg-background/70 backdrop-blur border border-border/50">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="font-semibold text-xs sm:text-sm">4.2 Rating</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg bg-background/70 backdrop-blur border border-border/50">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="font-semibold text-xs sm:text-sm">Family Friendly</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg bg-background/70 backdrop-blur border border-border/50">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="font-semibold text-xs sm:text-sm">11 AM – 11 PM</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg bg-background/70 backdrop-blur border border-border/50">
              <Music className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="font-semibold text-xs sm:text-sm">Live Music</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Brand Story */}
      <Section className="bg-background/80">
        <div className="mx-auto max-w-3xl text-center px-4">
          <div className="mb-6 flex justify-center">
            <LogoMotif size="lg" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Where Every Dish Tells a Story
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
            At Taste & Tales, we believe dining is more than a meal—it's a journey through cultures, 
            traditions, and flavours. From the rich spices of North India to the delicate balance of Thai cuisine, 
            every plate is crafted with care, quality ingredients, and a passion for excellence.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Whether you're celebrating with family, catching up with friends, or simply treating yourself, 
            we invite you to experience a world of taste in a warm, welcoming atmosphere.
          </p>
        </div>
      </Section>

      {/* Cuisine Showcase */}
      <Section className="bg-muted/20">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <Badge variant="outline" className="mb-4 text-sm">
            Our Specialties
          </Badge>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            A World of Cuisines Under One Roof
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse menu featuring authentic flavours from around the globe
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cuisines.map((cuisine) => (
            <Card key={cuisine.name} className="group overflow-hidden transition-all hover:shadow-warm bg-card/80 backdrop-blur border-border/60">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={cuisine.image}
                  alt={cuisine.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <span className="text-xl sm:text-2xl">{cuisine.icon}</span>
                  <span className="break-words">{cuisine.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                <p className="text-sm text-muted-foreground">{cuisine.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 sm:mt-12 text-center">
          <Button size="lg" onClick={() => navigate({ to: '/menu' })} className="transition-all hover:shadow-warm w-full sm:w-auto">
            View Full Menu
          </Button>
        </div>
      </Section>

      {/* Dining Experience */}
      <Section className="bg-background/80">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <Badge variant="outline" className="mb-4 text-sm">
            The Experience
          </Badge>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            More Than Just a Meal
          </h2>
        </div>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
          <Card className="text-center bg-card/80 backdrop-blur border-border/60">
            <CardHeader className="p-4 sm:p-6">
              <div className="mx-auto mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </div>
              <CardTitle className="text-lg sm:text-xl">Family Friendly</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
              <p className="text-sm sm:text-base text-muted-foreground">
                Spacious seating and a welcoming atmosphere perfect for families and groups
              </p>
            </CardContent>
          </Card>
          <Card className="text-center bg-card/80 backdrop-blur border-border/60">
            <CardHeader className="p-4 sm:p-6">
              <div className="mx-auto mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/10">
                <Music className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </div>
              <CardTitle className="text-lg sm:text-xl">Live Entertainment</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
              <p className="text-sm sm:text-base text-muted-foreground">
                Enjoy live music and a vibrant ambience that enhances your dining experience
              </p>
            </CardContent>
          </Card>
          <Card className="text-center bg-card/80 backdrop-blur border-border/60">
            <CardHeader className="p-4 sm:p-6">
              <div className="mx-auto mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </div>
              <CardTitle className="text-lg sm:text-xl">Premium Quality</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
              <p className="text-sm sm:text-base text-muted-foreground">
                Fresh ingredients, expert preparation, and attention to every detail
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className="bg-gradient-to-b from-muted/20 to-background/50">
        <div className="mx-auto max-w-3xl text-center px-4">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Visit Us Today
          </h2>
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2 text-base sm:text-lg flex-wrap">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
              <span className="break-words">Raysan, near GIFT City, Gandhinagar, Gujarat</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-base sm:text-lg">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
              <a href="tel:+917567678009" className="hover:text-primary transition-colors">
                +91 75676 78009
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-base sm:text-lg flex-wrap">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
              <span>Open Daily: 11:00 AM – 11:00 PM</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" onClick={handleBookTable} className="transition-all hover:shadow-warm-lg w-full sm:w-auto">
              Book a Table
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate({ to: '/contact' })} className="transition-all hover:shadow-warm w-full sm:w-auto">
              Get Directions
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
