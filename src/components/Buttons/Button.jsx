import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonStyles = styled.button`
  padding: 12px 20px;
  outline: none;
  border: 2px solid var(--background-hero);
  cursor: pointer;
  font-family: 'Karla', sans-serif;
  color: var(--background-hero);
  transition: 0.5s;
  letter-spacing: 1px;
  text-transform: uppercase;
  background-color: var(--color-white);
  &:hover{
    background-color: var(--background-hero);
    color: var(--color-white);
  }
`;

function Button(props) {
  return <ButtonStyles type='button'>{props.buttonText}</ButtonStyles>
}
Button.propTypes = {
  buttonText: PropTypes.string,
}
export default Button
