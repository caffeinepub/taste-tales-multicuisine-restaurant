import { useState } from 'react';
import Section from '@/components/Section';
import Seo from '@/components/Seo';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = {
    all: [
      { src: '/assets/generated/gallery-north-indian.dim_1200x800.png', alt: 'North Indian Cuisine', category: 'food' },
      { src: '/assets/generated/gallery-chinese.dim_1200x800.png', alt: 'Chinese Cuisine', category: 'food' },
      { src: '/assets/generated/gallery-mexican.dim_1200x800.png', alt: 'Mexican Cuisine', category: 'food' },
      { src: '/assets/generated/gallery-thai.dim_1200x800.png', alt: 'Thai Cuisine', category: 'food' },
      { src: '/assets/generated/gallery-italian.dim_1200x800.png', alt: 'Italian Cuisine', category: 'food' },
      { src: '/assets/generated/gallery-fast-food.dim_1200x800.png', alt: 'Fast Food', category: 'food' },
      { src: '/assets/generated/gallery-desserts.dim_1200x800.png', alt: 'Desserts', category: 'food' },
      { src: '/assets/generated/gallery-shakes.dim_1200x800.png', alt: 'Shakes', category: 'food' },
      { src: '/assets/generated/gallery-ambience.dim_1200x800.png', alt: 'Restaurant Ambience', category: 'ambience' },
    ],
    food: [
      { src: '/assets/generated/gallery-north-indian.dim_1200x800.png', alt: 'North Indian Cuisine', category: 'food' },
      { src: '/assets/generated/gallery-chinese.dim_1200x800.png', alt: 'Chinese Cuisine', category: 'food' },
      { src: '/assets/generated/gallery-mexican.dim_1200x800.png', alt: 'Mexican Cuisine', category: 'food' },
      { src: '/assets/generated/gallery-thai.dim_1200x800.png', alt: 'Thai Cuisine', category: 'food' },
      { src: '/assets/generated/gallery-italian.dim_1200x800.png', alt: 'Italian Cuisine', category: 'food' },
      { src: '/assets/generated/gallery-fast-food.dim_1200x800.png', alt: 'Fast Food', category: 'food' },
      { src: '/assets/generated/gallery-desserts.dim_1200x800.png', alt: 'Desserts', category: 'food' },
      { src: '/assets/generated/gallery-shakes.dim_1200x800.png', alt: 'Shakes', category: 'food' },
    ],
    ambience: [
      { src: '/assets/generated/gallery-ambience.dim_1200x800.png', alt: 'Restaurant Ambience', category: 'ambience' },
    ],
  };

  return (
    <>
      <Seo 
        title="Gallery – Taste & Tales Restaurant"
        description="Explore our gallery showcasing the warm ambience, exquisite dishes, and dining experience at Taste & Tales multicuisine restaurant near GIFT City, Gandhinagar."
      />

      {/* Hero */}
      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Gallery</Badge>
          <h1 className="font-serif text-4xl font-bold md:text-5xl mb-6">
            Our <span className="text-primary">Visual Story</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore the ambience, flavours, and stories that shape Taste & Tales
          </p>
        </div>
      </Section>

      {/* Gallery Tabs */}
      <Section>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
            <TabsTrigger value="ambience">Ambience</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.all.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div 
                      className="aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="food" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.food.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div 
                      className="aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ambience" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.ambience.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div 
                      className="aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Section>
    </>
  );
}
