import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/', // Sanity Studio ko index nahi karna
    },
    sitemap: 'https://fasteq.com/sitemap.xml',
  }
}