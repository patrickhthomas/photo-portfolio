
import React, { useState, useEffect, useCallback } from 'react'
import styled from "@emotion/styled"



const PhotoGrid = styled.div`
width: 100%;
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
`

const GridItem = styled.div`
.notThumb {
    opacity: 100%;
}
.thumb {
    filter: contrast(.2);
}
height: 16em;
width: 12em;
display: block;
margin-bottom: 2em;
overflow: hidden;
box-shadow: 0px 0px 4px 0px rgba(74, 143, 0, .4);
transition: all .05s ease-in;
  &:hover {
    background: ${props => props.theme.colors.middleGreen};
    cursor: pointer;
    box-shadow: 0px 0px 8px 0px rgba(74, 143, 0, .6);
        transition: all .1s ease-in;
  }
`

const GridItem2 = styled.div`

`

const GridItemPhoto = styled.img`
max-width: 200%;
height: 100%;
object-fit: cover;
transition: all .05s ease-in;
  &:hover {
    height: 102%;
    transition: all .1s ease-in;
  }
`
const GridContainer = styled.div`
display: flex;
place-content: center;
.small {
    display: none;
    position: relative;
    opacity: 0%;
   box-shadow: 0px 0px 40px 20px rgba(255, 255, 255, 1);
    border-radius: .5em;
    width: 100%;
    height: auto;
    position: fixed;
    z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.large {
box-shadow: 0px 0px 40px 20px rgba(255, 255, 255, 1);
border-radius: .5em;
    opacity: 100%;
    width: 100%;
    display: block;
    height: auto;
    position: fixed;
    z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
max-width: 720px;
}

`


const GridPhotos = ({ photoSrc, photoInterval, photoDelay}) => {
  
  const photos = photoSrc.map(photo => (
            photo
        ))
  
const [index, setIndex] = useState(0)
const [size, setSize] = useState('small')
const [thumb, setThumb] = useState('notThumb')
const [largeSrc, setSrc] = useState(photos[0].file.url)

  const handleEnlarge = useCallback((event) => {
   size === 'small' ? [setSize('large'), setSrc(event.target.src), setThumb('thumb')] : [setSize('small'), setContainer('small'), setThumb('notThumb')]
  }, [])

    const handleClose = () => {
   size === 'large' ? [setSize('small'), setThumb('notThumb')] : null
  }

  



      return (
          <GridContainer onClick={handleClose}>

        <GridItem2 className={size}>
        <GridItemPhoto src={largeSrc} onClick={handleEnlarge}/>
        </GridItem2>

        <PhotoGrid>

        {photoSrc.map(photo => (
            <GridItem>
                <GridItemPhoto key={photo.file.url}  src={photo.file.url} alt={photo.description} onClick={handleEnlarge} className={thumb}/>
            </GridItem>
                
        ))}
        </PhotoGrid>
        </GridContainer>
        )
      }
      
    
      
      
      
export default GridPhotos
      