import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Texts,
  SmallText,
  TitleText,
  ButtonsContainer,
  ButtonStyled,
  MailIcon
} from './ContactUsStyled';

const ContactUs = ({ texts }) => {
  return (
    <Container>
      <Texts>
        <TitleText>{texts?.title}</TitleText>
        <SmallText>{texts?.text}</SmallText>
      </Texts>
      <ButtonsContainer>
        <ButtonStyled>
          <MailIcon />
          MAKE REQUEST
        </ButtonStyled>
      </ButtonsContainer>
    </Container>
  );
};

ContactUs.propTypes = {
  texts: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    section: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })
};

export default ContactUs;
