import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import { startCase } from 'lodash'
import HomeHero from '../components/HomeHero'
import HomeSection from '../components/HomeSection'
import CustomCarousel2 from '../components/Carousel2'






const Posts = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const { humanPageNumber, basePath } = pageContext
  const heroDescription = data.contentfulHeroDescription.description.internal.content
  let featuredPost
  let ogImage
  let sections = data.allContentfulHomeSection.edges
  
  try {
    featuredPost = posts[0].node
  } catch (error) {
    featuredPost = null
  }
  try {
    ogImage = posts[0].node.heroImage.ogimg.src
  } catch (error) {
    ogImage = null
  }
  
  return (
    <Layout>
    <SEO title={startCase(basePath)} image={ogImage} />
    <Container>
    <HomeHero 
    imgLeft={data.contentfulHeroImageLeft.image.file.url}
    imgRight={data.contentfulHeroImageRight.image.file.url}
    heroDescription={heroDescription}
    />




     <CustomCarousel2 
    alias1={data.digitalMarketingPhoto}
    alias2={data.webDesignPhoto}
    />

    <HomeSection
    sections={sections}
    />
    </Container>
    <Pagination context={pageContext} />
    </Layout>
    )
  }

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            ogimg: resize(width: 1800) {
              src
            }
          }
          body {
            childMarkdownRemark {
              timeToRead
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
    allContentfulPiece(sort: {fields: publishDate, order: DESC}) {
        edges {
          node {
            title
            id
            slug
            publishDate(formatString: "MMMM DD, YYYY")
            role
            excerpt {
              childMarkdownRemark {
                timeToRead
                html
                excerpt(pruneLength: 60)
              }
            }
            
            heroImage {
              file {
                url
              }
            }
          }
        }
      }
    contentfulHeroDescription {
      description {
        internal {
          content
        }
      }
    }
    allContentfulHomeSection(sort: {order: ASC, fields: order}) {
        edges {
          node {
            content {
              childMarkdownRemark {
                html
              }
            }
            title
          }
        }
      }
    contentfulHeroImageLeft {
        image {
          file {
            url
          }
        }
      }
      contentfulHeroImageRight {
        image {
          file {
            url
          }
        }
      }
      productPhoto: contentfulPhotoAlbum(contentful_id: {eq: "34C1e43oFbfXO76Be0HdA9"}) {
    title
    description {
      childMarkdownRemark {
        html
      }
    }
    photos {
      file {
        url
      }
    }
  }
  foodPhoto: contentfulPhotoAlbum(contentful_id: {eq: "5oM4Lo9OYVDBUodqUdSrot"}) {
    title
    description {
      childMarkdownRemark {
        html
      }
    }
    photos {
      file {
        url
      }
    }
  }
  logoPhoto: contentfulPhotoAlbum(contentful_id: {eq: "3tL5xSUWYJudLGkThC6DaW"}) {
    title
    description {
      childMarkdownRemark {
        html
      }
    }
    photos {
      file {
        url
      }
    }
  }
    digitalMarketingPhoto: contentfulPhotoAlbum(contentful_id: {eq: "1poRdq8WvybMvGi64kJSrq"}) {
    title
    description {
      childMarkdownRemark {
        html
      }
    }
    photos {
      file {
        url
      }
    }
  }
    webDesignPhoto: contentfulPhotoAlbum(contentful_id: {eq: "3rcYZgnGEROqo6TtHlD4Sb"}) {
    title
    description {
      childMarkdownRemark {
        html
      }
    }
    photos {
      file {
        url
      }
    }
  }
  }
`

export default Posts


