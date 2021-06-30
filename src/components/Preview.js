import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import HeaderText from '../components/HeaderText'
import Collapsible from 'react-collapsible'
import expand from '../../static/images/expand.svg'
import compress from '../../static/images/compress.svg'
import arrow from '../../static/images/arrow-right.svg'

const Container = styled.div`
display: flex;
max-width: 100vw;
padding-bottom: 3em;
div {
  
}
.opened {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5em;
  position: relative;
  z-index: 100;
  margin-bottom: 3em;
  
  p {
    color: white;
    transition: all .4s ease-in;
    max-width: 90%;
  }
  
  img {
    position: absolute;
    transform: rotate(90deg);
    right: 1em;
    transition: all .4s ease-in;
  }

  
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${props => props.theme.colors.highlight}; 
    mix-blend-mode: multiply;
    z-index: 0;
    display: block;
    width: 100%;
    margin-left: -.5em;
    padding: 0;
    opacity: 100%;
    transition: all .3s ease-in;
  }
  background: ${props => props.theme.colors.white};
  border-bottom: .2em solid ${props => props.theme.colors.highlight};
  transition: all .2s ease-in;
  box-shadow: -2px 2px 2px 0px rgba(30, 30, 42, .1);
  align-self: end;
  border-radius: .2rem;
  
  &:hover {
    transition: all .2s ease-in;
    cursor: pointer;
  }
  
}

.closed {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5em;
  position: relative;
  z-index: 1;
  img {
    position: absolute;
    transform: rotate(0deg);
    right: 1em;
    transition: all .4s ease-in;
    
  }
  p {
    color: ${props => props.theme.colors.primary};
    transition: all .4s ease-in;
    max-width: 90%;
  }
  
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${props => props.theme.colors.highlight}; 
    mix-blend-mode: multiply;
    z-index: 5000;
    display: block;
    margin-left: -.5em;
    width: .5em;
    opacity: 100%;
    transition: all .7s ease-in;
  }
  background: ${props => props.theme.colors.white};
  border-bottom: .2em solid ${props => props.theme.colors.highlight05};
  color: ${props => props.theme.colors.black};
  transition: all .2s ease-in;
  
  align-self: end;
  border-radius: .2rem;
  
  &:hover {
    transition: all .2s ease-in;
    cursor: pointer;
  }
  
}
`

const MyPic = styled.img`
align-self: start;
border-radius: 1em;
width: 100%;
max-width: 200px;
margin: 0 auto;

`

const Button = styled.button`
width: 100%;
background: ${props => props.theme.colors.white};
border: .2em solid ${props => props.theme.colors.highlight};
color: ${props => props.theme.colors.black};
transition: all .2s ease-in;
box-shadow: 0px 0px 4px 0px rgba(30, 30, 42, .4);
max-width: 12em;
height: 3em;
align-self: end;
border-radius: .2rem;

&:hover {
  background: ${props => props.theme.colors.secondary};
  transition: all .2s ease-in;
  transform: scale(1.05);
  cursor: pointer;
}
@media (min-width: ${props => props.theme.responsive.small}) {
  grid-column: 1 / span 2;
  color: ${props => props.theme.colors.less};
  border: .01em solid ${props => props.theme.colors.less};
  box-shadow: none;
}
`


const Grid = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-auto-rows: 1fr;
row-gap: 4em;
width: 100%;
margin: 0 auto;
padding-top: 2em;
@media (min-width: ${props => props.theme.responsive.medium}) {
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
}
@media (min-width: ${props => props.theme.responsive.small}) {
  grid-gap: 4em;
}
`

const GridItem = styled.div`

height: 100%;
place-items: stretch;
&:hover div {
  color: ${props => props.theme.colors.black};
  transition: all .2s ease-in;
}
&:hover ul {
  color: ${props => props.theme.colors.black};
  transition: all .2s ease-in;
}
&:hover button {
  background: ${props => props.theme.colors.white};
  border: .2em solid ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.black};
  transition: all .2s ease-in;
  box-shadow: 0px 0px 4px 0px rgba(30, 30, 42, .4);
}
transition: all .5s ease-out;
a {
  text-decoration: none;
}
@media (min-width: ${props => props.theme.responsive.small}) {
  box-shadow: 0px 0px 12px 0px rgba(30, 30, 42, .05);
  border: 1px solid ${props => props.theme.colors.highlight25};  
  grid-template-columns: 1fr 1fr;
  padding: 2em;
  grid-gap: 16px;
  &:hover {
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.highlight};
    transition: all .2s ease-in;
    transform: scale(1.01);
    box-shadow: 0px 0px 20px 0px rgba(30, 30, 42, .2);
  }
}

