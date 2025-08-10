import { useEffect } from 'react';

interface PageTitleOptions {
  title: string;
  description?: string;
}

export const usePageTitle = ({ title, description }: PageTitleOptions) => {
  useEffect(() => {
    document.title = `${title} | Nathan Auvray Portfolio`;
    
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
      
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', description);
      }
      
      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', description);
      }
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} | Nathan Auvray Portfolio`);
    }
    
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', `${title} | Nathan Auvray Portfolio`);
    }
  }, [title, description]);
};

export default usePageTitle;
