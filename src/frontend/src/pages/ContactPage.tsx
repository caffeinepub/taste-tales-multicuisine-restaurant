import Section from '@/components/Section';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Navigation, MessageCircle } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';

export default function ContactPage() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/917567678009?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Taste%20%26%20Tales', '_blank');
  };

  return (
    <>
      <Seo 
        title="Contact Us – Taste & Tales Restaurant near GIFT City"
        description="Visit Taste & Tales at Raysan, Near GIFT City, Gandhinagar. Call +91 75676 78009 or WhatsApp us. Open daily 11 AM – 11 PM."
      />

      {/* Hero */}
      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Get in Touch</Badge>
          <h1 className="font-serif text-4xl font-bold md:text-5xl mb-6">
            Visit <span className="text-primary">Taste & Tales</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We're located in Raysan, near GIFT City, Gandhinagar. Come experience a world of flavours!
          </p>
        </div>
      </Section>

      {/* Contact Info & Map */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="flex gap-4 p-6">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        Taste & Tales<br />
                        Raysan, Near GIFT City<br />
                        Gandhinagar, Gujarat
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex gap-4 p-6">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a 
                        href="tel:+917567678009" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 75676 78009
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex gap-4 p-6">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Opening Hours</h3>
                      <p className="text-muted-foreground">
                        Open Daily<br />
                        11:00 AM – 11:00 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button size="lg" className="w-full" asChild>
                <a href="tel:+917567678009">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full" onClick={handleWhatsApp}>
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full"
                asChild
              >
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Raysan+Near+GIFT+City+Gandhinagar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Navigation className="mr-2 h-5 w-5" />
                  Get Directions
                </a>
              </Button>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="icon"
                  asChild
                >
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit our Facebook page"
                  >
                    <SiFacebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  asChild
                >
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit our Instagram page"
                  >
                    <SiInstagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  asChild
                >
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit our Twitter page"
                  >
                    <SiX className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="font-serif text-3xl font-bold mb-6">
              Find Us on Map
            </h2>
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden border-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14677.234567890123!2d72.6369!3d23.1645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA5JzUyLjIiTiA3MsKwMzgnMTIuOCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Taste & Tales Location Map"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Located in Raysan, conveniently near GIFT City, Gandhinagar
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold md:text-4xl mb-4">
            Ready to Dine With Us?
          </h2>
          <p className="text-primary-foreground/90 mb-6 text-lg">
            Book your table now or order online for delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              asChild
            >
              <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer">
                Order on Zomato
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
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
