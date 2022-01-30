module.exports = {
  siteMetadata: {
      title: `My first Gatsby project`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": "b1f0e42012b0613b7b8581b46aabee"
    }
  }]
};