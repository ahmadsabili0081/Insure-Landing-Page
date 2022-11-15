import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TitleStyles = styled.h1`
    font-family: 'DM Serif Display', serif;
    font-size: 60px;
    color: var(--color-white);
`;

function Title(props) {
  return <TitleStyles>{props.title}</TitleStyles>
}
Title.propTypes = {
  title: PropTypes.string,
}
export default Title
