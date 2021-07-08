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
import CustomCarousel from '../components/Carousel1'
import CustomCarousel2 from '../components/Carousel2'
import styled from '@emotion/styled'
import SquarePhotos from '../components/SquarePhotos'

import Loadable from "@loadable/component"



const DigitalMarketingPage = ({ data, pageContext }) => {
  const { humanPageNumber, basePath } = pageContext
  let ogImage
  
  return (
    <Layout>
    <SEO title={startCase(basePath)} image={ogImage} />
    <Container>
        <HeaderText><h1>Digital Marketing</h1></HeaderText>
        <p dangerouslySetInnerHTML={{ __html: data.digitalMarketingAlbum.description.childMarkdownRemark.html }}></p>
        <HeaderText><h2>Graphic Design & Brand Development</h2></HeaderText>
<CustomCarousel alias={data.styleGuideAlbum}/>
<CustomCarousel alias={data.logoAlbum}/>
<HeaderText><h2>Photography</h2></HeaderText>
<CustomCarousel alias={data.foodAlbum}/>
<CustomCarousel alias={data.productAlbum}/>
    </Container>

    </Layout>
    )
  }


export const query = graphql`
query DigitalMarketingPageQuery {
  styleGuideAlbum: contentfulPhotoAlbum(contentful_id: {eq: "27iDSZdHgMbehTWqSnlkZw"}) {
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
  logoAlbum: contentfulPhotoAlbum(contentful_id: {eq: "3tL5xSUWYJudLGkThC6DaW"}) {
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
  foodAlbum: contentfulPhotoAlbum(contentful_id: {eq: "5oM4Lo9OYVDBUodqUdSrot"}) {
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
    productAlbum: contentfulPhotoAlbum(contentful_id: {eq: "34C1e43oFbfXO76Be0HdA9"}) {
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
    digitalMarketingAlbum: contentfulPhotoAlbum(contentful_id: {eq: "1poRdq8WvybMvGi64kJSrq"}) {
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


