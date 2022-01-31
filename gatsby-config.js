module.exports = {
  siteMetadata: {
      title: `My First Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": "b1f0e42012b0613b7b8581b46aabee"
    }
  }]
};
