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



const Body = styled.div`

display: flex;
flex-flow: column nowrap;
justify-content: space-between;
color: ${props => props.theme.colors.black};
max-width: 100%;
margin: 0 auto;
  h1,
  h2,
  h3 {
    font-weight: 900;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    text-transform: capitalize;

  }


div {
  padding: 1em em 3em 0em;
  display: flex;
  flex-flow: column nowrap;
}

.singleColumn{
  width: 100%;
  flex: 2 2 auto;
  
}

.twinColumn {
  flex: 1 1 auto;
}


p {
  width: 100%;
  flex: 1 1 auto;
  line-height: 1.6;
  margin: 0 0 2em 0;
}





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



@media screen and (min-width: ${props => props.theme.responsive.small}) {
  display: flex;
  flex-flow: row wrap;
  .twinColumn, p {
      width: 55%;
      padding: 2em;
  }
  .singleColumn {
    padding: 2em;
  }
}


p.notAnImage {
  width: 100%;
  flex: 0 0 auto;
  padding: 0em;
}


div p{
  width: 100%;
  padding: 0;
}


`

const HeroContainer = styled.div`
  padding: 0 0 3em 0;
  width: 100%;
  display: grid;
  grid-template-columns: .8fr;
  @media (min-width: ${props => props.theme.responsive.small}) {
    grid-template-columns: .3fr;
    grid-gap: 1em;
    padding: 2em;
    
  }
  @media (min-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: .5fr;
    grid-gap: 1em;
  }
  div {
    width: 100%;
  }
  div > p {
    width: 100%;
    padding: 0;
  }

`

const PieceContainer = styled.div`
    width: 100%;
    .mainBody > p {
      width: 100%;
    }

@media screen and (min-width: ${props => props.theme.responsive.small}) {
.mainBody > p {
      max-width: 50%;
      padding: 2em;
      &:first-child {
        max-width: 100%;
      }
    }
.mainBody > p img {
      width: 100%;
    }
  }
@media screen and (min-width: ${props => props.theme.responsive.medium}) {
.mainBody > p {
      max-width: 100%;
      padding: 4em;
      &:first-child {
      max-width: 100%;
      padding: 0em;
      }
    }
.mainBody > p img {
      width: 100%;
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
          </HeroContainer>
          <Body className="mainBody" dangerouslySetInnerHTML={{ __html: data.contentfulPiece.body.childMarkdownRemark.html }}/>
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
