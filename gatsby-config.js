module.exports = {
  siteMetadata: {
    title: `Web Developer - design, development, technical support`,
    description: `Young developer from Poland who loves web design and web development.`,
    author: `@wiseworks`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wiseworks Web Developer`,
        short_name: `wiseworks`,
        start_url: `/`,
        background_color: `#5a1bee`,
        theme_color: `#5a1bee`,
        display: `minimal-ui`,
        icon: `src/images/wiseworks-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Remote schema query type. This is an arbitrary name.
        typeName: "WPGraphQL",
        // Field name under which it will be available. Used in your Gatsby query. This is also an arbitrary name.
        fieldName: "wpgraphql",
        // GraphQL endpoint, relative to your WordPress home URL.
        url: "http://localhost/wisegatsby/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poppins:300,400,500,600,700`],
        display: "swap",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
