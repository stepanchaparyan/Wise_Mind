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
  height: 60px;
  width: 100%;
  background: ${({ visible }) =>
    visible ? 'slategray' : 'repeating-linear-gradient(180deg, black, transparent 100px)'};
  opacity: 0.9;
  text-align: center;
  transition: background 0.5s;
  z-index: 1;
`;

export const LogoContainer = styled(NavLink)`
  margin: 0;
  padding: 0;
  padding-left: 16px;
  ${tabletUp`
    padding-left: 100px;
  `};
`;

export const Logo = styled.img`
  width: 50px;
`;

export const NavLinks = styled.div`
  display: flex;
  margin-left: 250px;
  font-family: sans-serif;
  font-size: 14px;
  letter-spacing: 0.4px;
  margin: auto;
  align-items: center;
  flex-direction: column;
  ${tabletUp`
    flex-direction: row;
  `};
`;

const activeClassName = 'active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  display: flex;
  text-decoration: none;
  color: ghostwhite;
  margin: 10px 20px;
  font-weight: bold;
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
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  background: ${props => props.theme.black};
  color: white;
  position: absolute;
  top: 56px;
  width: 100%;
  height: 300px;
  z-index: 1;
  ${tabletUp`
    display: flex;
    background: none;
    position: relative;
    top: 0;
  `};
`;

export const SendRequestContainer = styled.div`
  font-weight: bold;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  background: ${props => props.theme.black};
  z-index: 1;
  position: absolute;
  top: 70px;
  right: 10px;
  ${tabletUp`
    display: flex;
    position: relative;
    background: none;
    padding-right: 30px;
    top: 2px;
  `};
`;

export const SendRequestButton = styled.a`
  display: flex;
  padding: 10px;
  border: solid 1px white;
  background: transparent;
  text-align: center;
  color: white;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
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

export const Hamburger = styled.img`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 32px;
  height: 32px;
  right: 14px;
  top: 14px;
  ${tabletUp`
    display: none;
  `};
`;
