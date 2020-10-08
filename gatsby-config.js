/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Ibas Majid",
    description: "I teach JavaScript, React, GraphQL and Gatsby",
    author: "Ibaslogic",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    {      
      resolve: "gatsby-source-filesystem",      
      options: {        
        name: "src",        
        path: `${__dirname}/src/`,      
      },    
    },
    "gatsby-plugin-sharp",
    {      
      resolve: "gatsby-transformer-remark",      
      options: {        
        plugins: [          
          {            
            resolve: "gatsby-remark-images",            
            options: {              
              maxWidth: 750,              
              linkImagesToOriginal: false,            
            },          
          },        
        ],      
      },    
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
  ],
}
