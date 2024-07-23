export default function sitemap() {
  return [
    {
      url: "https://broadwaytownsquare.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://broadwaytownsquare.com/floor-plans-and-pricing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://broadwaytownsquare.com/photos",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
