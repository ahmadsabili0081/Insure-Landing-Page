import styled from "styled-components";
import PropTypes from 'prop-types'
import Paragraph from "./Paragraph/Paragraph";

const BoxStyles = styled.div`
    width: 300px;

    img{
      width: 100px;
      height: 100px;
    }
    h2{
      margin: 20px 0px;
      font-family: 'DM Serif Display', serif;
    }
    p{
      color: var(--color-light-gray);
    }

@media screen and (max-width:570px){
  width: 100%;
  text-align: center;
  margin: 30px 0px;
}
`;

let Box = (props) => {
  console.log(props)
  return (
    props.Data.map((itemData, index) => {
      return (
        <BoxStyles key={index}>
          <img src={itemData.img} alt="icon" />
          <h2>{itemData.title}</h2>
          <Paragraph paragraph={itemData.paragraph} />
        </BoxStyles>
      )
    })
  );
}
Box.propTypes = {
  Data: PropTypes.array
}
export default Box;