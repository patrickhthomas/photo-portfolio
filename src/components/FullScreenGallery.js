
import React, { useState } from 'react'
import styled from "@emotion/styled"
import CustomButton from './CustomButton'
import { jsx } from '@emotion/core'
import HeaderText from './HeaderText'
import { render } from 'react-dom'


const Next = styled.div`
&:hover {
    cursor: pointer;
}
width: 5em;
place-self: end;
@media (min-width: ${props => props.theme.responsive.small}) {
width: 10em;
}
`
const Counter = styled.div`
place-self: center;
`
const Previous = styled.div`
&:hover {
    cursor: pointer;
}
width: 5em;
place-self: start;
@media (min-width: ${props => props.theme.responsive.small}) {
width: 10em;
}
`
const Controls = styled.div`

display: grid;
grid-template-columns: 1fr 1fr 1fr;
place-self: end center;
margin-bottom: 0em;
@media (min-width: ${props => props.theme.responsive.small}) {
width: 30em;
margin-bottom: 0em;
margin-top: 1em;
}
`
const Slide = styled.img`
width: 100%;
object-fit: contain;

`
const SlideContainer = styled.div`
display: flex;
position: relative;
place-self: end center;
max-width: 100%;
max-height: 110%;
overflow: hidden;
z-index: 1005;
background-color: ${props => props.theme.colors.highlight05};
`

const AutoPlay = styled.div`
.fullScreen {
    display: none;
}
display: grid;
grid-template-rows: auto auto;
align-items: center end;
max-width: 100%;
max-height: 100%;
min-height: 100vh;
overflow: hidden;
background-color: ${props => props.theme.colors.white};
box-shadow: 0px 0px 4px 0px rgba(30, 30, 42, .4);
padding: 1em;
border-radius: .2em;
.homeButtons {
    background: ${props => props.theme.colors.highlight05};
    transition: all .2s ease-in;
    transform: scale(1.05);
    cursor: pointer;
    color: ${props => props.theme.colors.white};
}


.none {
  border-radius: 5em;
  transform: scale(.7);
  opacity: 0%;
  transition: all .5s ease-in;
}
.noneAgain {
  border-radius: 5em;
  opacity: 0%;
  transform: scale(.7);
  transition: all .5s ease-in;
}
.active {
  transition: all .5s ease-out;

}
.second {
  transform: scale(.98);
  transition: all .5s ease-out;

}
.first {
  border-radius: 5em;
  transform: scale(1.02);
  transition: all .5s ease-out;

}
`



const FullScreenGallery = ({ photoSrc, photoInterval, photoDelay, buttonLabel }) => {
  
  const interval = photoInterval
  const delay = photoDelay
  const transition = photoInterval / 10
  const photos = photoSrc
  const thisButtonLabel = buttonLabel
  const classNames = [
    'first', 
    'second',
    'active',
    'active', 
    'active', 
    'active',
    'active',
    'active', 
    'active', 
    'noneAgain',
    'first',
    'second', 
    'active', 
    'active',
    'active', 
    'active', 
    'active',
    'active', 
    'active', 
    'none',
  ]
const [index, setIndex] = useState(0)
  const length = photos.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const src = photos[index]

      return (
    
        <AutoPlay>
        <SlideContainer className="slideContainer">
        <Slide src={src} className='active'/>
        </SlideContainer>
        <Controls>
        <Previous onClick={() => handlePrevious()}>
        <CustomButton className='nextButton' label='Previous'
        />
        </Previous>
        <Counter>
            <p>{index+1}/{photos.length}</p>
        </Counter>
        <Next onClick={() => handleNext()}>
        <CustomButton className='nextButton' label='Next'
        />
        </Next>
        </Controls>
        </AutoPlay>
        
        )
      }
      
    
      
      
      
      export default FullScreenGallery
      