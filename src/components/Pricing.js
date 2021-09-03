import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import styled from '@emotion/styled'
import github from '../../static/images/github.svg'
import instagram from '../../static/images/instagram.svg'
import twitter from '../../static/images/twitter.svg'
import linkedin from '../../static/images/linkedin.svg'
import email from '../../static/images/paper-plane.svg'
import svgLogo from '../../static/images/favicon.svg'



const Wrapper = styled.footer`
background: ${props => props.theme.colors.white};
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: auto auto;
margin: auto;
padding-bottom: 3em;
@media (min-width: ${props => props.theme.responsive.small}) {
  max-width: 650px;
  margin: auto;
}
max-width: ${props => props.theme.sizes.maxWidth};
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.coffee};
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: ${props => props.theme.colors.chartreuse};
    }
  }
`

const List = styled.ul`
display: flex;
flex-flow: column wrap;
justify-content: space-between;
justify-items: flex-start;
width: 90%;
border-top: 1px solid ${props => props.theme.colors.secondary};
padding: 1em 0 2em;
margin: 0 1.5em;
margin-left: auto;
margin-right: auto;
li {
  cursor: pointer;
display: flex;
flex-flow: row nowrap;
align-items: center;
padding: 0.25em 0;
width: 100%;
max-width: 10em;
padding: .5em;
}
`

const Item = styled.li`

cursor: pointer;
display: flex;
flex-flow: row nowrap;
max-width: 10em;
padding: .5em;

img {
  max-width: 1.5em;
  padding-right: .5em;
}


a {
  flex: 0 0 10px;
  width: auto;
  font-weight: 600;
  transition: all 0.2s;
  text-decoration: none;
  color: ${props => props.theme.colors.coffee};
  &:hover {
    color: ${props => props.theme.colors.chartreuse};
  }
  &:visited {
    color: ${props => props.theme.colors.coffee};
  }
}
margin: 0 0 0 auto;
`

 


const LogoContainer = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / 3;
  background-color: white;
  width: 100%;
`


const MySVGLogo = styled.img`
  background-color: white;
  width: 3em;
  margin: auto;
  border-radius: 2em;
  box-shadow: 0px 0px 12px 0px rgba(30, 30, 42, .05);
    &:hover {
    transition: all .2s ease-in;
    transform: scale(1.05);
    box-shadow: 0px 0px 20px 0px rgba(30, 30, 42, .2);
  }

`

const Pricing = props => {
  const { menuLinks } = useSiteMetadata()
  const { basePath } = useSiteMetadata()
  return (
  <Wrapper>

            <List>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.slug}>
                {link.name}
              </Link>
            </li>
          ))}
        </List>
  <List>

    <a
  href="mailto: patrick@patrickthomas.design"
  rel="nofollow noopener noreferrer"
  target="_blank"
  >
  <Item>
  
  <img
  src={email}
  alt="Email Patrick Thomas"
  />
  
  
  <p>Email Me!</p>
  </Item>
  
  </a>
  <a
  href="https://github.com/patrickhthomas"
  rel="nofollow noopener noreferrer"
  target="_blank"
  >
  <Item>
  <img
  src={github}
  alt="Patrick Thomas GitHub"
  />
  <p>Github</p>
  </Item>
  </a>
  
  
  
  
  <a
  href="https://www.linkedin.com/in/patrickhthomas/"
  rel="nofollow noopener noreferrer"
  target="_blank"
  >
  <Item>
  <img
  src={linkedin}
  alt="Patrick Thomas LinkedIn"
  />
  <p>LinkedIn</p>
  </Item>
  </a>
  
  
  
  
  <a
  href="https://twitter.com/product_pat"
  rel="nofollow noopener noreferrer"
  target="_blank"
  >
  <Item>
  <img
  src={twitter}
  alt="Product Pat Twitter"
  />
  <p>Twitter</p>
  </Item>
  </a>
  
  
  
  
  <a
  href="https://www.instagram.com/product.pat/"
  rel="nofollow noopener noreferrer"
  target="_blank"
  >
  <Item>
  <img
  src={instagram}
  alt="Product Pat Instagram"
  />
  
  <p>Instagram</p>
  </Item>
  </a>
  
  
  </List>
  </Wrapper>
  )}
  
  export default Pricing
  