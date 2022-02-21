const createSitemap = () =>
  `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
        <loc>${process.env.SITE_URL}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>    
    </urlset>`;

const Sitemap = () => {};

Sitemap.getInitialProps = ({ res, req }) => {
  const sitemap = createSitemap();
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return res;
};

export default Sitemap;