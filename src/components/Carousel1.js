

import React, {Component} from 'react'
import styled from "@emotion/styled"
import HeaderText from "../components/HeaderText"
import MinIcon from '../components/Icons/minimize'
import MaxIcon from '../components/Icons/maximize'
import PropTypes from "prop-types"

import Loadable from "@loadable/component"

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';








const CarouselContainer = styled.div`
.description {
    padding-top: .5em;
    padding-bottom: 1.5em;
}
.carousel {
    width: 100vw;
    left: 50%;
    transform: translateX(-50%);
    * { 
        display: flex;
        background-color: ${props => props.theme.colors.white};
    }

    img {
        display: block;
    }
    ._t1897 {
        z-index: 1000;
    }
    div {
        background-color: ${props => props.theme.colors.white};
        border-radius: .3em;
    }
    button {
        border-radius: .3em;
    }
    ul {
    align-items: center;
    }
    li[role='presentation'] {
      border-radius: .5em;
      overflow: hidden;
      -webkit-mask-image: -webkit-radial-gradient(white, black);
    }

  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 100%;
    max-width: 400px;
    margin: auto;
    left: unset;
    transform: unset;
    li[role='presentation'] {
      border-radius: 1em;
      overflow: hidden;
      -webkit-mask-image: -webkit-radial-gradient(white, black);
    }
  }
    @media (min-width: ${props => props.theme.responsive.medium}) {
    max-width: 400px;
  }
  
}
`



const CustomCarousel = ({ alias, ...props }) => {
    const maxIcon = <MaxIcon/>
    const minIcon = <MinIcon/>
    const hasIndexBoard = props.hasIndexBoard
    const images = alias.photos.map((photo) => ({
    src: `${photo.file.url}`
  }));
  return <CarouselContainer className='section' aria-labelledby='example2'>
      <header className='section-header'>
        <HeaderText><h3>
          {alias.title}
          </h3>
        </HeaderText>
        <p className="description" dangerouslySetInnerHTML={{ __html: alias.description.childMarkdownRemark.html }}>
         
        </p>
      </header>
      <div className='carousel-container'>
        <Carousel className='carousel'
        images={images}
        shouldMaximizeOnClick={true}
        shouldMinimizeOnClick={true}
        hasIndexBoard={hasIndexBoard}
        canAutoPlay={true}
        isAutoPlaying={true} 
        isPlaying={true} 
        hasSizeButton={'bottomRight'} 
        hasMediaButton={false}
        hasLeftButton={false} 
        hasRightButton={false}
        hasCaptions={false}
        objectFit={'cover'}
        maxIcon={maxIcon}
        minIcon={minIcon}
        autoPlayInterval={100}
        />
      </div>
    </CarouselContainer>

}


export default CustomCarousel
