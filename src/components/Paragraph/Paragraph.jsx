import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ParagraphStyles = styled.p`
    line-height: 1.5;
    font-family: 'Karla', sans-serif;
    color: var(--color-white);
`;

function Paragraph(props) {
  return <ParagraphStyles>{props.paragraph}</ParagraphStyles>
}
Paragraph.propTypes = {
  paragraph: PropTypes.string
}
export default Paragraph
