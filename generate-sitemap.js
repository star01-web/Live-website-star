// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream, writeFileSync } from 'fs';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/aboutus/', changefreq: 'monthly', priority: 0.8 },
  { url: '/products/', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/', changefreq: 'monthly', priority: 0.8 },
  { url: '/success-story/', changefreq: 'monthly', priority: 0.8 },
  { url: '/gallery/', changefreq: 'monthly', priority: 0.8 },
  { url: '/blog/', changefreq: 'monthly', priority: 0.8 },
  { url: '/contactus/', changefreq: 'monthly', priority: 0.9 },
  {url : 'blog/:id', changefreq: 'monthly', priority: 0.7},
];

async function generateSitemap() {
  const stream = new SitemapStream({
    hostname: 'https://starsupplierss.com/',
  });

  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );

  // Write sitemap.xml to public directory
  writeFileSync('./public/sitemap.xml', xml);

  console.log('✅ Sitemap successfully generated at ./public/sitemap.xml');
}

generateSitemap().catch((err) => {
  console.error('Error generating sitemap:', err);
});
