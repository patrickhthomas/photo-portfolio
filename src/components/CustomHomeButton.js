import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'


const Button = styled.button`
  width: 100%;
  background: ${props => props.theme.colors.white};
  border-top: .4em solid ${props => props.theme.colors.chartreuse};
    border-left: .4em solid ${props => props.theme.colors.chartreuse};
      border-right: .4em solid ${props => props.theme.colors.chartreuse};
border-radius: 0em 2em 0em 0em;
  color: ${props => props.theme.colors.coffee};
  transition: all .2s ease-in;
  box-shadow: 0px 0px 4px 0px rgba(30, 30, 42, .4);
  height: 4em;
  align-self: end;

  &:hover {
    background: ${props => props.theme.colors.middleGreen};
    transition: all .2s ease-in;
    cursor: pointer;
    color: ${props => props.theme.colors.white};
  }


`
const ButtonHolder = styled.div`
z-index: 1000;
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
