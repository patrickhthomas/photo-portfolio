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
  const leftQuote = `&ldquo;`
  const rightQuote = `&rdquo;`
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
        />
        {isFirstPage ? (
          <CardList>
            
            <HeaderText><h1>My Work</h1></HeaderText>
            <Preview
            basePath={basePath}
            slug={preview[0].node.slug}
            src={preview[0].node.heroImage.file.url}
            excerpt={{ __html: leftQuote+preview[0].node.excerpt.childMarkdownRemark.excerpt+rightQuote }}
            role={preview[0].node.role}
            title={preview[0].node.title}
            slug1={preview[1].node.slug}
            src1={preview[1].node.heroImage.file.url}
            excerpt1={{ __html: leftQuote+preview[1].node.excerpt.childMarkdownRemark.excerpt+rightQuote}}
            role1={preview[1].node.role}
            title1={preview[1].node.title}
            slug2={preview[2].node.slug}
            src2={preview[2].node.heroImage.file.url}
            excerpt2={{ __html: leftQuote+preview[2].node.excerpt.childMarkdownRemark.excerpt+rightQuote}}
            role2={preview[2].node.role}
            title2={preview[2].node.title}
            slug3={preview[3].node.slug}
            src3={preview[3].node.heroImage.file.url}
            excerpt3={{ __html: preview[3].node.body.childMarkdownRemark.excerpt }}
            role3={preview[3].node.role} 
            title3={preview[3].node.title}
            />
            <HeaderText><h1>Blog posts</h1></HeaderText>
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
  }
`

export default Posts
