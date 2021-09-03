import React from 'react'
import styled from '@emotion/styled'

const Title = styled.div`
  z-index: 0;
  color: ${props => props.theme.colors.coffee};
 .pageTitle {
  max-width: 650px;
  margin: auto;
  
 }

  h1 {
      font-size: 2em;
      @media (min-width: ${props => props.theme.responsive.small}) {
      font-size: 2.8em;
  }
  }
  h2 {
      font-size: 1.8em;
      font-weight: 700;
  }
  h3 {
      font-size: 1.3em;
  }
  h1,
  h2 {
    text-transform: uppercase;
    font-weight: 600;
    text-align: left;
    margin: 0 0 .5em 0;
    line-height: 1.2;
    font-family: ${props => props.theme.fonts.header};
  }

  h1 {
        font-weight: 700;
  }

  h3 {
    text-transform: lowercase;
    font-weight: 500;
    text-align: left;
    margin: 0 0 .5em 0;
    line-height: 1.2;
    font-family: ${props => props.theme.fonts.header};
  }



  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: ${props => props.theme.colors.coffee};
    &:hover {
      color: ${props => props.theme.colors.chartreuse};
    }
  }
`

const HeaderText = props => {
  return <Title>{props.children}</Title>
}

export default HeaderText
