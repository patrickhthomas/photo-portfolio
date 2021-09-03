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






const ProductPhotosPage = ({ data, pageContext }) => {
  const { basePath } = pageContext
    let ogImage
  return (
    <Layout>
    <SEO title={startCase(basePath)} image={ogImage} />
    <Container>




     <CustomCarousel2 
    alias={data.productPhoto}
    />

    </Container>
    </Layout>
    )
  }

export const query = graphql`
  query ProductPhotoQuery {
    contentfulHeroImageLeftPhoto {
        image {
          file {
            url
          }
        }
      }
      contentfulHeroImageRightPhoto {
        image {
          file {
            url
          }
        }
      }
      productPhoto: contentfulPhotoAlbum(contentful_id: {eq: "55rZZpiXLLdvBgDjnQhixA"}) {
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
      description
      fixed(height: 800, width: 800) {
        src
        width
        height
      }
    }
  }
      eventPhoto: contentfulPhotoAlbum(contentful_id: {eq: "2V2KTSpNg1NZcc2wv8Z3v9"}) {
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
      description
      fixed(height: 800, width: 800) {
        src
        width
        height
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
    digitalMarketingPhoto: contentfulPhotoAlbum(contentful_id: {eq: "55rZZpiXLLdvBgDjnQhixA"}) {
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

export default ProductPhotosPage


