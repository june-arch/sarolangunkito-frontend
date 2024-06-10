const fetchDynamicPaths = async () => {
  const fetch = (await import('node-fetch')).default; 
  const response = await fetch(`${process.env.BASE_API_URL}/article`); // Use the environment variable
  const data = await response.json();

  return data.data.map(item => ({
    loc: `https://www.sarolangunkito.com/${item.slug}`, // Adjust path according to your slug structure
    lastmod: new Date().toISOString(), // You can adjust the date format or source
  }));
};

module.exports = {
  siteUrl: 'https://www.sarolangunkito.com',
  generateRobotsTxt: true,
  sitemapSize: 7000, // Adjust if you expect more URLs to split the sitemap into multiple files
  changefreq: 'daily', // Set according to your update frequency
  priority: 0.7, // Adjust priority for your pages
  generateIndexSitemap: false, // Generates a sitemap index file
  async additionalPaths(config) {
    const dynamicPaths = await fetchDynamicPaths();
    return dynamicPaths.map(path => ({
      loc: path.loc,
      lastmod: path.lastmod,
    }));
  },
};
