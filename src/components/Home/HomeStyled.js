import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { tabletUp } from '../../styles/mediaQueries/mixins';
import MainImage from '../../assets/bg.jpg';

export const Container = styled.div`
  background-image: url(${MainImage});
  width: 100%;
`;

export const Module = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const WelcomeText = styled.div`
  font-size: 30px;
  padding: 32px 32px 0 32px;
  height: 110px;
  ::after {
    content: '';
    width: 0px;
    height: 5px;
    display: inline-block;
    background: ${props => props.theme.cadetblue};
    transition: 500ms;
  }
  :hover::after {
    width: 100%;
  }
  ${tabletUp`
    font-size: 50px;
  `};
`;

export const LongText = styled.div`
  font-size: 20px;
  padding: 12px;
`;

export const LinkStyled = styled(Link)`
  color: ${props => props.theme.cadetblue};
  margin: 32px;
  text-decoration: none;
  font-size: 26px;
  ${tabletUp`
    font-size: 32px;
  `};
`;
