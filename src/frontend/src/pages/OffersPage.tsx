import Section from '@/components/Section';
import Seo from '@/components/Seo';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Percent, CreditCard, Landmark, Gift } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { OFFERS } from '@/data/offersData';

export default function OffersPage() {
  const navigate = useNavigate();

  const offersWithIcons = [
    {
      ...OFFERS[0],
      icon: Gift,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      ...OFFERS[1],
      icon: Percent,
      color: 'text-chart-1',
      bgColor: 'bg-chart-1/10',
    },
    {
      ...OFFERS[2],
      icon: Landmark,
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
        <div className="max-w-3xl mx-auto text-center px-4">
          <Badge variant="secondary" className="mb-4">Special Offers</Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Exclusive <span className="text-primary">Offers & Deals</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Save more on your favourite meals with our thoughtful promotions and special discounts
          </p>
        </div>
      </Section>

      {/* Offers */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {offersWithIcons.map((offer, index) => (
            <Card key={index} className="border-2 transition-all hover:shadow-warm-lg">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${offer.bgColor} flex items-center justify-center`}>
                    <offer.icon className={`h-6 w-6 sm:h-7 sm:w-7 ${offer.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <CardTitle className="font-serif text-xl sm:text-2xl break-words">{offer.title}</CardTitle>
                      <Badge variant="secondary" className="self-start sm:self-auto">{offer.badge}</Badge>
                    </div>
                    <CardDescription className="text-sm sm:text-base">
                      {offer.description}
                    </CardDescription>
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
          <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
            Terms & Conditions
          </h2>
          <Card className="border-2">
            <CardContent className="p-4 sm:p-6">
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
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Dine?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6">
            Book your table now and enjoy these exclusive offers
          </p>
          <Button size="lg" onClick={() => navigate({ to: '/contact' })} className="transition-all hover:shadow-warm-lg w-full sm:w-auto">
            Book a Table
          </Button>
        </div>
      </Section>
    </>
  );
}
