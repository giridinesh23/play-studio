/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://playstudiobhutan.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*"],
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/about"),
    await config.transform(config, "/services"),
    await config.transform(config, "/services/sound-and-lighting"),
    await config.transform(config, "/services/acoustic-treatment"),
    await config.transform(config, "/services/recording"),
    await config.transform(config, "/services/mixing-mastering"),
    await config.transform(config, "/portfolio"),
    await config.transform(config, "/equipment"),
    await config.transform(config, "/contact"),
    await config.transform(config, "/faq"),
    await config.transform(config, "/terms"),
  ],
};
