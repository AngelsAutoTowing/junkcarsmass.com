const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = `https://junkcarsmass.com`,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === `production`;
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Angels Towing - Junk Car Mass`,
    description: `Angels Towing - Junk Car Mass will pay the highest amount of CASH for your junk car. We buy any vehicle make, model, and condition. Call (617) 997-6510 for your quote!`,
    author: `Flaviano Angel`,
    image: `https://junkcarsmass.com/static/49c35b065dcdb5415dab96d7c754f4f3/2dc9a/angels-towing-junk-car-mass-cash-for-junk-cars-logo.png`,
    siteUrl,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-T37DHXJ',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    // {
    //   resolve: `gatsby-plugin-breadcrumb`,
    //   options: {
    //     useAutoGen: true,
    //     usePathPrefix: '/',
    //     trailingSlashes: true,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://junkcarsmass.com',
        sitemap: 'https://junkcarsmass.com/sitemap.xml',
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [
              // REMOVE DISALLOW WHEN GOING LIVE
              { userAgent: '*' },
            ],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `junk-cars-mass`,
        short_name: `junk-cars-mass`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/assets/logos/angels-towing-junk-car-mass-favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:300;400;700;900', 'Oswald:300,400,500,600,700'],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
