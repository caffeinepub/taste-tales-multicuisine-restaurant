import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  ogImage?: string;
}

export default function Seo({ title, description, ogImage }: SeoProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Open Graph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    // Update Open Graph description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description);

    // Update Open Graph image if provided
    if (ogImage) {
      let ogImageTag = document.querySelector('meta[property="og:image"]');
      if (!ogImageTag) {
        ogImageTag = document.createElement('meta');
        ogImageTag.setAttribute('property', 'og:image');
        document.head.appendChild(ogImageTag);
      }
      ogImageTag.setAttribute('content', ogImage);
    }
  }, [title, description, ogImage]);

  return null;
}
