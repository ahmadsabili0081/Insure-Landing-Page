import styled from 'styled-components';
import imagesnappy from '../assets/icon-snappy-process.svg'
import imagesPrices from '../assets/icon-affordable-prices.svg'
import imagesPeople from '../assets/icon-people-first.svg'
import Box from './Box';
import Title from './Titles/Title';
let Data = [
  {
    img: `${imagesnappy}`,
    title: 'Snappy Process',
    paragraph: "Our appacation process can be completed in minutes, not hours. Don’t get stuck filang in tedious forms."
  },
  {
    img: `${imagesPrices}`,
    title: 'Affordable Prices',
    paragraph: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
  },
  {
    img: `${imagesPeople}`,
    title: 'People First',
    paragraph: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it."
  },
];

const BoxStyles = styled.div`
  padding: 100px 0px;
  position: relative;
  .container__boxes{
    max-width: 1200px;
    margin: 0px auto;
    h1{
      color: #000;
      position: relative;
    }
    h1::before{
      content : '';
      width : 200px;
      position: absolute;
      top: -20px;
      border: 1px solid;
    }
    .row__boxes{
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
@media screen and (max-width:1024px){
  padding: 150px 10px;
  .container__boxes{
    width: 100%;
  }
}
@media screen and (max-width:768px){
  padding: 100px 10px;
  .container__boxes{
    width: 100%;
    margin-top: 40px;
  }
}
@media screen and (max-width:570px) {
  padding: 50px 10px;
  .container__boxes{
    text-align: center;
    h1{
      font-size: 40px;
      position: relative;
    }
    width: 100%;
    .row__boxes{
      flex-direction: column;
    }
  }
}
`;

let Boxes = () => {
  return (
    <BoxStyles>
      <div className="container__boxes">
        <Title title="We're different" />
        <div className="row__boxes">
          <Box Data={Data} />
        </div>
      </div>
    </BoxStyles>
  )
}

export default Boxes;
