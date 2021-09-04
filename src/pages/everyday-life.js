import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from '../components/SEO'
import { startCase } from 'lodash'
import CustomCarousel2 from '../components/Carousel2'






const EverydayPhotosPage = ({ data, pageContext }) => {
  const { basePath } = pageContext
    let ogImage
  return (
    <Layout>
    <SEO title={startCase(basePath)} image={ogImage} />
    <Container>




     <CustomCarousel2 
    alias={data.everydayPhoto}
    />

    </Container>
    </Layout>
    )
  }

export const query = graphql`
  query EverydayPhotoQuery {
      everydayPhoto: contentfulPhotoAlbum(contentful_id: {eq: "3ssw97inT5js85zc1pgxWG"}) {
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

export default EverydayPhotosPage