`
const ChildGrid = styled.div`
min-height: 100%;
border-radius: .2em;
display: grid;
grid-gap: 2em;
grid-template-columns: 1fr;
width: 100%;
margin: 0 auto;
place-self: stretch;
justify-items: center;
:after {
  content: ""; /* This is necessary for the pseudo element to work. */ 
  display: block; /* This will put the pseudo element on its own line. */
  margin: 0 auto; /* This will center the border. */
  width: 100%; /* Change this to whatever width you want. */
  padding-top: 20px; /* This creates some space between the element and the border. */
  clip-path: polygon(0 0, 100% 0, 70% 100%, 30% 100%); 
  border: .3px double ${props => props.theme.colors.secondary};
  filter: blur(2px);
  height: .5em;
  
}
padding-bottom: 2em;

@media (min-width: ${props => props.theme.responsive.small}) {
  grid-template-columns: 1fr 1fr;
  padding: 3%;
  grid-gap: 2em;
  border-bottom: 0;
  :after {
    display: none;
  }
  @media (min-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: 1fr 1fr;
    padding: 1%;
    grid-gap: 2em;
    border-bottom: 0;
  }
}

`
const Role = styled.ul`
color: ${props => props.theme.colors.black};
margin: 0 auto;
line-height: 1.6;
font-weight: 700;
padding-bottom: 1em;
`

const Text = styled.div`
color: ${props => props.theme.colors.black};
margin: 0 auto;
line-height: 1.6;
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
}

a {
  transition: 0.2s;
  color: ${props => props.theme.colors.tertiary};
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
@media (min-width: ${props => props.theme.responsive.medium}) {
  display: none;
}
`

const LargeBPText = styled.div`
display: none;
grid-column: 1 / 3;
color: ${props => props.theme.colors.black};
margin: 0 auto;
line-height: 1.6;
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
}

a {
  transition: 0.2s;
  color: ${props => props.theme.colors.tertiary};
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
@media (min-width: ${props => props.theme.responsive.medium}) {
  display: block;
  margin-left: 1em;
}
`
const Trigger = styled.div`
font-size: 1.2em;
padding: .5em 0 .5em .5em;
margin: 0;
display: flex;
flex-flow: row nowrap;
p {
  margin: 0;
  z-index: 100;
}
img {
  width: 1.2em;
}

.bold {
  font-weight: 900;
  font-size: 1.1em;
}
`

const WorkType = styled.div`
max-width: 500px;


`



const AffirmativePreview = props => {
  
  
  return (
    <div>
    <Container>
    <WorkType className="workType"><p>{props.previewInfo.paragraph.internal.content}</p></WorkType>
    </Container>
    <Container>
    <Collapsible open={true} trigger={<Trigger><p>{props.previewInfo.previewTitle1.internal.content}</p><img src={arrow}></img></Trigger>} easing='ease-in' triggerClassName='closed' triggerOpenedClassName='opened' overflowWhenOpen='visible'>
    <WorkType></WorkType>
    <Grid>
    {props.preview.slice(0, 3).map(({node}) => (
      <GridItem key={node.title}>
      <Link to={`${node.slug}/`}>
      <ChildGrid>
      <div>
      <HeaderText><h3>{node.title}</h3></HeaderText>
      <Role>
      <li>{node.role[0]}</li>
      <li>{node.role[1]}</li>
      <li>{node.role[2]}</li>
      <li>{node.role[3]}</li>
      </Role>
      <Text dangerouslySetInnerHTML={{ __html: node.excerpt.childMarkdownRemark.excerpt }} /> 
      </div>
      <MyPic src={ node.heroImage.file.url } alt="My Profile Picture" /> 
      <LargeBPText dangerouslySetInnerHTML={{ __html: node.excerpt.childMarkdownRemark.excerpt }} /> 
      <Button>View Project</Button>
      </ChildGrid>
      </Link>
      </GridItem>
      ))}
      </Grid>
      </Collapsible>
      
      </Container>
      
      
        
        </div>
        )
      }
      
      export default AffirmativePreview