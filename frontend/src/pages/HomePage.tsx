import { useNavigate } from '@tanstack/react-router';
import Section from '@/components/Section';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Phone, Utensils, Users, Award } from 'lucide-react';
import { BRAND_ASSETS, GALLERY_IMAGES } from '@/lib/brandAssets';
import LogoMotif from '@/components/LogoMotif';
import { ORDER_ONLINE_LINKS } from '@/lib/orderOnlineLinks';
import { BOOKING_URL } from '@/lib/bookingLinks';
import CustomerReviewsSection from '@/components/CustomerReviewsSection';

export default function HomePage() {
  const navigate = useNavigate();

  const handleBookTable = () => {
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
  };

  const handleOrderOnline = () => {
    window.open(ORDER_ONLINE_LINKS.zomato, '_blank', 'noopener,noreferrer');
  };

  const cuisines = [
    { name: 'North Indian', image: GALLERY_IMAGES[0].src },
    { name: 'Chinese', image: GALLERY_IMAGES[1].src },
    { name: 'Italian', image: GALLERY_IMAGES[4].src },
    { name: 'Thai', image: GALLERY_IMAGES[3].src },
    { name: 'Mexican', image: GALLERY_IMAGES[2].src },
    { name: 'Fast Food', image: GALLERY_IMAGES[5].src },
  ];

  const highlights = [
    {
      icon: Utensils,
      title: 'Multicuisine Excellence',
      description: 'From authentic Indian to international favorites, every dish crafted with passion',
    },
    {
      icon: Users,
      title: 'Family-Friendly',
      description: 'Warm ambience perfect for celebrations, gatherings, and memorable moments',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Fresh ingredients, expert chefs, and uncompromising hygiene standards',
    },
  ];

  return (
    <>
      <Seo 
        title="Taste & Tales – Multicuisine Restaurant near GIFT City Gandhinagar"
        description="Experience exceptional dining at Taste & Tales, a premium multicuisine restaurant near GIFT City, Gandhinagar. Authentic Indian, Chinese, Italian, Thai & more. Book your table today!"
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source 
              media="(max-width: 768px)" 
              srcSet={BRAND_ASSETS.heroMobile}
            />
            <source 
              media="(max-width: 1280px)" 
              srcSet={BRAND_ASSETS.hero}
            />
            <img
              src={BRAND_ASSETS.heroOriginal}
              alt="Delicious multicuisine dishes at Taste & Tales restaurant"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Restaurant near GIFT City Gandhinagar
          </Badge>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-3 drop-shadow-lg">
            Taste & Tales
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-medium drop-shadow-md">
            Multicuisine Restaurant
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md">
            Where every dish tells a story and every meal becomes a cherished memory
          </p>
          <Button 
            size="lg" 
            onClick={handleBookTable}
            className="text-base md:text-lg px-8 py-6 transition-all hover:shadow-warm-lg hover:scale-105"
          >
            Book a Table
          </Button>
        </div>
      </section>

      {/* Brand Story */}
      <Section>
        <div className="max-w-4xl mx-auto text-center relative">
          <LogoMotif className="absolute -top-8 -left-8 opacity-10" size="lg" />
          <Badge variant="secondary" className="mb-4">Our Story</Badge>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            A Culinary Journey Through <span className="text-primary">Flavors</span>
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              At Taste & Tales, we believe every meal should be an experience worth remembering. 
              Nestled near GIFT City in Gandhinagar, our restaurant brings together the finest 
              flavors from around the world under one roof.
            </p>
            <p>
              From authentic North Indian delicacies to international cuisines like Chinese, 
              Italian, Thai, and Mexican, our expert chefs craft each dish with passion and 
              precision. Whether you're celebrating a special occasion or enjoying a casual 
              meal with loved ones, we promise an unforgettable dining experience.
            </p>
          </div>
          <LogoMotif className="absolute -bottom-8 -right-8 opacity-10" size="lg" />
        </div>
      </Section>

      {/* Cuisine Showcase */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Our Specialties</Badge>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Explore Our <span className="text-primary">Cuisines</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A world of flavors awaits you at Taste & Tales
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {cuisines.map((cuisine) => (
            <Card 
              key={cuisine.name} 
              className="group overflow-hidden border-2 transition-all hover:shadow-warm-lg hover:scale-105 cursor-pointer"
              onClick={() => navigate({ to: '/menu' })}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cuisine.image}
                    alt={cuisine.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                      {cuisine.name}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button 
            size="lg" 
            onClick={() => navigate({ to: '/menu' })}
            className="transition-all hover:shadow-warm-lg"
          >
            View Full Menu
          </Button>
        </div>
      </Section>

      {/* Dining Experience Highlights */}
      <Section>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The <span className="text-primary">Taste & Tales</span> Experience
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((highlight) => (
            <Card key={highlight.title} className="border-2 transition-all hover:shadow-warm-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <highlight.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Customer Reviews Section */}
      <Section className="bg-muted/30">
        <CustomerReviewsSection />
      </Section>

      {/* Visit Us Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">Visit Us</Badge>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              We're Ready to <span className="text-primary">Serve You</span>
            </h2>
          </div>

          <Card className="border-2">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Location</p>
                      <p className="text-sm text-muted-foreground">
                        Raysan, near GIFT City, Gandhinagar, Gujarat
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a 
                        href="tel:+917567678009" 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 75676 78009
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Opening Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Open Daily: 11:00 AM – 11:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button 
                    size="lg" 
                    onClick={handleBookTable}
                    className="w-full transition-all hover:shadow-warm-lg"
                  >
                    Book a Table
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={handleOrderOnline}
                    className="w-full transition-all hover:shadow-warm"
                  >
                    Order Online
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    asChild
                    className="w-full transition-all hover:shadow-warm"
                  >
                    <a href="tel:+917567678009">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
