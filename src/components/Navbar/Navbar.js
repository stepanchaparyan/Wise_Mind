import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, NavLinks, LinkStyled, UserName, Hamburger } from './NavbarStyled';
import logo from '../../assets/logo.png';
import hamburger from '../../assets/hamburger.png';
import { LINK } from '../../constants';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const alt = 'logo';

  const toggle = () => {
    setOpen(!open);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(currentScrollPos > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container visible={visible}>
      <Link to={LINK.TO.HOME}>
        <Logo src={logo} alt={alt} />
      </Link>
      <NavLinks open={open}>
        <LinkStyled to={LINK.TO.HOME}>
          <UserName>{'Books'}</UserName>
        </LinkStyled>
      </NavLinks>
      <Hamburger src={hamburger} onClick={toggle}></Hamburger>
    </Container>
  );
};

export default Navbar;
