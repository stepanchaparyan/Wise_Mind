import React from 'react';
import { Container, Module, WelcomeText, LongText, LinkStyled } from './ContactUsStyled';
import { LINK } from '../../constants';

const ContactUs = () => {
  return (
    <>
      <Container>
        <Module>
          <WelcomeText>{'About'}</WelcomeText>
          <LongText>{'About'}</LongText>
          <LinkStyled to={LINK.TO.HOME}>{'GO HOME'}</LinkStyled>
        </Module>
      </Container>
    </>
  );
};

export default ContactUs;
