import React from 'react'
import styled from 'styled-components';
import LogoImages from '../assets/logo.svg';

const LogoStyles = styled.div`
  width: 100px;
`

function Logo() {
  return (
    <LogoStyles>
      <img src={LogoImages} alt='Logo insure' />
    </LogoStyles>
  )
}

export default Logo
