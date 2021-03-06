/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  flags: {
    THE_FLAG: false,
    DEV_SSR: true
  },  
  siteMetadata: {
    title: 'Oscar Viana',
    titleTemplate: '%s - Oscar Viana',
    description: 'Oscar Viana - Desarrollador Full Stack - Líder de proyectos',
    owner: 'Oscar Viana',
    url: 'https://oscarviana20.github.io',
    image: '/oscar-viana.jpg',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: path.join(__dirname, 'src', 'assets', 'img')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-smoothscroll'
  ]
}
