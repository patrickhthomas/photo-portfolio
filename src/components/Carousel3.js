
import React, { useState } from 'react'
import styled from "@emotion/styled"
import { Link } from 'gatsby'
import HeaderText from './HeaderText'
import GalleryPhotos from './GalleryPhotos'
import FullScreenGallery from './FullScreenGallery'
import CustomButton from './CustomButton'

const Description = styled.p`
width: 100%;
`
const Container1 = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 2em;
@media (min-width: ${props => props.theme.responsive.small}) {
    grid-template-rows: auto auto auto;
    .second {
        justify-self: end;
    }
}
`

const FullScreenModal = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
display: grid;
grid-template-rows: auto auto auto;
grid-template-columns: 1fr;
top: 0;
left: 0;
z-index: 1000;
overflow: hidden;
`

const Enter = styled.div`
width: 4em;
place-self: end;
transform: translate(-1em, 5em) ;
z-index: 999;
`

const Exit = styled.div`
width: 4em;
place-self: end;
margin-right: 1em;
margin-top: .5em;
top: 0;
right: 0;
position: absolute;
z-index: 1006;
`


const Container2 = styled.div`
max-width: 100%;
display: grid;
grid-template-rows: auto auto auto;
grid-template-columns: 1fr;
@media (min-width: ${props => props.theme.responsive.medium}) {

}

.squareHeader {
    max-width: 3em;
}
`


const CustomCarousel3 = ({ alias }) => {
    
    const [size, setSize] = useState(false)
  const handleSize = () =>
    size ? setSize(false) : setSize(true)
  const fullScreen = size

    
    return (
        <>
        <FullScreenModal className={fullScreen ? 'fullScreen' : 'minimized'}>
        <Exit onClick={() => handleSize()}>
            <CustomButton label='Exit'/>
        </Exit>
        <FullScreenGallery
        buttonLabel='Next'
        photoSrc={alias.photos.map(photo => (
            photo.file.url
        ))}
        />
        </FullScreenModal>
        <Container1>
        <Container2>
        <HeaderText><h2 className="squareHeader">{alias.title}</h2></HeaderText>
                <Description dangerouslySetInnerHTML={{ __html: alias.description.childMarkdownRemark.html }}>
        </Description>
        <Enter onClick={() => handleSize()}>
            <CustomButton label='Full Screen'/>
        </Enter>
        <GalleryPhotos
        buttonLabel='Next'
        thumbAlias={alias}
        photoSrc={alias.photos.map(photo => (
            photo.file.url
        ))}/>
        </Container2>

            
        </Container1>

        </>
            )
        }
        
        
        
        
        export default CustomCarousel3
        