import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { tabletUp } from '../../styles/mediaQueries/mixins';

export const Container = styled.div`
  display: flex;
  padding: 0 24px;
  align-items: center;
  position: fixed;
  height: 80px;
  width: 100%;
  background: ${({ visible }) => (visible ? 'gray' : 'transparent')};
  opacity: 0.9;
  text-align: center;
  transition: background 0.5s;
`;

export const Logo = styled.img`
  width: 260px;
  height: 20px;
  padding-top: 2px;
  ${tabletUp`
    width: 290px;
    height: 23px;
    padding: 0;
  `};
`;

export const NavLinks = styled.div`
  ${'' /* display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  padding: 10px;
  background: ${props => props.theme.lightGray};
  position: absolute;
  right: 0px;
  top: 56px;
  height: 120px;
  z-index: 1; */}
  ${tabletUp`
    display: flex;
    flex-direction: row;
    ${'' /* background: none;
    position: relative;
    padding: 0;
    top: 0;
    height: 0; */}
    margin-left: 140px;
    font-family: sans-serif;
    font-size: 14px;
    letter-spacing: 0.4px;
  `};
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

export const Dots = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
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
  color: white;
  text-align: center;
`;
