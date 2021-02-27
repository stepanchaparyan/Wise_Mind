import styled from 'styled-components';
import { desktopUp } from '../../../styles/mediaQueries/mixins';

export const EmployeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0;
`;

export const Employee = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  ${desktopUp`
    flex-direction: row;
  `};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.veryDarkGray};
  background: ${props => props.color};
  font-size: 14px;
  letter-spacing: 1.4px;
  line-height: 0.9;
  flex-direction: column;
  margin: 16px;
  padding: 24px;
`;

export const TitleText = styled.div`
  display: flex;
  padding: 20px 0;
  margin: auto;
  font-size: 48px;
  font-family: serif;
  letter-spacing: 1.4px;
  text-align: center;
  color: ${props => props.theme.midLightBlack};
  :hover {
    color: ${props => props.theme.black};
  }
`;

export const NameText = styled.div`
  display: flex;
  margin: auto;
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.black};
`;

export const MainText = styled.div`
  display: flex;
  padding: 4px 24px 24px 24px;
`;

export const Overlay = styled.div`
  max-width: 100%;
  height: auto;
  position: relative;
  cursor: pointer;
  margin-bottom: 24px;
  :after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: all 0.5s;
  }
  :hover:after {
    opacity: 0.8;
  }
`;

export const Image = styled.img`
  width: 264px;
  height: auto;
`;
