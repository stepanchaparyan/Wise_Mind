import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { tabletUp } from '../../styles/mediaQueries/mixins';
import MainImage from '../../assets/bg.jpg';

export const Container = styled.div`
  background-image: url(${MainImage});
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Module = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const SmallText = styled.div`
  margin-top: 170px;
  padding: 16px 0px;
  font-family: 'Montserrat';
  color: ${props => props.theme.white};
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const TitleText = styled.div`
  font-family: 'Montserrat';
  color: ${props => props.theme.white};
  font-size: 55px;
  line-height: 1.2;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
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

export const LongText = styled.div`
  color: ${props => props.theme.white};
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 2px;
  margin-top: 16px;
`;
