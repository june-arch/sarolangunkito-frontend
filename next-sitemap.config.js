const fetchDynamicPaths = async () => {
  const fetch = (await import('node-fetch')).default; 
  const cardPost = await fetch(`${process.env.BASE_API_URL}/article_card`); // Use the environment variable
  const post = await cardPost.json();

  const response = await fetch(`${process.env.BASE_API_URL}/article?limit=9999`); // Use the environment variable
  const data = await response.json();
  
  const combinedData = [...post, ...data.data];

  return combinedData.map(item => ({
    loc: `https://www.sarolangunkito.com/article/${item.slug}`, // Adjust path according to your slug structure
    lastmod: new Date().toISOString(), // You can adjust the date format or source
  }));
};

module.exports = {
  siteUrl: 'https://www.sarolangunkito.com',
  generateRobotsTxt: false,
  sitemapSize: 7000, // Adjust if you expect more URLs to split the sitemap into multiple files
  changefreq: 'daily', // Set according to your update frequency
  priority: 1, // Adjust priority for your pages
  generateIndexSitemap: true, // Generates a sitemap index file
  async additionalPaths(config) {
    const dynamicPaths = await fetchDynamicPaths();
    return dynamicPaths.map(path => ({
      loc: path.loc,
      lastmod: path.lastmod,
    }));
  },
};
