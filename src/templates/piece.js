import React from 'react'
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
import SEO from '../components/SEO'

const PieceContainer = styled.div`
    width: 100%;
`
const HeroContainer = styled.div`
  padding: 0 0 3em 0;
  width: 100%;
  display: grid;
  grid-template-columns: .8fr;
  @media (min-width: ${props => props.theme.responsive.small}) {
    grid-template-columns: .3fr;
    grid-gap: 1em;
  }
  @media (min-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: .25fr;
    grid-gap: 1em;
  }

`
const HeroPic = styled.img`
  width: 100%;
`
const Body = styled.div`
color: ${props => props.theme.colors.black};
max-width: 100%;
margin: 0 auto;
  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    text-transform: capitalize;
  }
div.block.row1 p {
  grid-column: 1 / 1;
}
div.block {
  padding: 0 0 3em 0;
  width: 100%;
  display: grid;
  align-items: start;
  grid-template-columns: 1fr;
  @media (min-width: ${props => props.theme.responsive.small}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em;
  }
  @media (min-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 3em;
  }
}

div.block.row3 p {
  grid-column: 1 / 1;
}
div.block.row3 {
  grid-gap: 1em;
}
  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
  }

  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
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
      list-style: circle;
      list-style-position: outside;
      line-height: 1.6;
      font-weight: 500;
      letter-spacing: .02rem;
      padding-bottom: .4em;
      &:last-child {
        margin: 0;
      }
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
`

const PieceTemplate = ({ data, pageContext }) => {
  const {
    title,
    metaDescription,
    heroImage,
    body,
    publishDate,
    tags,
  } = data.contentfulPiece

  const previous = pageContext.prev
  const next = pageContext.next
  const { basePath } = pageContext

  let ogImage
  try {
    ogImage = heroImage.file.url
  } catch (error) {
    ogImage = null
  }

  return (
    <Layout>

      <Container>
        <PieceContainer>
          <HeroContainer>
          <HeaderText><h1>{title}</h1></HeaderText>
          <Body dangerouslySetInnerHTML={{ __html: data.contentfulPiece.excerpt.childMarkdownRemark.html }}/>
          <HeroPic src={ heroImage.file.url } alt="" /> 
          </HeroContainer>
          <Body dangerouslySetInnerHTML={{ __html: data.contentfulPiece.body.childMarkdownRemark.html }}/>
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
