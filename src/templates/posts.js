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
import PreviewHome from'../components/PreviewHome'
import HeaderText from '../components/HeaderText'
import HomeSection from '../components/HomeSection'



const Posts = ({ data, pageContext }) => {
  const about = data.contentfulPage
  const preview = data.allContentfulPiece.edges
  const homePreview1 = data.allContentfulPiece.edges[2]
  const homePreview2 = data.allContentfulPiece.edges[4]
  const posts = data.allContentfulPost.edges
  const { humanPageNumber, basePath } = pageContext
  const isFirstPage = humanPageNumber === 1
  const previewInfo = data.contentfulPreviewInfo
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
        <Container>
        <HeaderText><h2>Featured work</h2></HeaderText>
            <PreviewHome
            preview={preview}
            previewInfo={previewInfo}
            basePath={basePath}
            />
        </Container>
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
      contentfulPage(slug: {eq: "about"}) {
    title
    slug
    metaDescription {
      internal {
        content
      }
    }
    body {
      childMarkdownRemark {
        html
        excerpt(pruneLength: 320)
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
        body {
          childMarkdownRemark {
            html
            excerpt(pruneLength: 120)
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
    contentfulPreviewInfo {
    paragraph {
      internal {
        content
      }
      childMarkdownRemark {
        html
      }
    }
    previewTitle1 {
      internal {
        content
      }
    }
    previewTitle2 {
      internal {
        content
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
  }
`

export default Posts
