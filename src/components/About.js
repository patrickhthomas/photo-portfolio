import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import PicSrc from "/Users/patrickthomas/Developer-Files/portfolioV2/gatsby-starter-gcn/static/images/avatar.jpeg"

const MyPic = styled.img`
  border-radius: 1em;
`


const Container = styled.div`
  display: grid;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  @media (min-width: ${props => props.theme.responsive.medium}) {
  grid-template-columns: 1fr 1fr;
  }
`
const Me = styled.div`
  height: auto;
  visibility: hidden;
  width: 0%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    visibility: visible;
    width: 100%;
  }
`

const Text = styled.div`
  margin: 0 auto;
  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    text-transform: capitalize;
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
    color: ${props => props.theme.colors.black};
  }

  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.black};
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
      list-style: disc;
      list-style-position: inside;
      line-height: 1.25;
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
    @media (min-width: ${props => props.theme.responsive.small}) {

  }
`


const About = ({ children }) => {
  return (
    <Container>
    <Text dangerouslySetInnerHTML={children}></Text>
    <Me>
        <MyPic src={ PicSrc } alt="My Profile Picture" />
    </Me>
    </Container>
  )
}

export default About