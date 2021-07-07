let contentfulConfig
try {
  contentfulConfig = require('./.contentful')
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
    },
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig.production
  if (!spaceId || !accessToken) {
    throw new Error('Contentful space ID and access token need to be provided.')
  }
}

module.exports = {
  siteMetadata: {
    title: 'Patrick Thomas Design',
    description:
      'Portfolio for Patrick Thomas, UX Designer and Front End Developer',
    siteUrl: 'https://patrickthomas.design',
    image: '/images/share.jpg',
    menuLinks: [
      {
        name: 'About me',
        slug: '/',
      },
      {
        name: 'UX Design',
        slug: '/work/',
      },
      {
        name: 'Branding + Photo',
        slug: '/branding/',
      },
      {
        name: 'Blog',
        slug: '/blog/',
      },
      {
        name: 'Contact',
        slug: '/contact/',
      },
      {
        name: 'Test',
        slug: '/testPage/',
      },
    ],
    postsPerFirstPage: 7,
    postsPerPage: 6,
    basePath: '/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-emotion`,
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 650,
              backgroundColor: 'white',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-source-contentful',
      options:
        process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production,
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Patrick Thomas Design',
        short_name: 'Patrick Thomas Design',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: './static/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        path: `./src/gatsby/schema/schema.gql`,
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT,
      },
    },
    'gatsby-plugin-netlify',
  ],
}
