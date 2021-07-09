import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import HeaderText from '../components/HeaderText'
import Container from '../components/Container'
import styled from '@emotion/styled'
import SEO from '../components/SEO'
import { startCase } from 'lodash'
import { Link } from 'gatsby'
import CustomCarousel3 from '../components/Carousel3'

const Hero = styled.div`
padding-bottom: 2em;
`

const DigitalMarketingPage
= ({ data, pageContext }) => {
    const { basePath } = pageContext
    let ogImage
    
    
    return (
        <Layout>
        <SEO title={startCase(basePath)} image={ogImage} />
        <Container>
        <Hero>
        <HeaderText><h1>Digital Marketing</h1></HeaderText>
        <HeaderText><h4 dangerouslySetInnerHTML={{ __html: data.digitalMarketingPhoto.description.childMarkdownRemark.html }}>
        </h4>
        </HeaderText>
        </Hero>
        <CustomCarousel3 alias={data.productPhoto}/>
        
        <CustomCarousel3 alias={data.styleGuides}/>

        <CustomCarousel3 alias={data.logoAlbum}/>
        
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
        
        styleGuides: contentfulPhotoAlbum(contentful_id: {eq: "27iDSZdHgMbehTWqSnlkZw"}) {
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
        
        digitalMarketingPhoto: contentfulPhotoAlbum(contentful_id: {eq: "1poRdq8WvybMvGi64kJSrq"}) {
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
    }
    `
    
    export default DigitalMarketingPage
    
    
    