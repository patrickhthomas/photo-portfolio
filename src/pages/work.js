import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import HeaderText from '../components/HeaderText'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import { startCase } from 'lodash'

import Preview from'../components/Preview'

import SEO from '../components/SEO'
import { graphql } from 'gatsby'
import BlogLinks from '../components/BlogLinks'

const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  a {
    color: ${props => props.theme.colors.black};
  }
`
const Wrapper=styled.section`
  margin: 0 auto;
  padding-top: 5em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  
`

const WorkPage = ({ data, pageContext }) => {
const basePath = pageContext
const blogPost = data.allContentfulPost.edges
const totalCount = data.allContentfulPost.totalCount
const preview = data.allContentfulPiece.edges
const previewInfo = data.contentfulPreviewInfo



return (
  <Layout>
    <SEO title="Blog" description="List of blog posts" />
    <Container>
          <CardList>
            
            <HeaderText><h1>My Work</h1></HeaderText>
            <Preview
            preview={preview}
            previewInfo={previewInfo}
            basePath={basePath}
            />

          </CardList>


    </Container>
  </Layout>
)}

export const query = graphql`
query WorkQuery {
  allContentfulPost(sort: {fields: publishDate, order: DESC}) {
    edges {
      node {
        slug
        id
        title
        publishDate
        heroImage {
          fluid {
            src
          }
          file {
              url
          }
        }
      }
    }
  totalCount
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
}


`

export default WorkPage
