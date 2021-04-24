import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import LogoSrc from "/Users/patrickthomas/Developer-Files/portfolioV2/gatsby-starter-gcn/static/images/favicon.png"


const Menu = styled.button`
  p {
    padding-top: 15%;
    width: 100%;
  }
   grid-column: 5 / 6;
   align-self: stretch;
   text-align: right;
  @media (min-width: ${props => props.theme.responsive.small}) {
    visibility: hidden;
  }
  cursor: pointer;
`
const Modal = styled.div`
  visibility: hidden;
  opacity; 0;
  width: 50vw;
  padding-top: .5em;
  border-radius: .2em;
  overflow: hidden;
  position: absolute;
  transition: all 0.55s;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
  ul{
    display: grid;
  }
  li {
    background: ${props => props.theme.colors.white};
    display: flex;
    padding: 1.5em;
    list-style: none;
    margin: .5em;
    box-shadow: 0px 0px 4px 0px rgba(30, 30, 42, .2);
    cursor: pointer;
    z-index: 2;
  }
  a{
    color: black;
    cursor: pointer;
  }
  @media (min-width: ${props => props.theme.responsive.small}) {
    visibility: hidden;
    opacity; 0;
  }
  &.open {
    visibility: visible;
    opacity; 1;
  }
`
const activeModalStyle = {
  color: '#5E5BF7',
  fontWeight: 'bold',
}

const Collapsed = ({pageContext}) => {

  const { menuLinks } = useSiteMetadata()
  const { basePath } = useSiteMetadata()
  return (
      <div>
      <MyMenu>
        <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <Link to={link.slug} activeStyle={activeModalStyle}>
               {link.name}
            </Link>
          </li>
          ))}
        </ul>     
    </MyMenu>
    </div>
  )
}

export default Collapsed
