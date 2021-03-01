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
import { THERAPY_PORTAL, BLANK } from '../../constants/url';
import { getInfo } from '../../redux/actions/infoActions';
import Loading from '../../components/Loading/Loading';
import { useOnClickOutside } from '../../hooks/clickOutSide';

const alt = 'logo';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  const dispatch = useDispatch();
  const allInfo = useSelector(state => state.info);
  const { info, loading } = allInfo;
  const navbarData = info.filter(item => item.section === 'navbar');

  useEffect(() => {
    dispatch(getInfo());
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
              {navbarData.map(({ title, url }) => (
                <StyledLink exact key={title} to={url}>
                  {title.toUpperCase()}
                </StyledLink>
              ))}
            </NavLinks>
          </NavLinkContainer>
          <SendRequestContainer open={open}>
            <SendRequestButton target={BLANK} href={THERAPY_PORTAL}>
              Send Request
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
