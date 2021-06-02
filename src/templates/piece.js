

import React from 'react'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from "../components/Container"
import styled from "@emotion/styled"
import HeaderText from "../components/HeaderText"
import jsx from "@emotion/core"
import Affirmative from '../components/Affirmative'
import Hero from '../components/Hero'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import PostDetails from '../components/PostDetails'




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

`



const PieceTemplate = ({ data }) => {
  const { title, metaDescription, body } = data.contentfulPiece
  return (
    <Layout>
      <SEO
        title={title}
        description={
          metaDescription
            ? metaDescription.internal.content
            : body.childMarkdownRemark.excerpt
        }
      />       
      <Container>
        <PieceContainer>
        <PageBody body={body} title={title} />
        </PieceContainer>
      </Container>
    </Layout>
  )
}


export const query = graphql`
  query($slug: String!) {
    contentfulPiece(slug: { eq: $slug }) {
      title
      slug
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      heroImage {
        file {
            url
        }
        ogimg: resize(width: 1800) {
          src
        }
      }
      body {
        childMarkdownRemark {
          timeToRead
          html
          excerpt(pruneLength: 320)
        }
      }
      excerpt {
        childMarkdownRemark {
          timeToRead
          html
          excerpt
        }
      }
    }
  }
`

export default PieceTemplate
