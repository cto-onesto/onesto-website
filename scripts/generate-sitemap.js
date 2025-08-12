const fs = require('fs');
const path = require('path');

const baseUrl = 'https://onesto.co';
const staticPages = [
  '/',
  '/about-us',
  '/application-terms-and-conditions',
  '/bapcor-application-terms-and-conditions',
  '/bapcor-delete',
  '/bapcor-nz-application-terms-and-conditions',
  '/bapcor-nz-delete',
  '/bapcor-nz-privacy-policy',
  '/bapcor-nz-support',
  '/bapcor-nz-terms-and-conditions',
  '/bapcor-privacy-policy',
  '/bapcor-support',
  '/bapcor-terms-and-conditions',
  '/benefits',
  '/blog',
  '/contact',
  '/download',
  '/for-charities',
  '/for-companies',
  '/for-members',
  '/how-it-works',
  '/integrations',
  '/learn',
  '/mpd-educators-application-terms-and-conditions',
  '/mpd-educators-delete',
  '/mpd-educators-privacy-policy',
  '/mpd-educators-support',
  '/mpd-educators-terms-and-conditions',
  '/mpd-parents-application-terms-and-conditions',
  '/mpd-parents-delete',
  '/mpd-parents-support',
  '/mpd-parents-terms-and-conditions',
  '/olearning',
  '/one-application-terms-and-conditions',
  '/one-members-application-terms-and-conditions',
  '/one-members-delete',
  '/one-members-support',
  '/one-members-terms-and-conditions',
  '/onesto-delete',
  '/privacy-policy',
  '/report-bugs',
  '/rewards-and-recognition',
  '/security',
  '/shop-and-save',
  '/shopping',
  '/status',
  '/support',
  '/terms-and-conditions',
  '/terms-and-conditions-full',
  '/village-application-terms-and-conditions',
  '/village-delete',
  '/village-privacy-policy',
  '/village-support',
  '/wages-on-demand',
  '/website-terms-and-conditions',
  '/xero-integration-2',
  '/xero-ssu',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => {
      return `
        <url>
          <loc>${baseUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
    })
    .join('')}
</urlset>`;

const outDir = path.resolve(__dirname, '../out');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.resolve(outDir, 'sitemap.xml'), sitemap);
