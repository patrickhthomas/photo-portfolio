import React from 'react'
import styled from '@emotion/styled'
import Collapsible from 'react-collapsible';
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"



const Container = styled.div`
 margin-top: -3em;
 display: flex;
 padding-bottom: 3em;
position: relative;
   @media (min-width: ${props => props.theme.responsive.small}) {
     width: 100vw;
     margin-left: calc(50% - 50vw);
  }
   @media (min-width: ${props => props.theme.responsive.large}) {
     max-width: ${props => props.theme.sizes.maxWidth};
      width: 100%;
      margin-left: 0;
      margin: -3em auto;
      padding-bottom: 6em;
  }
  
`

const Grid = styled.div`
  display: grid;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  @media (min-width: ${props => props.theme.responsive.small}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
    grid-gap: 0;
    width: 100vw;
    max-height: 18em;
    overflow: hidden;
  }

  @media (min-width: ${props => props.theme.responsive.large}) {
    &::after {
    content: " ";
    width: 2000px;
    height: 288px;
    margin-left: -50%;
    background: black;
    mix-blend-mode: screen;
    position: absolute;
    display: block;
    z-index: 0;
  }
  }
`
const Me = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  align-self: start;
  margin: auto;
  height: auto;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  align-items: flex-start;
  @media (min-width: ${props => props.theme.responsive.small}) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    width: 100%;
    margin: 0;
  }
`
const MyPic = styled.img`

  width: 100%;
  height: auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    display: flex;
    width: 100%;
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    align-self: start;

  }
`


const BgPic = styled.img`
  display: none;
  @media (min-width: ${props => props.theme.responsive.small}) {

    display: flex;
    width: 100%;
    grid-column: 1 / 1;
    grid-row: 1 / 1;
  }
`

const Text = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  max-width: 100%;
  margin: 0 auto;
  h1,
  h2,
  h3 {
    letter-spacing: .1rem;
    font-weight: 400;
    line-height: 1.25;
    padding-left: .5em;
    font-family: ${props => props.theme.fonts.header};
    font-style: italic;
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

  p, h1, h2, h3 {
    padding-top: 1.5em;
    line-height: 1.6;
    margin: 0 0 2em 0;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    @media (min-width: ${props => props.theme.responsive.small}) {
    color: ${props => props.theme.colors.white};
    padding-left: 1.5em;
  }
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
  margin-bottom: -2rem;
  @media (min-width: ${props => props.theme.responsive.small}) {
    margin-bottom: 0;
  }

  @media (min-width: ${props => props.theme.responsive.large}) {
    h1 {
      padding-left: 0;
    }
  }

`


const HomeHero = ({ imgLeft, imgRight, heroDescription }) => {
  return (
    <Container>
      <Grid>
        <Text>
            <BgPic src={ imgLeft } alt="background image"/>
            <h1>{heroDescription}</h1>
        </Text>
        <Me>
          <MyPic src={ imgRight } alt="My Profile Picture" />
        </Me>
      </Grid>
    </Container>
  )
}

export default HomeHero