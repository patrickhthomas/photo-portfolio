import React from 'react'
import styled from '@emotion/styled'
import github from '../../static/images/github.svg'
import instagram from '../../static/images/instagram.svg'
import twitter from '../../static/images/twitter.svg'
import linkedin from '../../static/images/linkedin.svg'
import email from '../../static/images/paper-plane.svg'


const Social= styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
margin: auto;
img {

}
a {
    max-width: 3.5em;
  pointer: cursor;
  padding: 1em;
}
`

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 650px;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 1em 0 2em;
  margin: 0 1.5em;
  margin-left: auto;
  margin-right: auto;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: 50px;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.black};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.black};
    }
  }
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <a
          href="mailto: patrick@patrickthomas.design"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            src={email}
            alt="Email Patrick Thomas"
          />
        </a>
      </Item>
      <Item>
          <a
          href="https://github.com/patrickhthomas"
          rel="nofollow noopener noreferrer"
          target="_blank"
          >
          <img
            src={github}
            alt="Patrick Thomas GitHub"
          />
        </a>
      </Item>

      <Item>
          <a
          href="https://www.linkedin.com/in/patrickhthomas/"
          rel="nofollow noopener noreferrer"
          target="_blank"
          >
          <img
            src={linkedin}
            alt="Patrick Thomas LinkedIn"
          />
        </a>
      </Item>

      <Item>
          <a
          href="https://twitter.com/product_pat"
          rel="nofollow noopener noreferrer"
          target="_blank"
          >
          <img
            src={twitter}
            alt="Product Pat Twitter"
          />
        </a>
      </Item>

      <Item>
          <a
          href="https://www.instagram.com/product.pat/"
          rel="nofollow noopener noreferrer"
          target="_blank"
          >
          <img
            src={instagram}
            alt="Prpduct Pat Instagram"
          />
        </a>
      </Item>
    </List>
  </Wrapper>
)

export default Footer
