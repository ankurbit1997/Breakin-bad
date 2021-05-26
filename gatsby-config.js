/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-amp`,
      options: {
        analytics: {
          type: "gtag",
          dataCredentials: "include",
        },
        config: {
          url:
            "https://www.googletagmanager.com/amp.json?id=GTM-5Z978VP&gtm.url=SOURCE_URL",
        },
        canonicalBaseUrl: "https://breaking-bad-pi.vercel.app/",
        components: ["amp-form", "amp-img"],
        excludedPaths: ["/404*"],
        pathIdentifier: "/amp/",
        relAmpHtmlPattern: "{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}",
        useAmpClientIdApi: true,
      },
    },
  ],
}
