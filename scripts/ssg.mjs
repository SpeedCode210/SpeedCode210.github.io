#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://speedcode210.github.io';

const routeMetadata = {
  '/': {
    title: 'Raouf Ould Ali - AI Student & Developer',
    description: 'Artificial Intelligence Student passionate about software development, mathematics, and quantum computing.',
    keywords: 'AI, Software Development, Quantum Computing, Machine Learning',
    priority: '1.0',
    changefreq: 'weekly',
  },
  '/competitions': {
    title: 'Competitions - Raouf Ould Ali',
    description: 'Competitive programming achievements and awards in AI competitions.',
    keywords: 'Competitions, Programming, Awards',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/coaching': {
    title: 'Teaching & Coaching - Raouf Ould Ali',
    description: 'Education and mentoring in software development and AI.',
    keywords: 'Teaching, Coaching, Education, Mentoring',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/research': {
    title: 'Research - Raouf Ould Ali',
    description: 'Research projects in AI, Machine Learning, and Quantum Computing.',
    keywords: 'Research, AI, Machine Learning, Quantum Computing',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/code': {
    title: 'Development Projects - Raouf Ould Ali',
    description: 'Software development projects and open source contributions.',
    keywords: 'Development, Projects, Software Engineering, Open Source',
    priority: '0.9',
    changefreq: 'weekly',
  },
};

const distDir = path.join(__dirname, '..', 'dist');

// Read the base index.html
const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// Helper function to inject meta tags
function injectMetaTags(html, metadata) {
  const metaTags = `
    <meta name="description" content="${metadata.description}" />
    <meta name="keywords" content="${metadata.keywords}" />
    <meta property="og:title" content="${metadata.title}" />
    <meta property="og:description" content="${metadata.description}" />
    <meta property="og:type" content="website" />`;
  
  return html
    .replace('<title>Raouf Ould Ali - Artificial Intelligence Student</title>', 
             `<title>${metadata.title}</title>${metaTags}`);
}

// Process home page
const homeHtml = injectMetaTags(baseHtml, routeMetadata['/']);
fs.writeFileSync(path.join(distDir, 'index.html'), homeHtml);
console.log('✓ Generated / with SEO meta tags');

// For each route except home, create a directory and index.html
const routes = ['/competitions', '/coaching', '/research', '/code'];

routes.forEach((route) => {
  const routePath = path.join(distDir, route.slice(1)); // Remove leading /
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(routePath)) {
    fs.mkdirSync(routePath, { recursive: true });
  }

  const routeHtml = injectMetaTags(baseHtml, routeMetadata[route]);
  fs.writeFileSync(path.join(routePath, 'index.html'), routeHtml);
  console.log(`✓ Generated ${route}/index.html with SEO meta tags`);
});

// Generate sitemap.xml
const sitemapEntries = Object.entries(routeMetadata)
  .map(([route, metadata]) => {
    const url = route === '/' ? baseUrl : `${baseUrl}${route}`;
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${metadata.changefreq}</changefreq>
    <priority>${metadata.priority}</priority>
  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log('✓ Generated sitemap.xml');

// Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /
Disallow: /assets/

Sitemap: ${baseUrl}/sitemap.xml`;

fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt);
console.log('✓ Generated robots.txt');

console.log('\n✓ Pre-rendering complete with full SEO optimization');


