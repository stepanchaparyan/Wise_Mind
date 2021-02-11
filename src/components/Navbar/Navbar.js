import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Logo,
  NavLinks,
  StyledLink,
  Dots,
  Dot,
  DotsRoutesContainer,
  DotsRoutes
} from './NavbarStyled';
import logo from '../../assets/logo.png';
import { LINK } from '../../constants';
import { navbarData } from './NavbarData';

const alt = 'logo';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 20) {
      setVisible(currentScrollPos > 10);
    }
  };

  return (
    <Container visible={visible}>
      <Link to={LINK.TO.HOME}>
        <Logo src={logo} alt={alt} />
      </Link>
      <NavLinks>
        {navbarData.map(({ title, url }) => (
          <StyledLink exact key={title} to={url}>
            {title.toUpperCase()}
          </StyledLink>
        ))}
      </NavLinks>
      <Dots>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
        <DotsRoutesContainer>
          <DotsRoutes>Contact Us</DotsRoutes>
          <DotsRoutes>Our Services</DotsRoutes>
          <DotsRoutes>Client Resources</DotsRoutes>
        </DotsRoutesContainer>
      </Dots>
    </Container>
  );
};

export default Navbar;
