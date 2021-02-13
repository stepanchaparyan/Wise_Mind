import React, { useState, useEffect } from 'react';
import {
  Container,
  LogoContainer,
  Logo,
  NavLinks,
  StyledLink,
  Dots,
  Dot,
  DotsRoutesContainer,
  DotsRoutes,
  SendRequestButton,
  NavLinkContainer,
  SendRequestContainer,
  PaperPlaneIcon
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
      <LogoContainer to={LINK.TO.HOME}>
        <Logo src={logo} alt={alt} />
      </LogoContainer>
      <NavLinkContainer>
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
          </DotsRoutesContainer>
        </Dots>
      </NavLinkContainer>
      <SendRequestContainer>
        <SendRequestButton to={LINK.TO.CONTACT_US}>
          Send Request
          <PaperPlaneIcon />
        </SendRequestButton>
      </SendRequestContainer>
    </Container>
  );
};

export default Navbar;
