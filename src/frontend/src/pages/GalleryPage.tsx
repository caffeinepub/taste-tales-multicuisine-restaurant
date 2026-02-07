import { useState } from 'react';
import Section from '@/components/Section';
import Seo from '@/components/Seo';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = {
    food: [
      { src: '/assets/generated/gallery-north-indian.dim_1200x800.png', alt: 'North Indian Cuisine', title: 'North Indian' },
      { src: '/assets/generated/gallery-chinese.dim_1200x800.png', alt: 'Chinese Cuisine', title: 'Chinese' },
      { src: '/assets/generated/gallery-mexican.dim_1200x800.png', alt: 'Mexican Cuisine', title: 'Mexican' },
      { src: '/assets/generated/gallery-thai.dim_1200x800.png', alt: 'Thai Cuisine', title: 'Thai' },
      { src: '/assets/generated/gallery-italian.dim_1200x800.png', alt: 'Italian Cuisine', title: 'Italian' },
      { src: '/assets/generated/gallery-fast-food.dim_1200x800.png', alt: 'Fast Food', title: 'Fast Food' },
      { src: '/assets/generated/gallery-desserts.dim_1200x800.png', alt: 'Desserts', title: 'Desserts' },
      { src: '/assets/generated/gallery-shakes.dim_1200x800.png', alt: 'Shakes & Beverages', title: 'Shakes' },
    ],
    ambience: [
      { src: '/assets/generated/gallery-ambience.dim_1200x800.png', alt: 'Restaurant Ambience', title: 'Dining Area' },
    ],
  };

  const allImages = [...galleryImages.food, ...galleryImages.ambience];

  return (
    <>
      <Seo 
        title="Gallery – Taste & Tales Restaurant"
        description="Explore our gallery featuring delicious food photography, restaurant ambience, and family-friendly seating at Taste & Tales, Gandhinagar."
      />

      {/* Hero */}
      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Gallery</Badge>
          <h1 className="font-serif text-4xl font-bold md:text-5xl mb-6">
            A Visual <span className="text-primary">Feast</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our delicious dishes and warm, welcoming atmosphere
          </p>
        </div>
      </Section>

      {/* Gallery Tabs */}
      <Section>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
            <TabsTrigger value="ambience">Ambience</TabsTrigger>
          </TabsList>

          {/* All Images */}
          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {allImages.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div 
                      className="group relative aspect-[3/2] overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        width="1200"
                        height="800"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="font-serif text-lg font-semibold text-white">
                            {image.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto"
                      width="1200"
                      height="800"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>

          {/* Food Images */}
          <TabsContent value="food">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {galleryImages.food.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div 
                      className="group relative aspect-[3/2] overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        width="1200"
                        height="800"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="font-serif text-lg font-semibold text-white">
                            {image.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto"
                      width="1200"
                      height="800"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>

          {/* Ambience Images */}
          <TabsContent value="ambience">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {galleryImages.ambience.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div 
                      className="group relative aspect-[3/2] overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        width="1200"
                        height="800"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="font-serif text-lg font-semibold text-white">
                            {image.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto"
                      width="1200"
                      height="800"
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
