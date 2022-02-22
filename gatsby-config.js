module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-theme-amaranth",
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-59WZ2ZRPXL", // Google Analytics / GA
      
        ],
        pluginConfig: {
          head: true        
        },
      }
    }  
  ],
};
