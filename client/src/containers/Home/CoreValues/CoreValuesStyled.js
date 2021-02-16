import styled from 'styled-components';
import CoreValueBGImage from '../../../assets/bg-core-values.jpg';

export const CoreValesContainer = styled.div`
  display: flex;
`;

export const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 18px;
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1.6;
  color: ${props => props.theme.midLightGray};
  background-image: url(${CoreValueBGImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.div`
  padding: 20px 0;
  font-size: 22px;
  font-weight: bold;
`;

export const ButtonStyled = styled.button`
  margin: 20px 70px 20px 0;
  padding: 14px 40px;
  align-items: center;
  text-decoration: none;
  border-radius: 3px;
  font-size: 12px;
  letter-spacing: 1px;
  border: 1px solid gray;
  color: ${props => props.theme.midLightGray};
  background-color: transparent;
  :hover {
    color: white;
    transition: color 0.5s;
    border: 1px solid white;
    transition: border 0.5s;
  }
`;

export const RightPart = styled.div`
  display: flex;
  width: 75%;
  color: orange;
`;
