import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  ogImage?: string;
}

// Get production origin from environment or fall back to current origin
function getProductionOrigin(): string {
  // Check for build-time environment variable
  const envOrigin = import.meta.env.VITE_PRODUCTION_ORIGIN;
  if (envOrigin) {
    return envOrigin;
  }
  
  // Fall back to current origin, ensuring HTTPS for non-localhost
  const currentOrigin = window.location.origin;
  if (currentOrigin.startsWith('http://') && 
      window.location.hostname !== 'localhost' && 
      window.location.hostname !== '127.0.0.1' &&
      !window.location.hostname.endsWith('.localhost')) {
    return currentOrigin.replace('http://', 'https://');
  }
  
  return currentOrigin;
}

export default function Seo({ title, description, ogImage }: SeoProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update or create OG title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    // Update or create OG description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description);

    // Update or create OG image if provided
    if (ogImage) {
      let ogImageTag = document.querySelector('meta[property="og:image"]');
      if (!ogImageTag) {
        ogImageTag = document.createElement('meta');
        ogImageTag.setAttribute('property', 'og:image');
        document.head.appendChild(ogImageTag);
      }
      ogImageTag.setAttribute('content', ogImage);
    }

    // Build canonical URL using production origin to ensure HTTPS
    const productionOrigin = getProductionOrigin();
    const canonicalUrl = `${productionOrigin}${window.location.pathname}${window.location.search}${window.location.hash}`;

    // Update or create OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', canonicalUrl);

    // Update or create Twitter URL
    let twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (!twitterUrl) {
      twitterUrl = document.createElement('meta');
      twitterUrl.setAttribute('property', 'twitter:url');
      document.head.appendChild(twitterUrl);
    }
    twitterUrl.setAttribute('content', canonicalUrl);

    // Update or create canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Remove any duplicate canonical tags
    const allCanonicals = document.querySelectorAll('link[rel="canonical"]');
    if (allCanonicals.length > 1) {
      allCanonicals.forEach((link, index) => {
        if (index > 0) {
          link.remove();
        }
      });
    }
  }, [title, description, ogImage]);

  return null;
}
