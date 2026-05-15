import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://rorayhomebased.co.tz';
  const pages = [
    '', 
    '/about', 
    '/services', 
    '/team', 
    '/book', 
    '/contact',
    '/services/home-nursing', 
    '/services/elderly-care', 
    '/services/post-surgery-recovery',
    '/services/physiotherapy', 
    '/services/palliative-care', 
    '/services/chronic-disease'
  ];
  
  return pages.map(p => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1.0 : 0.7,
  }));
}
