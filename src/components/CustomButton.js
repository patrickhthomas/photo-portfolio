import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import HeaderText from '../components/HeaderText'


/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

const Form = styled.form`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
    background: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.black};
    border-radius: 2px;
    padding: 1em;
    &::-webkit-input-placeholder {
      color: gray;
    }
    &::-moz-placeholder {
      color: gray;
    }
    &:-ms-input-placeholder {
      color: gray;
    }
    &:-moz-placeholder {
      color: gray;
    }
    &:required {
      box-shadow: none;
    }
  }
  &::before {
    content: '';
    background: black;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.2s all;
    opacity: ${props => (props.overlay ? '.8' : '0')};
    visibility: ${props => (props.overlay ? 'visible' : 'hidden')};
  }
`

const Name = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const Email = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const Message = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 250px;
  resize: vertical;
`

const Submit = styled.input`
  width: 100%;
  background: ${props => props.theme.colors.white};
  border: .01em solid ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.black};
  transition: all .2s ease-in;
  box-shadow: 0px 0px 4px 0px rgba(30, 30, 42, .4);
  max-width: 12em;
  height: 3em;
  align-self: end;
  border-radius: .2rem;

  &:hover {
    background: ${props => props.theme.colors.highlight};
    transition: all .2s ease-in;
    transform: scale(1.05);
    cursor: pointer;
    color: ${props => props.theme.colors.white};
  }
    @media (min-width: ${props => props.theme.responsive.small}) {
      grid-column: 1 / span 2;
      color: ${props => props.theme.colors.less};
  box-shadow: 0px 0px 4px 0px rgba(30, 30, 42, .4);
    }
`

const Button = styled.button`
  width: 100%;
  background: ${props => props.theme.colors.white};
  border: .01em solid ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.black};
  transition: all .2s ease-in;
  box-shadow: 0px 0px 4px 0px rgba(30, 30, 42, .4);
  max-width: 12em;
  height: 3em;
  align-self: end;
  border-radius: .2rem;

  &:hover {
    background: ${props => props.theme.colors.highlight};
    transition: all .2s ease-in;
    transform: scale(1.05);
    cursor: pointer;
    color: ${props => props.theme.colors.white};
  }

`



const CustomButton = props => {

    return <Button>{props.label}</Button>
}


export default CustomButton
