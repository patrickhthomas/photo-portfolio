import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import HeaderText from '../components/HeaderText'
import Container from '../components/Container'
import Layout from '../components/Layout'
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
  padding-top: 3em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  
`

const BlogPage = ({ data, pageContext }) => {
const basePath = pageContext
const blogPost = data.allContentfulPost.edges
const totalCount = data.allContentfulPost.totalCount



return (
  <Layout>
    <SEO title="Blog" description="List of blog posts" />
    <Wrapper>
      <BlogLinks blogPost={blogPost} basePath={basePath} totalCount={totalCount}/>


    </Wrapper>
  </Layout>
)}

export const query = graphql`
query BlogQuery {
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
}

`

export default BlogPage
