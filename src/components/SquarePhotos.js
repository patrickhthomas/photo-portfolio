
import React, { useState, useEffect } from 'react'
import styled from "@emotion/styled"
import Container from '../components/Container'
import HeaderText from './HeaderText'

const Slide = styled.img`
max-width: 100%;

`

const AutoPlay = styled.div`

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
}
@media (min-width: ${props => props.theme.responsive.small}) {
margin: 1em 0em 1em 0em;
}
`



const SquarePhotos = ({ photoSrc }) => {
    
    
    const photos = photoSrc
        const [activeIndex, setActiveIndex] = useState(0)
        
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
                }, 2000)
                
                // we return a cleanup callback that will stop the timer
                return () => {
                    window.clearInterval(timer)
                }
            }, [photos])
            
            // set the activeQuote here to avoid duplicating logic and 
            // to make it clear what is being rendered below
            const activePhoto = photos[activeIndex]
            
            return (

                <AutoPlay>
                <Slide src={activePhoto} />
                </AutoPlay>

                )
            }
            
            
            
            
            export default SquarePhotos
            