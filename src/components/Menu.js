import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import svgLogo from '../../static/images/favicon.svg'
import Collapsible from 'react-collapsible'
import menu from '../../static/images/bars-light.svg'






const LogoContainer = styled.div`
  grid-column: 2 / 3;
  background: transparent;
`




const MySVGLogo = styled.img`
  background-color: rgba(30, 30, 42, .00);
  max-width: 3em;
  max-height: 3em;
  margin-left: 0;
  border-radius: 2em;
  box-shadow: 0px 0px 12px 0px rgba(30, 30, 42, .05);
    &:hover {
    transition: all .2s ease-in;
    transform: scale(1.05);
    box-shadow: 0px 0px 20px 0px rgba(30, 30, 42, .2);
  }
@media (min-width: ${props => props.theme.responsive.small}) {
  margin-left: 1em;
}
`

const Header = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: ${props => props.theme.colors.nav};
  backdrop-filter: blur(.5em);
  width: 100%;
  padding: .5em 0;
  z-index: 4;
      box-shadow: 0px 0px 12px 0px rgba(30, 30, 42, .1);
`

const Nav = styled.nav`
div {
    background-color: rgba(30, 30, 42, .00);
}
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  line-height: 1.5em;
  .smallUL {
    box-shadow: 0px 0px 20px 0px rgba(30, 30, 42, .2);
    border-radius: .2em;
    display: grid;
    padding-top: 2em;
    padding-bottom: 1em;
    margin-right: 1em;
    margin-top: .5em;
    grid-gap: 2em;
    justify-items: end;
    position: absolute;
    right: 0;
    width: 12em;
    border: 2px solid ${props => props.theme.colors.chartreuse};
    background-color: ${props => props.theme.colors.white};
    opacity: 100%;
    transition: all 0.2s;
  li {
    display: flex;
    width: 80%;
    margin-left: 1em;
    margin-right: 1em;
    border-bottom: .5px solid ${props => props.theme.colors.secondary};
  }

  a {
    text-align: right;
    width: 100%;
    text-decoration: none;
    color: ${props => props.theme.colors.chartreuse};
    font-weight: 400;
    transition: all 0.2s;
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
  }


.large {
  display: none;
  @media (min-width: ${props => props.theme.responsive.small}) {
  display: flex;
  justify-content: flex-end;
  visibility: visible;
  max-width: 100%;
  }
  li {
    display: inline-block;
    margin-left: 1em;
    margin-right: 1em;
    border-bottom: .5px solid ${props => props.theme.colors.secondary};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.coffee};
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: ${props => props.theme.colors.chartreuse};
    }
  }
}
.closeUL {
  .smallUL {
    display: none;
    opacity: 0%;
    transition: all 0.2s;
  }
}

.openUL, .closeUL {
@media (min-width: ${props => props.theme.responsive.small}) {
  display: none;
}
}
z-index: 1000;
`

const Trigger = styled.div`
font-size: 1.2em;
margin: 0;
display: flex;
flex-flow: column nowrap;
cursor: pointer;
p {
  margin: auto;
  z-index: 100;
}
  img {
    width: 1.5em;
    margin: 0 0 0 auto;
  }
`



const activeLinkStyle = {
  
  color: '#4A8F00',
  fontWeight: 'bold',
}

const activeLinkStyleSmall = {
  
  color: 'Black',
  borderBottom: '1px solid #4A8F00',
  fontWeight: 'bold',
  fontSize: '1.2em',
  textTransform: 'uppercase'
}




const Menu = props => {

  const { menuLinks } = useSiteMetadata()
  const { basePath } = useSiteMetadata()
  return (
    <Header>
      <Nav>
        <LogoContainer>
            <Link to={basePath}>
              <MySVGLogo src={svgLogo} alt="my logo"/>
            </Link>
          </LogoContainer>
        <ul className="large">
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.slug} activeStyle={activeLinkStyle}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Collapsible className="closeUL" openedClassName="openUL" trigger={<Trigger><img src={menu}></img></Trigger>} easing='ease-in' triggerClassName='closed' triggerOpenedClassName='opened'>
                <ul className="smallUL">
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.slug} activeStyle={activeLinkStyleSmall}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        </Collapsible>
      </Nav>
      
    </Header>
  )
}

export default Menu


