import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { tabletUp } from '../../styles/mediaQueries/mixins';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  position: fixed;
  height: 60px;
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

export const UserName = styled.div`
  font-weight: 200;
  margin-top: 8px;
  ${tabletUp`
    margin-top: 0;
  `};
`;

export const NavLinks = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  padding: 10px;
  background: ${props => props.theme.lightGray};
  position: absolute;
  right: 0px;
  top: 56px;
  height: 120px;
  z-index: 1;
  ${tabletUp`
    display: flex;
    flex-direction: row;
    padding: 0;
    background: none;
    position: relative;
    top: 0;
    height: 0;
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

export const LinkStyled = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
  margin: 10px 20px;
  align-self: center;
  ${tabletUp`
    margin: 0 16px 0 0;
    align-self: auto;
  `};
`;
