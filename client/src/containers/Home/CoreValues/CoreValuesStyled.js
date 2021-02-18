import styled from 'styled-components';
import CoreValueBGImage from '../../../assets/bg-core-values.jpg';
// import Core_Values_1 from '../../../assets/core_values_1.jpg';

export const CoreValesContainer = styled.div`
  display: flex;
`;

export const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;
  padding: 24px;
  font-size: 14px;
  letter-spacing: 1.4px;
  line-height: 1.8;
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
  transition: color 0.5s;
  :hover {
    color: white;
    border: 1px solid white;
    transition: border 0.5s;
  }
`;

export const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 77%;
`;

export const ThreePictures = styled.div`
  display: flex;
  color: green;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  display: flex;
  width: 33%;
  flex-direction: column;
  color: ${props => props.theme.veryDarkGray};
  font-size: 14px;
  letter-spacing: 1.4px;
  line-height: 1.8;
`;

// export const Image = styled.div`
//   background-image: url(${Core_Values_1});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   max-width: 100%;
//   height: 300px;
// `;

export const Image = styled.img`
  max-width: 100%;
  height: 300px;
`;

export const TitleText = styled.div`
  display: flex;
  padding: 24px 24px 4px 24px;
  font-weight: bold;
  font-size: 18px;
  color: ${props => props.theme.midLightBlack};
  :hover {
    color: ${props => props.theme.lightBlue};
  }
`;

export const MainText = styled.div`
  display: flex;
  padding: 4px 24px 24px 24px;
`;

export const WhoWeAre = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.lightGray};
  align-items: center;
  color: ${props => props.theme.midLightBlack};
  align-self: center;
`;

export const WhoWeAreTitleText = styled.div`
  display: flex;
  padding: 24px 24px 4px 24px;
  font-size: 48px;
  letter-spacing: 1.8px;
  transition: color 0.5s;
  :hover {
    color: ${props => props.theme.lightBlue};
  }
`;

export const WhoWeAreMainText = styled.div`
  display: flex;
  padding: 4px 24px 24px 24px;
  color: ${props => props.theme.veryDarkGray};
  font-size: 14px;
  letter-spacing: 1.4px;
  line-height: 1.8;
`;
