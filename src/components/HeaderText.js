import React from 'react'
import styled from '@emotion/styled'

const Title = styled.div`
  color: ${props => props.theme.colors.black};
  h1 {
      font-size: 2em;
      @media (min-width: ${props => props.theme.responsive.small}) {
      font-size: 2.8em;
  }
  }
  h2 {
      font-size: 1.8em;
      border-bottom: .5px solid ${props => props.theme.colors.secondary};
  }
  h3 {
      font-size: 1.2em;
      border-bottom: .5px solid ${props => props.theme.colors.secondary};
  }
  h1,
  h2,
  h3 {
    text-transform: uppercase;
    font-weight: 400;
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
    color: ${props => props.theme.colors.black};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const HeaderText = props => {
  return <Title>{props.children}</Title>
}

export default HeaderText
