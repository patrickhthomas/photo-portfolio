import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import HeaderText from '../components/HeaderText'
import Container from '../components/Container'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  a {
    color: ${props => props.theme.colors.coffee};
  }
`
const HeaderContainer = styled.div`
  max-width: 650px;
  margin: auto;
  text-align: center;
  h1 {
    text-align: center;
     max-width: 650px;
     margin: auto; 
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" description="Page Not Found" />
    <Container>
      <HeaderContainer>
      <HeaderText><h1>Page Not Found</h1></HeaderText>
      <Text>
        Please return <Link to="/">home</Link> or use the menu to navigate to a
        different page.
      </Text>
      </HeaderContainer>
    </Container>
  </Layout>
)

export default NotFoundPage
