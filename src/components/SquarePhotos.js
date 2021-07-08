
import React, { useState, useEffect } from 'react'
import styled from "@emotion/styled"
import CustomButton from './CustomButton'
import { jsx } from '@emotion/core'
import HeaderText from './HeaderText'
import { render } from 'react-dom'

const Slide = styled.img`
max-width: 100%;

`
const SlideContainer = styled.div`
display: block;
position: relative;
max-width: 100%;
overflow: hidden;
background-color: ${props => props.theme.colors.highlight};
&:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.highlight};
    opacity: .8;
    transition: all .2s ease-in;
    mix-blend-mode: overlay;
}
&:hover {
  :after {
    opacity: 0;
    transition: all .2s ease-in;
    mix-blend-mode: screen;
  }
}
`

const AutoPlay = styled.div`
.homeButtons{
  max-width 100%;
  margin-top: 1em;
  padding: 1em;
  height: auto;
}
max-width: 100%;
overflow: hidden;
background-color: ${props => props.theme.colors.white};
box-shadow: 0px 0px 4px 0px rgba(30, 30, 42, .4);
padding: 1em;
border-radius: .2em;
margin: 1em 0em 1em 0em;
&:hover {
  border: .2em solid ${props => props.theme.colors.highlight};
  transform: scale(1.02);
  transition: all .1s ease-in;
.homeButtons {
    background: ${props => props.theme.colors.highlight};
    transition: all .2s ease-in;
    transform: scale(1.05);
    cursor: pointer;
    color: ${props => props.theme.colors.white};
}
.slideContainer{
  :after {
    opacity: 0;
    mix-blend-mode: screen;
    transition: all .2s ease-in;
  }
}
}
@media (min-width: ${props => props.theme.responsive.small}) {
  margin: 1em 0em 1em 0em;
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

&:hover {
  cursor: pointer;
}

`



const SquarePhotos = ({ photoSrc, photoInterval, photoDelay, buttonLabel }) => {
  
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
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeName, setActiveName] = useState(0)
  

  useEffect(() => {
    // every 2000ms (2s)
    const timer = window.setInterval(() => {
      // `prev` will be the current value of the state; using
      // the callback here means we avoid our useEffect hook 
      // being evaluated on each state update which would be
      // bad for performance.
      setActiveIndex(prev => 
        // if we're at the end, start again at the beginning,
        // otherwise increment the index
        prev + 1 >= photos.length ? 0 : prev + 1
        )
      }, interval)
      const timer2 = window.setInterval(() => {
        // `prev` will be the current value of the state; using
        // the callback here means we avoid our useEffect hook 
        // being evaluated on each state update which would be
        // bad for performance.
        setActiveName(prev =>
          prev + 1 >= classNames.length ? 0 : prev + 1
          )
        }, transition)
        
        // we return a cleanup callback that will stop the timer
        return () => {
          window.clearInterval(timer)
          window.clearInterval(timer2)
        }
      }, [photos])
      
      // set the activeQuote here to avoid duplicating logic and 
      // to make it clear what is being rendered below
      const activePhoto = photos[activeIndex]
      const activeClassName = classNames[activeName]



    

      return (
        
        <AutoPlay >
        <SlideContainer className="slideContainer">
        <Slide src={activePhoto} className={activeClassName}/>
        </SlideContainer>
        <CustomButton className='homeButtons' label={thisButtonLabel}
        ></CustomButton>
        </AutoPlay>
        
        )
      }
      
    
      
      
      
      export default SquarePhotos
      