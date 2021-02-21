import styled from 'styled-components';
import MainImage from '../../assets/bg.jpg';

export const Container = styled.div`
  background-image: url(${MainImage});
  width: 100%;
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

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 64px;
`;

export const LongText = styled.div`
  color: ${props => props.theme.white};
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 2px;
  margin-top: 16px;
`;
