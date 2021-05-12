import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import HeaderText from '../components/HeaderText'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import styled from '@emotion/styled'
import { graphql } from "gatsby"
import github from '../../static/images/github.svg'
import instagram from '../../static/images/instagram.svg'
import twitter from '../../static/images/twitter.svg'
import linkedin from '../../static/images/linkedin.svg'


const Wrapper=styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 2em;
`

const Text = styled.p`
max-width: 650px;
margin: auto;
`
const Social= styled.div`
max-width: 650px;
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
margin: auto;
img {
  max-width: 3.5em;
}
a {
  pointer: cursor;
}
`


const Contact = ({ data }) => {

  return (
    <Layout>
      <SEO title="Contact" description="Contact description goes here" />
      <Container>
        <Wrapper>
                  <HeaderText><h1 className="pageTitle">Contact</h1></HeaderText>
                  <Text>{data.contentfulContact.description.description}</Text>
        <ContactForm>
        </ContactForm>
        <div>
        <Social>
          <a
          href="https://github.com/patrickhthomas"
          rel="nofollow noopener noreferrer"
          target="_blank"
          >
            <img src={github}></img>
          </a>

          <a
          href="https://www.linkedin.com/in/patrickhthomas/"
          rel="nofollow noopener noreferrer"
          target="_blank"
          >
            <img src={linkedin}></img>
          </a>

          <a
          href="https://twitter.com/product_pat"
          rel="nofollow noopener noreferrer"
          target="_blank"
          >
          <img src={twitter}></img>
          </a>

          <a
          href="https://www.instagram.com/product.pat/"
          rel="nofollow noopener noreferrer"
          target="_blank"
          >
          <img src={instagram}></img>
          </a>
          



        </Social>
        </div>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export const query = graphql`
query ContactQuery {
  contentfulContact {
    description {
      description
    }
    twitter
    linkedIn
    instagram
    gitHub
  }
}

`

export default Contact
