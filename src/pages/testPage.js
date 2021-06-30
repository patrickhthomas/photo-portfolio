

import React from 'react'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from "../components/Container"
import styled from "@emotion/styled"
import HeaderText from "../components/HeaderText"
import jsx from "@emotion/core"
import Carousel from 'react-gallery-carousel';
import CustomCarousel from '../components/Carousel1'
import 'react-gallery-carousel/dist/index.css';





const Body = styled.div`







button {
  padding: 1em 10% 1em 10%;
  width: 100%;
  background: ${props => props.theme.colors.white};
  border: .2em solid ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.black};
  transition: all .2s ease-in;
  box-shadow: 0px 0px 4px 0px rgba(30, 30, 42, .4);
  border-radius: .2rem;
  margin: 1em 0 1em 0;

  &:hover {
    background: ${props => props.theme.colors.highlight};
    color: ${props => props.theme.colors.white};
    transition: all .2s ease-in;
    transform: scale(1.05);
    cursor: pointer;
  }
}
  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
    color: white;
    background-color: ${props => props.theme.colors.black};
    padding: 2em 0em .5em 1em;
    border-radius: 1em 1em 0em 0em;
    width: 100%;
  }
  h3 {
    font-size: 1em;
    text-decoration: underline;
    text-transform: uppercase;
  }

  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.link};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    li {
      width: 100%;
      list-style: none;
      list-style-position: inside;
      line-height: 1.6;
      font-weight: 500;
      letter-spacing: .02rem;
      padding: .05em 0 .05em 1em;
      margin: 2.5em 0 0 -1em;
   
      border-left: 2px solid ${props => props.theme.colors.highlight};

    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${props => props.theme.colors.secondary};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${props => props.theme.colors.secondary} !important;
    span {
      background: inherit !important;
    }
  }
.bold {
  font-weight: 900;
  font-size: 1em;
  margin-bottom: .5em;
}





`

const HeroContainer = styled.div`

`

const PieceContainer = styled.div`
.carousel {
    div {
        display: flex;
        background-color: ${props => props.theme.colors.white};
    }
    ul {
      align-items: center;

    }
    li[role='presentation'] {
      border: .5em solid ${props => props.theme.colors.white};
      border-radius: 2em;
      overflow: hidden;
      img {
        
      }
    }
  @media (min-width: ${props => props.theme.responsive.small}) {

  }
    @media (min-width: ${props => props.theme.responsive.medium}) {
    max-width: 500px;
  }
}
`



const TestPage = ({ data }) => {

  return (
    <Layout>    
      <Container>
        <PieceContainer>
          <CustomCarousel alias={data.foodPhoto}/>
          <CustomCarousel alias={data.productPhoto}/>
          <CustomCarousel alias={data.logoPhoto}/>
        </PieceContainer>
      </Container>
    </Layout>
  )
}


export const query = graphql`
query TestQuery {
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
}
`



export default TestPage
