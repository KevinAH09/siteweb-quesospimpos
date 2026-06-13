const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.quesosjersey.com';

// Agregar aquí cada ruta nueva que se cree en el sitio
const routes = [
  { path: '/',          priority: '1.0', changefreq: 'monthly' },
  { path: '/nosotros',  priority: '0.8', changefreq: 'monthly' },
  { path: '/productos', priority: '0.9', changefreq: 'monthly' },
  { path: '/contacto',  priority: '0.7', changefreq: 'yearly'  },
];

const today = new Date().toISOString().split('T')[0];

const urls = routes
  .map(
    (r) => `
  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, sitemap, 'utf8');
console.log('Sitemap generado:', outputPath);
