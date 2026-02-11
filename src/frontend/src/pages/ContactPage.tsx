import Section from '@/components/Section';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock } from 'lucide-react';
import SocialConnect from '@/components/SocialConnect';

export default function ContactPage() {
  return (
    <>
      <Seo 
        title="Contact Us – Taste & Tales Restaurant near GIFT City Gandhinagar"
        description="Visit Taste & Tales restaurant near GIFT City, Gandhinagar. Call +91 75676 78009 for reservations. Open daily 11 AM – 11 PM. WhatsApp support available."
      />

      {/* Hero */}
      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto text-center px-4">
          <Badge variant="secondary" className="mb-4">Get in Touch</Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Visit <span className="text-primary">Taste & Tales</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Restaurant near GIFT City Gandhinagar – For reservations or inquiries, reach out anytime
          </p>
        </div>
      </Section>

      {/* Contact Info & Map */}
      <Section>
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="border-2">
              <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Details</h2>
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold mb-1 text-sm sm:text-base">Location</p>
                        <p className="text-xs sm:text-sm text-muted-foreground break-words">
                          Raysan, near GIFT City, Gandhinagar, Gujarat
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 sm:gap-4">
                      <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold mb-1 text-sm sm:text-base">Phone</p>
                        <a 
                          href="tel:+917567678009" 
                          className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          +91 75676 78009
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-3 sm:gap-4">
                      <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold mb-1 text-sm sm:text-base">Opening Hours</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Open Daily: 11:00 AM – 11:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 sm:pt-6 border-t">
                  <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Actions</h3>
                  <div className="flex flex-col gap-3">
                    <Button asChild className="w-full transition-all hover:shadow-warm-lg text-sm sm:text-base">
                      <a href="tel:+917567678009">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="w-full transition-all hover:shadow-warm text-sm sm:text-base">
                      <a href="https://wa.me/917567678009" target="_blank" rel="noopener noreferrer">
                        WhatsApp Us
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="w-full transition-all hover:shadow-warm text-sm sm:text-base">
                      <a 
                        href="https://www.google.com/maps/dir/?api=1&destination=23.2,72.6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Connect */}
            <SocialConnect />
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden border-2 h-[400px] sm:h-[500px] lg:h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0!2d72.6!3d23.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEyJzAwLjAiTiA3MsKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Taste & Tales Location Map"
            />
          </div>
        </div>
      </Section>

      {/* Order Online CTA */}
      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Order Online
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6">
            Enjoy our delicious food from the comfort of your home
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" asChild className="transition-all hover:shadow-warm-lg w-full sm:w-auto">
              <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer">
                Order on Zomato
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="transition-all hover:shadow-warm w-full sm:w-auto">
              <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer">
                Order on Swiggy
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
