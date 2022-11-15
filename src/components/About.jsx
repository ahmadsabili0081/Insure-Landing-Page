import styled from "styled-components";
import Button from "./Buttons/Button";
import Title from "./Titles/Title";
import Bgabout from '../assets/bg-pattern-how-we-work-desktop.svg'

const AboutStyles = styled.div`
    padding: 100px 0px;
    position: relative;
    .container__about{
      max-width: 1200px;
      margin: 0px auto;
      .row__about{
        padding: 70px 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-image: url(${Bgabout});
        background-color: var(--background-hero);
        background-repeat: no-repeat;
        background-position: right;
        border-radius: 10px;
        .text__title__about{
          h1{
            line-height:0.8;
          }
        }
        button{
          background-color: var(--background-hero);
          color: var(--color-white);
          border: 2px solid var(--color-white);
        }
        button:hover{
         background-color: var(--color-white);
         color: var(--background-hero);
        }
      }
    }
@media screen and (max-width:1024px) {
  padding: 100px 10px;
  .container__about{
    width: 100%;
  }
}
@media screen and (max-width:768px) {
  padding: 100px 10px;
  .container__about{
    width: 100%;
    .row__about{
      background-position-x: 400px;
      padding: 50px;
    }
  }
}
@media screen and (max-width:570px) {
  padding: 50px 10px;
  .container__about{
    width: 100%;
    .row__about{
      flex-direction: column;
      padding: 30px 10px;
      .text__title__about{
        margin: 30px 0px;
        text-align: center;
        h1{
          font-size: 35px;
        }
      }
    }
  }
}
`;

let About = () => {
  return (
    <AboutStyles>
      <div className="container__about">
        <div className="row__about">
          <div className="text__title__about">
            <Title title="Find out more" />
            <Title title="about how we work" />
          </div>
          <Button buttonText="HOW WE WORK" />
        </div>
      </div>
    </AboutStyles>
  )

}
export default About;
