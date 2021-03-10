import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  LogoContainer,
  Logo,
  NavLinks,
  StyledLink,
  SendRequestButton,
  NavLinkContainer,
  SendRequestContainer,
  PaperPlaneIcon,
  Hamburger
} from './NavbarStyled';
import logo from '../../assets/logo.png';
import hamburger from '../../assets/hamburger.png';
import { LINK } from '../../constants';
import { BLANK } from '../../constants/url';
import { getNavbar } from '../../redux/actions/navbarActions';
import Loading from '../../components/Loading/Loading';
import { useOnClickOutside } from '../../hooks/clickOutSide';

const alt = 'logo';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const node = useRef();
  const sendRequestText = 'Send Request';

  useOnClickOutside(node, () => setOpen(false));

  const dispatch = useDispatch();
  const { navbar, loading } = useSelector(state => state.navbar);
  const navbarMenus = navbar.filter(item => item.title !== sendRequestText);
  const sentRequest = navbar.find(item => item.title === sendRequestText);

  useEffect(() => {
    dispatch(getNavbar('en'));
  }, [dispatch]);

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

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {!loading && (
        <Container ref={node} visible={visible}>
          <LogoContainer to={LINK.TO.HOME}>
            <Logo src={logo} alt={alt} />
          </LogoContainer>
          <NavLinkContainer open={open}>
            <NavLinks>
              {navbarMenus.map(({ title, link }) => (
                <StyledLink exact key={title} to={link}>
                  {title.toUpperCase()}
                </StyledLink>
              ))}
            </NavLinks>
          </NavLinkContainer>
          <SendRequestContainer open={open}>
            <SendRequestButton target={BLANK} href={sentRequest?.link}>
              {sentRequest?.title}
              <PaperPlaneIcon />
            </SendRequestButton>
          </SendRequestContainer>
          <Hamburger src={hamburger} onClick={toggle}></Hamburger>
        </Container>
      )}
    </>
  );
};

export default Navbar;
