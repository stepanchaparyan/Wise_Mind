import React, { useState, useEffect } from 'react';
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
  PaperPlaneIcon
} from './NavbarStyled';
import logo from '../../assets/logo.png';
import { LINK } from '../../constants';
import { getInfo } from '../../redux/actions/infoActions';
import Loading from '../../components/Loading/Loading';

const alt = 'logo';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

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

  return (
    <>
      {!loading && (
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
          </NavLinkContainer>
          <SendRequestContainer>
            <SendRequestButton to={LINK.TO.CONTACT_US}>
              Send Request
              <PaperPlaneIcon />
            </SendRequestButton>
          </SendRequestContainer>
        </Container>
      )}
    </>
  );
};

export default Navbar;
