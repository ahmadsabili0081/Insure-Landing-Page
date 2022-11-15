import Logo from '../Logo';
import HeaderStyles from './Header.module.css'
import { Link } from 'react-scroll';
import Button from '../Buttons/Button';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

let Header = () => {
  const [scrollNav, setScroll] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setMobile(window.matchMedia("(max-width:768px)").matches)
    })
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 10);
    })
  }, []);
  let handleHamburger = () => {
    setNav(true);
    if (nav) {
      setNav(false);
    }
  }
  return (
    <header className={classNames(HeaderStyles.header, { [HeaderStyles.headerSticky]: scrollNav })}>
      <div className={HeaderStyles.container__header}>
        <Logo />
        <div onClick={handleHamburger} className={classNames(HeaderStyles.hamburger, { [HeaderStyles.hamburgerStyle]: nav })}>
          <div className={HeaderStyles.span}></div>
          <div className={HeaderStyles.span}></div>
          <div className={HeaderStyles.span}></div>
        </div>
        <nav className={classNames(HeaderStyles.navbar, { [HeaderStyles.navbarMobile]: nav })}>
          <ul>
            <li><Link to='Home'>HOW WE WORK</Link></li>
            <li><Link to='BLOG'>BLOG</Link></li>
            <li><Link to='ACCOUNT'>ACCOUNT</Link></li>
            <Button buttonText="View Plans" />
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header