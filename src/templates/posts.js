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
import Preview from'../components/Preview'
import HeaderText from '../components/HeaderText'



const Posts = ({ data, pageContext }) => {
  const about = data.contentfulPage
  const preview = data.allContentfulPiece.edges
  const posts = data.allContentfulPost.edges
  const { humanPageNumber, basePath } = pageContext
  const isFirstPage = humanPageNumber === 1
  const previewInfo = data.contentfulPreviewInfo
  const heroDescription = data.contentfulHeroDescription.description.internal.content
  let featuredPost
  let ogImage

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
        {isFirstPage ? (
          <CardList>
            
            <HeaderText><h1>My Work</h1></HeaderText>
            <Preview
            preview={preview}
            previewInfo={previewInfo}
            basePath={basePath}
            />
            <HeaderText><h1 id="blog">Blog posts</h1></HeaderText>
             <Card {...featuredPost} featured basePath={basePath} />
            {posts.slice(1).map(({ node: post }) => (
              <Card key={post.id} {...post} basePath={basePath} />
            ))}
          </CardList>
          
        ) : (
          <CardList>
            {posts.map(({ node: post }) => (
              <Card key={post.id} {...post} basePath={basePath} />
            ))}
          </CardList>
        )}
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
  }
`

export default Posts
