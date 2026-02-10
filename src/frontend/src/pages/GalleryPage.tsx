import Section from '@/components/Section';
import Seo from '@/components/Seo';
import GalleryImage from '@/components/GalleryImage';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { GALLERY_IMAGES } from '@/lib/brandAssets';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  // Handle Escape key to close dialog
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        handleCloseDialog();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedImage]);

  const handleOpenDialog = (image: { src: string; alt: string }, buttonRef: HTMLButtonElement) => {
    triggerRef.current = buttonRef;
    setSelectedImage(image);
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
    // Return focus to the triggering thumbnail
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  return (
    <>
      <Seo 
        title="Gallery – Taste & Tales Restaurant"
        description="Explore our gallery showcasing the warm ambience and elegant dining atmosphere at Taste & Tales multicuisine restaurant near GIFT City, Gandhinagar."
      />

      {/* Hero */}
      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Gallery</Badge>
          <h1 className="font-serif text-4xl font-bold md:text-5xl mb-6">
            Our <span className="text-primary">Ambience</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Experience the warm and inviting atmosphere that makes Taste & Tales special
          </p>
        </div>
      </Section>

      {/* Gallery Grid */}
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((image, index) => (
            <button
              key={index}
              onClick={(e) => handleOpenDialog(image, e.currentTarget)}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all hover:shadow-lg"
              aria-label={`View larger image: ${image.alt}`}
            >
              <GalleryImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </Section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && handleCloseDialog()}>
        <DialogContent 
          className="max-w-5xl w-[95vw] p-0 overflow-hidden"
          aria-describedby="dialog-description"
        >
          <div className="relative">
            <DialogClose 
              className="absolute top-4 right-4 z-10 rounded-full bg-background/80 p-2 hover:bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </DialogClose>
            {selectedImage && (
              <>
                <GalleryImage
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[85vh] object-contain"
                  loading="eager"
                />
                <p id="dialog-description" className="sr-only">
                  {selectedImage.alt}
                </p>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
