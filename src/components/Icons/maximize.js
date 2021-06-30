import React from 'react'
import styled from '@emotion/styled'
import maxIconSrc from '../../../static/images/arrows-alt-light.svg'

const Icon = styled.img`
max-width: 2.5em;
margin: auto;
padding: .5em .5em 1.5em .5em;
border-radius: 1em;
`

const MaxIcon = () => {
  return (
    <Icon src={maxIconSrc}/>
  )
}

export default MaxIcon