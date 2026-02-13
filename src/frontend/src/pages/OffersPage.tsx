import Section from '@/components/Section';
import Seo from '@/components/Seo';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Percent, CreditCard, Landmark, Gift } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export default function OffersPage() {
  const navigate = useNavigate();

  const offers = [
    {
      icon: Gift,
      title: 'Flat 15% Pre-book offer',
      description: 'Book your table in advance and enjoy a flat 15% discount on your total bill. Perfect for planning special occasions and family gatherings with thoughtful savings.',
      badge: 'Popular',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Percent,
      title: 'Instant 10% off on bill payments',
      description: 'Get an instant 10% discount when you pay your bill. Valid on all payment methods including cash, card, and digital wallets for your convenience.',
      badge: 'Limited Time',
      color: 'text-chart-1',
      bgColor: 'bg-chart-1/10',
    },
    {
      icon: Landmark,
      title: 'Bank & RuPay offers',
      description: 'Exclusive discounts and cashback offers available on select bank cards and RuPay transactions. Check with our staff for current promotions and special deals.',
      badge: 'Exclusive',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  return (
    <>
      <Seo 
        title="Offers & Deals – Taste & Tales Restaurant"
        description="Enjoy exclusive offers at Taste & Tales: Flat 15% pre-book discount, instant 10% off on bill payments, and special bank & RuPay offers for a premium dining experience."
      />

      {/* Hero */}
      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Special Offers</Badge>
          <h1 className="font-serif text-4xl font-bold md:text-5xl mb-6">
            Exclusive <span className="text-primary">Offers & Deals</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Save more on your favourite meals with our thoughtful promotions and special discounts
          </p>
        </div>
      </Section>

      {/* Offers */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-6">
          {offers.map((offer, index) => (
            <Card key={index} className="border-2 transition-all hover:shadow-warm-lg">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`shrink-0 w-14 h-14 rounded-xl ${offer.bgColor} flex items-center justify-center`}>
                      <offer.icon className={`h-7 w-7 ${offer.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="font-serif text-2xl">{offer.title}</CardTitle>
                        <Badge variant="secondary">{offer.badge}</Badge>
                      </div>
                      <CardDescription className="text-base">
                        {offer.description}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* Terms */}
      <Section className="bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold mb-6 text-center">
            Terms & Conditions
          </h2>
          <Card className="border-2">
            <CardContent className="p-6">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>Offers cannot be combined with other promotions or discounts.</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>Pre-booking offer requires advance reservation at least 2 hours before your visit.</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>Bank and RuPay offers are subject to availability and may vary by card issuer.</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>Management reserves the right to modify or withdraw offers without prior notice.</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>Offers are valid for dine-in only unless otherwise specified.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold md:text-4xl mb-4">
            Ready to Dine?
          </h2>
          <p className="text-muted-foreground mb-6">
            Book your table now and enjoy these exclusive offers
          </p>
          <Button size="lg" onClick={() => navigate({ to: '/contact' })} className="transition-all hover:shadow-warm-lg">
            Book a Table
          </Button>
        </div>
      </Section>
    </>
  );
}
