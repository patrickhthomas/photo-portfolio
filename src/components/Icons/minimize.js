import React from 'react'
import styled from '@emotion/styled'
import minIconSrc from '../../../static/images/compress-arrows-alt-light.svg'

const Icon = styled.img`
max-width: 3em;
margin: auto;
padding: .5em .5em 1.5em .5em;
border-radius: 1em;
`

const MinIcon = () => {
  return (
    <Icon src={minIconSrc}/>
  )
}

export default MinIcon