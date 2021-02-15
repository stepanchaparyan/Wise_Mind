import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { tabletUp } from '../../styles/mediaQueries/mixins';
import PaperPlaneWhite from '../../assets/paper-plane-16_white.png';
import PaperPlaneGray from '../../assets/paper-plane-16_gray.png';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 80px;
  width: 100%;
  background: ${({ visible }) => (visible ? 'gray' : 'transparent')};
  opacity: 0.9;
  text-align: center;
  transition: background 0.5s;
`;

export const LogoContainer = styled(NavLink)`
  margin: 0;
  padding: 0;
  padding-left: 100px;
`;

export const Logo = styled.img`
  width: 60px;
`;

export const NavLinks = styled.div`
  display: flex;
  margin-left: 250px;
  font-family: sans-serif;
  font-size: 14px;
  letter-spacing: 0.4px;
  margin: auto;
`;

export const Hamburger = styled.img`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 32px;
  height: 32px;
  right: 12px;
  top: 12px;
  ${tabletUp`
    display: none;
  `};
`;

const activeClassName = 'active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  display: flex;
  text-decoration: none;
  color: white;
  margin: 10px 20px;
  ${tabletUp`
    margin: 0 20px;
    align-self: auto;
  `};
  &.${activeClassName} {
    color: ${props => props.theme.navGreen};
    font-weight: bold;
  }
  :hover {
    color: ${props => props.theme.navGreen};
    transition: color 0.5s;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
`;

export const Dots = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  cursor: pointer;
  :hover > div {
    display: flex;
  }
  :hover > p {
    background-color: ${props => props.theme.navGreen};
  }
`;

export const Dot = styled.p`
  width: 4px;
  height: 4px;
  margin: 1px 0;
  border-radius: 50%;
  background-color: white;
`;

export const DotsRoutesContainer = styled.div`
  display: none;
  flex-direction: column;
  background-color: black;
  margin-left: -160px;
  width: 180px;
  height: 110px;
  position: absolute;
  top: 60px;
  padding: 8px 4px 4px;
  border-radius: 3%;
  :hover {
    display: flex;
  }
`;

export const DotsRoutes = styled.div`
  display: flex;
  margin: 6px 20px;
  color: gray;
  text-align: center;
  :hover {
    color: white;
  }
`;

export const SendRequestContainer = styled.div`
  padding-right: 70px;
`;

export const SendRequestButton = styled(NavLink)`
  display: flex;
  padding: 16px 34px;
  border: solid 1px white;
  background: transparent;
  text-align: center;
  color: white;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  :hover {
    background: white;
    color: gray;
  }
  :hover > div {
    background-image: url(${PaperPlaneGray});
  }
`;

export const PaperPlaneIcon = styled.div`
  width: 10px;
  height: 14px;
  padding: 2px 0 0 6px;
  margin-left: 10px;
  background-image: url(${PaperPlaneWhite});
`;
