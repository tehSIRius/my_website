module.exports = {
  siteMetadata: {
    title: `Patrik Dvořáček`,
    description: `Yes, this is Patrik.`,
    author: `@tehSIRius`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#303030`,
        theme_color: `#ff5722`,
        display: `minimal-ui`,
        icon: `src/img/favicon.png`
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
  ],
}
