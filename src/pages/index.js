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
import CustomHomeButton from '../components/CustomHomeButton'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import HeaderText from '../components/HeaderText'



const GridItem = styled.div`
height: 20em;
width: 100%;
margin-bottom: .5em;
overflow: hidden;
box-shadow: 0px 0px 4px 0px rgba(74, 143, 0, .4);
border-right: .1em solid ${props => props.theme.colors.chartreuse};
border-left: .1em solid ${props => props.theme.colors.chartreuse};
border-bottom: .1em solid ${props => props.theme.colors.chartreuse};
border-radius: 0em 0em .5em .5em;
transition: all .05s ease-in;
  &:hover {
    background: ${props => props.theme.colors.middleGreen};
    cursor: pointer;
    box-shadow: 0px 0px 8px 0px rgba(74, 143, 0, .6);
        transition: all .1s ease-in;
  }
`

const FlexBox = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: space-evenly;
align-items: center;
padding: 1em;
min-width: 20em;
max-width: 30em;
flex: 1 1 0%;
a {
  width: 100%;
}
  &:hover {
    button{
    background: ${props => props.theme.colors.middleGreen};
    transition: all .2s ease-in;
    cursor: pointer;
    color: ${props => props.theme.colors.white};
    }
  }
`

const FlexiestBox = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
`

const GridItemPhoto = styled.img`
max-width: 200%;
height: 100%;
object-fit: cover;
transition: all .05s ease-in;
  &:hover {
    height: 102%;
    transition: all .1s ease-in;
  }
`

const Index = ({ data, pageContext }) => {

  const { humanPageNumber, basePath } = pageContext
  const heroDescription = data.contentfulHeroDescriptionPhoto.description.internal.content
  let ogImage
  let sections = data.allContentfulHomeSection.edges
  let productSource = data.productPhoto.photos
  let eventSource = data.eventPhoto.photos
  let everydaySource = data.everydayPhoto.photos
    let portraitSource = data.portraitPhoto.photos
      let natureSource = data.naturePhoto.photos
  
  return (
    <Layout>
    <SEO title={startCase(basePath)} image={ogImage} />
    <Container>
    
    <HomeHero 
    imgLeft={data.contentfulHeroImageLeftPhoto.image.file.url}
    imgRight={data.contentfulHeroImageRightPhoto.image.file.url}
    heroDescription={heroDescription}
    />
    <HeaderText><h2>Examples of my work</h2></HeaderText>
  <FlexiestBox>
    <FlexBox>
      <CustomHomeButton linkPath={'/product-photos'} label='Products, Food, & Beverages'></CustomHomeButton>
    <Link to={'/product-photos'}>
    <GridItem>
    <GridItemPhoto src={productSource[0].file.url} alt={productSource[0].description}/>   
    </GridItem>
    </Link>
   
   </FlexBox>

    <FlexBox>
      <CustomHomeButton linkPath={'/events-and-spaces'}label='Events & Spaces'></CustomHomeButton>

    <Link to={'/events-and-spaces'}>
    <GridItem>
    <GridItemPhoto src={eventSource[0].file.url} alt={eventSource[0].description}/>   
    </GridItem>
    </Link>

   
   </FlexBox>
 

    <FlexBox>
       <CustomHomeButton linkPath={'/everyday-life'} label='Everyday Life'></CustomHomeButton>
    <Link to={'/everyday-life'}>
    <GridItem>
    <GridItemPhoto src={everydaySource[0].file.url} alt={everydaySource[0].description}/>   
    </GridItem>
    </Link>
  
   </FlexBox>

    <FlexBox>
       <CustomHomeButton linkPath={'/portrait'} label='Portraits'></CustomHomeButton>
    <Link to={'/portrait'}>
    <GridItem>
    <GridItemPhoto src={portraitSource[0].file.url} alt={portraitSource[0].description}/>   
    </GridItem>
    </Link>
  
   </FlexBox>

    <FlexBox>
       <CustomHomeButton linkPath={'/nature'} label='Nature'></CustomHomeButton>
    <Link to={'/nature'}>
    <GridItem>
    <GridItemPhoto src={natureSource[0].file.url} alt={natureSource[0].description}/>   
    </GridItem>
    </Link>
  
   </FlexBox>

  </FlexiestBox>
    </Container>
    <Pagination context={pageContext} />
    </Layout>
    )
  }

export const query = graphql`
  query IndexQuery {
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
            
            heroImage {
              file {
                url
              }
            }
          }
        }
      }
    contentfulHeroDescriptionPhoto {
      description {
        internal {
          content
        }
      }
    }
    allContentfulHomeSection(sort: {order: ASC, fields: order}) {
        edges {
          node {
            content {
              childMarkdownRemark {
                html
              }
            }
            title
          }
        }
      }
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
    naturePhoto: contentfulPhotoAlbum(contentful_id: {eq: "6W40heBzhLtqCpNJvmyFE5"}) {
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
    portraitPhoto: contentfulPhotoAlbum(contentful_id: {eq: "2b4UcGBr9vIsX2lxh8sI6W"}) {
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

export default Index


