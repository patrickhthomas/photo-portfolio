import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import HeaderText from '../components/HeaderText'
import Collapsible from 'react-collapsible';

const Container = styled.div`
 display: flex;
 width: 100%;
 padding-bottom: 3em;
 .opened {
   background-color: black;
   color: white;
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
    transform: scale(1.05);
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
const Huh = styled.h2`
      font-size: 1.8em;
      border-bottom: .5px solid ${props => props.theme.colors.secondary};
      padding: .5em 0 .5em .5em;
      `


const AffirmativePreview = props => {
  return (
    <div>
    <Container>
      <Collapsible contentInnerClassName='openContent' triggerOpenedClassName='openContent'openedClassName='opened' overflowWhenOpen='visible' trigger={<Huh>UX/Product Design</Huh>}>
    <Grid>
      
      <GridItem>
      <Link to={`${props.basePath}/${props.slug}/`}>
        <ChildGrid>
        <div>
          <HeaderText><h3>{props.title}</h3></HeaderText>
          <Role>
              <li>{props.role[0]}</li>
              <li>{props.role[1]}</li>
              <li>{props.role[2]}</li>
              <li>{props.role[3]}</li>
          </Role>
        <Text dangerouslySetInnerHTML={props.excerpt} /> 
        </div>
        <MyPic src={ props.src } alt="My Profile Picture" /> 
        <LargeBPText dangerouslySetInnerHTML={props.excerpt} /> 
        <Button>View Project</Button>
        </ChildGrid>
      </Link>
      </GridItem>
      


      <GridItem>
      <Link to={`${props.basePath}/${props.slug1}/`}>
      <ChildGrid>
        <div>
          <HeaderText><h3>{props.title1}</h3></HeaderText>
          <Role>
              <li>{props.role1[0]}</li>
              <li>{props.role1[1]}</li>
              <li>{props.role1[2]}</li>
              <li>{props.role1[3]}</li>
          </Role>
          <Text dangerouslySetInnerHTML={props.excerpt1} />
        </div>
        <MyPic src={ props.src1 } alt="My Profile Picture" />
        <LargeBPText dangerouslySetInnerHTML={props.excerpt1} /> 
        <Button>View Project</Button>  
      </ChildGrid>
      </Link>
      </GridItem>

      

      <GridItem>
      <Link to={`${props.basePath}/${props.slug2}/`}>
      <ChildGrid>
        <div>
          <HeaderText><h3>{props.title2}</h3></HeaderText>
          <Role>
              <li>{props.role2[0]}</li>
              <li>{props.role2[1]}</li>
              <li>{props.role2[2]}</li>
              <li>{props.role2[3]}</li>
          </Role>
          <Text dangerouslySetInnerHTML={props.excerpt2} />
        </div>
        <MyPic src={ props.src2 } alt="My Profile Picture" />
        <LargeBPText dangerouslySetInnerHTML={props.excerpt2} /> 
        <Button>View Project</Button>  
      </ChildGrid>
      </Link>
      </GridItem>

      <GridItem>
      <Link to={`${props.basePath}/${props.slug3}/`}>
      <ChildGrid>
        <div>
          <HeaderText><h3>{props.title3}</h3></HeaderText>
          <Role>
              <li>{props.role3[0]}</li>
              <li>{props.role3[1]}</li>
              <li>{props.role3[2]}</li>
              <li>{props.role3[3]}</li>
          </Role>
          <Text dangerouslySetInnerHTML={props.excerpt3} />
        </div>
        <MyPic src={ props.src3 } alt="My Profile Picture" />
        <LargeBPText dangerouslySetInnerHTML={props.excerpt3} /> 
        <Button>View Project</Button>  
      </ChildGrid>
      </Link>
      </GridItem>


    </Grid>
    </Collapsible>

    </Container>

        <Container>
      <Collapsible contentInnerClassName='openContent' triggerOpenedClassName='openContent'openedClassName='opened' overflowWhenOpen='visible' trigger={<Huh>Marketing and Branding</Huh>}>
    <Grid>
      
      <GridItem>
      <Link to={`${props.basePath}/${props.slug}/`}>
        <ChildGrid>
        <div>
          <HeaderText><h3>{props.title}</h3></HeaderText>
          <Role>
              <li>{props.role[0]}</li>
              <li>{props.role[1]}</li>
              <li>{props.role[2]}</li>
              <li>{props.role[3]}</li>
          </Role>
        <Text dangerouslySetInnerHTML={props.excerpt} /> 
        </div>
        <MyPic src={ props.src } alt="My Profile Picture" /> 
        <LargeBPText dangerouslySetInnerHTML={props.excerpt} /> 
        <Button>View Project</Button>
        </ChildGrid>
      </Link>
      </GridItem>
      


      <GridItem>
      <Link to={`${props.basePath}/${props.slug1}/`}>
      <ChildGrid>
        <div>
          <HeaderText><h3>{props.title1}</h3></HeaderText>
          <Role>
              <li>{props.role1[0]}</li>
              <li>{props.role1[1]}</li>
              <li>{props.role1[2]}</li>
              <li>{props.role1[3]}</li>
          </Role>
          <Text dangerouslySetInnerHTML={props.excerpt1} />
        </div>
        <MyPic src={ props.src1 } alt="My Profile Picture" />
        <LargeBPText dangerouslySetInnerHTML={props.excerpt1} /> 
        <Button>View Project</Button>  
      </ChildGrid>
      </Link>
      </GridItem>

      

      <GridItem>
      <Link to={`${props.basePath}/${props.slug2}/`}>
      <ChildGrid>
        <div>
          <HeaderText><h3>{props.title2}</h3></HeaderText>
          <Role>
              <li>{props.role2[0]}</li>
              <li>{props.role2[1]}</li>
              <li>{props.role2[2]}</li>
              <li>{props.role2[3]}</li>
          </Role>
          <Text dangerouslySetInnerHTML={props.excerpt2} />
        </div>
        <MyPic src={ props.src2 } alt="My Profile Picture" />
        <LargeBPText dangerouslySetInnerHTML={props.excerpt2} /> 
        <Button>View Project</Button>  
      </ChildGrid>
      </Link>
      </GridItem>

      <GridItem>
      <Link to={`${props.basePath}/${props.slug3}/`}>
      <ChildGrid>
        <div>
          <HeaderText><h3>{props.title3}</h3></HeaderText>
          <Role>
              <li>{props.role3[0]}</li>
              <li>{props.role3[1]}</li>
              <li>{props.role3[2]}</li>
              <li>{props.role3[3]}</li>
          </Role>
          <Text dangerouslySetInnerHTML={props.excerpt3} />
        </div>
        <MyPic src={ props.src3 } alt="My Profile Picture" />
        <LargeBPText dangerouslySetInnerHTML={props.excerpt3} /> 
        <Button>View Project</Button>  
      </ChildGrid>
      </Link>
      </GridItem>


    </Grid>
    </Collapsible>

    </Container>
    </div>
  )
}

export default AffirmativePreview