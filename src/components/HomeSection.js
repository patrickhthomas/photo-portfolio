import React from 'react'
import styled from '@emotion/styled'
import HeaderText from '../components/HeaderText'
import Container from '../components/Container'
require('prismjs/themes/prism.css')

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
  padding: 2em;
}

.twinColumn {
  flex: 1 1 auto;
}

.nine, .eleven {
  width: 100%;
  flex: 2 2 auto;
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
    margin: 1.5em 0 0 -1em;
    
    border-left: 2px solid ${props => props.theme.colors.highlight};
    
  }
  li:first-child {
    padding-top: 0em;
    margin-top: .5em;
    
  }
  padding-bottom: 2em;
}

ol {
  li {
    list-style: decimal;
    list-style-position: inside;
    line-height: 1.25;
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





p.notAnImage {
  width: 100%;
  flex: 0 0 auto;
  padding: 0em;
}

div p {
  width: 100%;
  padding: 0;
}


`
const Prim=styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 1em;
  @media (min-width: ${props => props.theme.responsive.small}) {
grid-template-columns: 1fr 1fr;
grid-gap: 2em;
  }
`
const Sub=styled.div`


.pieceBody {
a {
    color: ${props => props.theme.colors.highlight};
    font-weight: 700;
}
}
`
const Wrapper=styled.section`
margin: 0 auto;
max-width: ${props => props.theme.sizes.maxWidthCentered};
.gatsby-resp-image-wrapper { 
  min-width: 60%;
  width: 100%;
  mix-blend-mode: multiply;
  cursor: pointer;
  @media (min-width: ${props => props.theme.responsive.small}) {

  }

  @media (min-width: ${props => props.theme.responsive.medium}) {

  }
  
}



`

const HomeSection = props => {
  return (
    <Container>
    {props.sections.slice(0, 1).map(({node}) => (
   <Sub>
    <HeaderText><h2>{node.title}</h2></HeaderText>
    <Body className="pieceBody"
    dangerouslySetInnerHTML={{ __html: node.content.childMarkdownRemark.html }}
    />
    </Sub>
    ))}
    <Prim>
    {props.sections.slice(1, 3).map(({node}) => (
    <Sub>
    <HeaderText><h2>{node.title}</h2></HeaderText>
    <Body className="pieceBody"
    dangerouslySetInnerHTML={{ __html: node.content.childMarkdownRemark.html }}
    />
    </Sub>
    ))}
    </Prim>
    {props.sections.slice(3, 4).map(({node}) => (
    <Sub>
    <HeaderText><h2>{node.title}</h2></HeaderText>
    <Body className="pieceBody"
    dangerouslySetInnerHTML={{ __html: node.content.childMarkdownRemark.html }}
    />
    </Sub>
    ))}
    </Container>
    )
  }
  
  export default HomeSection
  