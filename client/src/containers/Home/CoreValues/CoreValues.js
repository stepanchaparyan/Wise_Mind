import React from 'react';
import PropTypes from 'prop-types';
import {
  CoreValesContainer,
  LeftPart,
  RightPart,
  ButtonStyled,
  Title,
  ThreePictures,
  WhoWeAre,
  Container,
  Image,
  TitleText,
  MainText,
  WhoWeAreTitleText,
  WhoWeAreMainText,
  Overlay,
  Dots
} from './CoreValuesStyled';
import Button from '../../../components/Button/Button';
import theme from '../../../styles/theme';
import { LINK } from '../../../constants';
import Core_Values_1 from '../../../assets/core_values_1.jpg';
import Core_Values_2 from '../../../assets/core_values_2.jpg';
import Core_Values_3 from '../../../assets/core_values_3.jpg';

const { navGreen, lightBlack, white } = theme;

const CoreValues = ({ textsList }) => {
  const { texts, loading, error } = textsList;

  const coreValueMain = texts.find(text => text.section === 'coreValuesMain');
  const whoWeAre = texts.find(text => text.section === 'whoWeAre');
  const coreValues = texts.filter(text => text.section === 'coreValues');
  const imgList = [Core_Values_1, Core_Values_2, Core_Values_3]; // TODO will be removed
  const alt = 'image';

  return (
    <CoreValesContainer>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <LeftPart>
            <Title>{coreValueMain?.title}</Title>
            <div>{coreValueMain?.text}</div>
            <ButtonStyled>Read More</ButtonStyled>
          </LeftPart>
          <RightPart>
            <ThreePictures>
              {coreValues.map((text, i) => (
                <Container key={text?.title}>
                  <Overlay>
                    <Dots>TODO</Dots>
                    <Image src={imgList[i]} alt={alt}></Image>
                  </Overlay>
                  <TitleText>{text?.title}</TitleText>
                  <MainText>{text?.text}</MainText>
                </Container>
              ))}
            </ThreePictures>
            <WhoWeAre>
              <WhoWeAreTitleText>{whoWeAre?.title}</WhoWeAreTitleText>
              <WhoWeAreMainText>{whoWeAre?.text}</WhoWeAreMainText>
              <Button
                text="About Us"
                textcolor={white}
                texthovercolor={white}
                backgroundcolor={navGreen}
                backgroundhovercolor={lightBlack}
                to={LINK.TO.ABOUT_US}
              />
            </WhoWeAre>
          </RightPart>
        </>
      )}
    </CoreValesContainer>
  );
};

CoreValues.propTypes = {
  textsList: PropTypes.shape({
    texts: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
        section: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired
      })
    ).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.any
  }).isRequired
};

export default CoreValues;
