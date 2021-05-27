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
        canonicalBaseUrl: "https://breaking-bad-pi.vercel.app/",
        components: ["amp-form"],
        excludedPaths: ["/404*"],
        pathIdentifier: "/amp/",
        relAmpHtmlPattern: "{{canonicalBaseUrl}}{{pathIdentifier}}",
        useAmpClientIdApi: true,
      },
    },
  ],
}
