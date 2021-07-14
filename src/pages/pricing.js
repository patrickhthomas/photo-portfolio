import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import HeaderText from '../components/HeaderText'
import Container from '../components/Container'
import styled from '@emotion/styled'
import SEO from '../components/SEO'
import { startCase } from 'lodash'
import { Link } from 'gatsby'
import CustomCarousel3 from '../components/Carousel3'

const Hero = styled.div`
padding-bottom: 2em;
`


const Grid1 = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 1em;
p, div, h2, h3, span {
    width: 100%;
}
@media (min-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: repeat(3, 1fr);
}
padding-bottom: 3em;
`

const Grid1Sub = styled.div`
display: grid;
grid-template-columns: minmax(auto, 20em);
width: 100%;
place-items: center;
grid-gap: 1em;
grid-auto-rows: minmax(4em, auto);
@media (min-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: 1fr;
    grid-gap: .2em;
    grid-template-rows: 2em 8em .5em 6em .5em 6em .5em 8em .5em;
}
background-color: ${props => props.theme.colors.tertiary};
padding: .5em;
`

const Grid2 = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 1em;
p, div, h2, h3, span {
    width: 100%;
}
@media (min-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: repeat(4, 1fr);
}

`

const Grid2Sub = styled.div`
display: grid;
grid-template-columns: minmax(auto, 20em);
width: 100%;
place-items: center;
grid-gap: 1em;
grid-auto-rows: minmax(4em, auto);
@media (min-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: 1fr;
    grid-gap: .2em;
    grid-template-rows: 2em 8em .5em 6em .5em 6em .5em;
}
background-color: ${props => props.theme.colors.tertiary};
padding: .5em;
`

const Divider = styled.div`
display: none;
@media (min-width: ${props => props.theme.responsive.small}) {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 1em;
    height: .2em;
    width: 100%;
}

`

const Blip = styled.div`
height: 100%;
width: 100%;
border: 1px solid ${props => props.theme.colors.highlight25};
border-radius: 3em;
`


const Consult = styled.div`
.noBottomMargin {
    margin-bottom: 0em;
}
padding-bottom: 2em;
`

const PricingPage = ({ data, pageContext }) => {
    const { basePath } = pageContext
    let ogImage
    
    
    return (
        <Layout>
        <SEO title={startCase(basePath)} image={ogImage} />
        <Container>
        <Hero>
        <HeaderText><h1>Pricing</h1></HeaderText>
        <HeaderText><h2>
        
        </h2>
        </HeaderText>
        <p>The following services generally have more predictable pricing. If you don't see what you need below, that makes sense! Most of my services are evaluated based on the client's individual needs.</p>
        </Hero>
        <Consult>
        <HeaderText><h2 className="noBottomMargin">Consultation</h2><h3>(or a conversation, really)</h3></HeaderText>
        <p>Before you commit to any of my services, I want to make sure we have a super solid picture of what you need. Don’t get me wrong, I’m all about getting paid, but I’m never going to upsell or push you into spending money on anything that isn’t in your best interest. Your investment in my services should always be a net gain for you. Anyway, here’s the point: Let’s talk. A 5 minute phone chat, an hour over coffee, whatever you need. Some might call it a “free consultation”, but I don’t want to make it sound like I’m doing you a favor by fulfilling a baseline obligation. 
        </p>
        </Consult>

        <Consult>
        <HeaderText><h2>Social Media Marketing</h2></HeaderText>
        <p>Connect to your online audience with high quality content and managed social media accounts.</p>
        </Consult>

        <Grid1>
        <Grid1Sub>
        <HeaderText><h3>$500/Month</h3></HeaderText>
        <p>30 photos. This includes up to 4 shooting sessions, which can be arranged on location or in my studio. Each session is 1 hour long.</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        </Divider>
        <p>1 platform
        +50/additional platform</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        </Divider>
        <p>Scheduled posts for optimized engagement</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        
        </Divider>
        <p>Up to 4 custom graphics (event posters, print ads, etc.)
        Additional graphics evaluated on a case by case  basis.</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        
        </Divider>
        </Grid1Sub>
        <Grid1Sub>
        <HeaderText><h3>$300/Month</h3></HeaderText>
        <p>15 photos. This includes up to 4 shooting sessions, which can be arranged on location or in my studio. Each session is 1 hour long.</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        </Divider>
        <p>1 platform
        +50/additional platform</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        
        </Divider>
        <p>Scheduled posts for optimized engagement</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        
        </Divider>
        <p>Up to 4 custom graphics (event posters, print ads, etc.)
        Additional graphics evaluated on a case by case  basis.</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        
        </Divider>
        </Grid1Sub>
        <Grid1Sub>
        <HeaderText><h3>$ ??? /Month</h3></HeaderText>
        <p>I can be flexible dependent upon your needs, for example, if you need more custom graphics than photographs.</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        
        </Divider>
        <p>1 platform
        +50/additional platform</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        
        </Divider>
        <p>Scheduled posts for optimized engagement</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        
        </Divider>
        
        </Grid1Sub>
        </Grid1>
        <Consult>
        <HeaderText><h2>E-Commerce Photography</h2></HeaderText>
        <p>Increase online sales with studio quality images for your food/drink menu or product catalogues.</p>
        </Consult>

        <Grid2>
        <Grid2Sub>
        <HeaderText><h3>$32.00/photo</h3></HeaderText>
        <p>1-5 items, photographed with studio lighting against a static background.</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        </Divider>
        <p>Professional editing and retouching.</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        </Divider>
        <p>Full usage rights and ownership of your images.</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        
        </Divider>

        </Grid2Sub>
        <Grid2Sub>
        <HeaderText><h3>$28.00/photo</h3></HeaderText>
        <p>6-20 items, photographed with studio lighting against a static background.</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        </Divider>
        <p>Professional editing and retouching.</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        </Divider>
        <p>Full usage rights and ownership of your images.</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        
        </Divider>

        </Grid2Sub>
        <Grid2Sub>
        <HeaderText><h3>$25.00/photo</h3></HeaderText>
<p>21-35 items, photographed with studio lighting against a static background.</p>        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        </Divider>
        <p>Professional editing and retouching.</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        </Divider>
        <p>Full usage rights and ownership of your images.</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        
        </Divider>

        </Grid2Sub>
        <Grid2Sub>
        <HeaderText><h3>$20.00/photo</h3></HeaderText>
        <p>31+ items, photographed with studio lighting against a static background.</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        </Divider>
        <p>Professional editing and retouching.</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        </Divider>
        <p>Full usage rights and ownership of your images.</p>
        <Divider>
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        <Blip />
        
        </Divider>

        </Grid2Sub>
        </Grid2>
        
        
        </Container>
        </Layout>
        )
    }
    
    export default PricingPage
    
    
    