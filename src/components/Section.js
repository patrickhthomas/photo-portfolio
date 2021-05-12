//Originally ctrl + v from templates/page.js

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import HeaderText from '../components/HeaderText'


const Section = ({ data }) => {
  const { title, body } = data.contentfulPage
  return (
    <Layout>
      <Container>
        <HeaderText><h1>{title}</h1></HeaderText>
        <PageBody body={body} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
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
  }
`

export default Section
