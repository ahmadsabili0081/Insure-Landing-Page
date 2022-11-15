import styled from "styled-components"
import { Link } from 'react-scroll';
import Logo from "./Logo";
import IconFacebook from '../assets/icon-facebook.svg'
import IconTwitter from '../assets/icon-twitter.svg'
import IconPinterest from '../assets/icon-pinterest.svg'
import IconInstagram from '../assets/icon-instagram.svg'
import BgFooter from '../assets/bg-pattern-footer-desktop.svg'


const FooterStyles = styled.footer`
  padding: 50px 0px;
  position: relative;
  background-color: var(--bg-footer);
  background-image: url(${BgFooter});
  background-repeat: no-repeat;
  background-size: calc(100% - 50%);
  background-position-x: -50px;
  .container__footer{
    max-width: 1200px;
    margin: 0px auto;
    .row__footer{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      .footer__icon{
        padding: 20px 0px;
        border-bottom: 1px solid;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon__sosmed{
          width: 200px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          img{
            width: 20px;
            height: 20px;
          }
        }
      }
      .list__link__footer{
        margin-top: 40px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        .marginTop__footer{
          margin: 30px  0px;
          color: var(--color-light-gray);
        }
      }
    }
  }
@media screen and (max-width:1024px) {
  padding: 50px 10px;
  .container__footer{
    width: 100%;
  }
}
@media screen and (max-width:768px){
  padding: 50px 10px;
  .container__footer{
    width: 100%;
  }
}
@media screen and (max-width:570px) {
    padding: 50px 10px;
    .container__footer{
      width: 100%;
      .row__footer{
        .footer__icon{
          width: 100%;
        }
        .list__link__footer{
          flex-direction: column;
          text-align: center;
        }
      }
    }
}
`;

let Footer = () => {
  return (
    <FooterStyles>
      <div className="container__footer">
        <div className="row__footer">
          <div className="footer__icon">
            <Logo />
            <div className="icon__sosmed">
              <li><Link to='facebook'><img src={IconFacebook} alt="icon" /></Link></li>
              <li><Link to='twitter'><img src={IconTwitter} alt="icon" /></Link></li>
              <li><Link to="Pinterest"><img src={IconPinterest} alt="icon" /></Link></li>
              <li><Link to="Instagram"><img src={IconInstagram} alt="icon" /></Link></li>
            </div>
          </div>
          <div className="list__link__footer">
            <div className="link__footer">
              <li className="marginTop__footer"><Link to="OUR COMPANY">OUR COMPANY</Link></li>
              <li><Link to="HOW WE WORK">HOW WE WORK</Link></li>
              <li><Link to="WHY INSURE?">WHY INSURE?</Link></li>
              <li><Link to="VIEW PLANS">VIEW PLANS</Link></li>
              <li><Link to="REVIEWS">REVIEWS</Link></li>
            </div>
            <div className="link__footer">
              <li className="marginTop__footer"><Link to="HELP">HELP ME</Link></li>
              <li><Link to="FAQ">FAQ</Link></li>
              <li><Link to="TERMS OF USE">TERMS OF USE</Link></li>
              <li><Link to="PRIVACY POLICY">PRIVACY POLICY</Link></li>
              <li><Link to="COOKIES">COOKIES</Link></li>
            </div>
            <div className="link__footer">
              <li className="marginTop__footer"><Link to="CONTACT">CONTACT</Link></li>
              <li><Link to="SALES">SALES</Link></li>
              <li><Link to="SUPPORT">SUPPORT</Link></li>
              <li><Link to="LIVE CHAT">LIVE CHAT</Link></li>
            </div>
            <div className="link__footer">
              <li className="marginTop__footer"><Link to="OTHERS">OTHERS</Link></li>
              <li><Link to="CAREERS">CAREERS</Link></li>
              <li><Link to="PRESS">PRESS</Link></li>
              <li><Link to="LICENSES">LICENSES</Link></li>
            </div>
          </div>
        </div>
      </div>
    </FooterStyles>
  )
}
export default Footer