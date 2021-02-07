import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, NavLinks, LinkStyled, UserName, Hamburger } from './NavbarStyled';
import logo from '../../assets/logo.png';
import hamburger from '../../assets/hamburger.png';
import { LINK } from '../../constants';
// import { useOnClickOutside } from '../../hooks/clickOutSide';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const alt = 'logo';
  const node = useRef();

  // useOnClickOutside(node, () => setOpen(false));

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Container ref={node}>
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
