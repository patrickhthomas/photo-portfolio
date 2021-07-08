import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import HeaderText from '../components/HeaderText'
import Container from '../components/Container'
import styled from '@emotion/styled'
import SEO from '../components/SEO'
import { startCase } from 'lodash'
import sorrySrc from '../../static/images/sorry.jpeg'
import { Link } from 'gatsby'

const Sorry = styled.img`
border-radius: 3em;
`




const DigitalMarketingPage
 = ({ data, pageContext }) => {
  const { basePath } = pageContext
  let ogImage
  
  
  return (
    <Layout>
    <SEO title={startCase(basePath)} image={ogImage} />
    <Container>
        <HeaderText><h1>Sorry about that</h1></HeaderText>
        <HeaderText><h3>this page is undergoing some routine maintenance</h3></HeaderText>
<Sorry src={sorrySrc}></Sorry>
<Link to={`/`}><HeaderText><h3>Return Home</h3></HeaderText></Link>
    </Container>
    </Layout>
    )
  }

export const query = graphql`
query DigitalMarketingQuery {
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


}
`

export default DigitalMarketingPage


