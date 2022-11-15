import React from 'react'
import styled from 'styled-components'
import Button from './Buttons/Button';
import Paragraph from './Paragraph/Paragraph';
import Title from './Titles/Title'
import HeroImages from '../assets/bg-pattern-intro-right-desktop.svg'
import BgImages from '../assets/image-intro-desktop.jpg'
import HeroImagesLeft from '../assets/bg-pattern-intro-left-desktop.svg'


const HeroStyles = styled.div`
  position: relative;
  width: 100%;
  max-height: 630px;
  background-color: var(--background-hero);
  .container__hero{
    max-width: 1200px;
    margin: 0px auto;
    .row__hero{
      display: flex;
      justify-content: space-between;
      align-items : center;
      .titleText{
        width: 500px;
        position: relative;
        button{
          background: unset;
          color:var(--color-white);
          border: 2px solid var(--color-white);
          margin-top: 30px;
        }
        button:hover{
          background-color: var(--color-white);
          color: var(--background-hero);
        }
      }
      .img__hero{
        width: 500px;
        margin-top: 150px;
        height: 600px;
        background-image: url(${BgImages});
        background-repeat: no-repeat;
        background-size: cover;
      }
      .titleText::before{
        content: ' ';
        display: block;
        width: 300px;
        position: absolute;
        top: -85px;
        border: 1px solid var(--color-white);
      }
    }
  }
  &::after{
    content: '';
    position: absolute;
    top: 5%;
    right: 0;
    width: 500px;
    background-repeat: no-repeat;
    height: 550px;
    background-position: right;
    background-position-y: -50px;
    background-image: url(${HeroImages});
  }
  &::before{
    content: '';
    position: absolute;
    width: 300px;
    top: 50%;
    height: 500px;
    background-image: url(${HeroImagesLeft});
    background-repeat: no-repeat;
    background-size: calc(100% - 20%);
  }
@media screen and (max-width:570px){
  width: 100%;
  min-height: 130vh;
  padding: 100px 10px;
  .container__hero{
    width: 100%;
    .row__hero{
      flex-direction: column-reverse;
      .titleText{
        width: 100%;
        margin: 20px 0px;
        text-align: center;
        h1{
          font-size: 40px;
        }
      }
      .titleText::before{
        display: none;
      }
      .img__hero{
        margin-top: 0px;
        width: 100%;
        height: 500px;
        border: 1px solid;
        background-size: cover;
      }
    }
  }
  &::before{
    display: none;
  }
  &::after{
    display: none;
  }
}
@media  screen and  (max-width:1024px){
  padding : 0px 10px;
}
@media screen and (max-width:768px) {
  padding: 0px 10px;
  .container__hero{
    width: 100%;

  }
  &::before{
    left: 0;
    background-position-x: -70px;
  }
  &::after{
    background-position-x: 100px;
  }
}


@media screen and (max-width:414px) {
  width: 100%;
  min-height: 135vh;
}
@media screen and (max-width:395px) {
  width: 100%;
  min-height: 110vh;
}
@media screen and (max-width:390px) {
  width: 100%;
  min-height: 110vh;
}
@media screen and (max-width:375px) {
  width: 100%;
  min-height: 135vh;
}
@media screen and (max-width:320px) {
  width: 100%;
  min-height: 170vh;
}
`;

function Hero() {
  return (
    <HeroStyles>
      <div className="container__hero">
        <div className="row__hero">
          <div className="titleText">
            <Title title="Your Insurance" />
            <Title title="Humanizing." />
            <Paragraph paragraph="Get your safe insurance coverage easier and faster. We blend our expertise
            and technology to help you find the plan that’s right for you. Ensure you
            and your loved ones are protected." />
            <Button buttonText="views plans" />
          </div>
          <div className="img__hero">
          </div>
        </div>
      </div>
    </HeroStyles>
  )
}

export default Hero
