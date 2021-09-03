
import React from 'react'
import styled from "@emotion/styled"
import { Link } from 'gatsby'
import HeaderText from './HeaderText'
import SquarePhotos from './SquarePhotos'
import GridPhotos from './GridPhotos'


const Container1 = styled.div`
display: flex;
flex-flow: column nowrap;
place-content: center;
`

const Container2 = styled.div`
padding-bottom: 2em;
max-width: 90%;
margin: auto;
display: grid;
grid-template-rows: auto auto auto;
place-items: start;
a {
 place-self: end center;
}
@media (min-width: ${props => props.theme.responsive.medium}) {

}

.squareHeader {
    max-width: 10em;
}
`



const Desc = styled.h3`
width: 100%;
padding-bottom: 1em;
`

const CustomCarousel2 = ({ alias, alias1, alias2, alias3 }) => {
    
    
    
    
    
    return (
        <Container1>
        <Container2>
        <HeaderText><h2 className="squareHeader">{alias.title}</h2></HeaderText>
                <Desc dangerouslySetInnerHTML={{ __html: alias.description.childMarkdownRemark.html }}>
        </Desc>
        <GridPhotos
        buttonLabel='Next'
        photoSrc={alias.photos}/>
        </Container2>


            
        </Container1>
            )
        }
        
        
        
        
        export default CustomCarousel2
        