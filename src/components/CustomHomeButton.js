import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'


const Button = styled.button`
  width: 100%;
  font-family: ${props => props.theme.fonts.header};
  font-size: 1.2em;
  background: ${props => props.theme.colors.white};
  border-top: .1em solid ${props => props.theme.colors.chartreuse};
    border-left: .1em solid ${props => props.theme.colors.chartreuse};
      border-right: .1em solid ${props => props.theme.colors.chartreuse};
border-radius: 1em 1em 0em 0em;
  color: ${props => props.theme.colors.coffee};
  transition: all .2s ease-in;
  box-shadow: 0px 0px 4px 0px rgba(30, 30, 42, .4);
  height: 4em;
  align-self: end;


`
const ButtonHolder = styled.div`
z-index: 0;
width: 100%;
`


const CustomHomeButton = props => {


    return (
        <ButtonHolder>
<Link to={props.linkPath}>
    <Button className={props.className}>{props.label}</Button>
</Link>
</ButtonHolder>
    )
}


export default CustomHomeButton
