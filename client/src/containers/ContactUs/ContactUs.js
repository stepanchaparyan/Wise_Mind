import React from 'react';
import { Container, Module, WelcomeText, LongText, LinkStyled } from './ContactUsStyled';
import { LINK } from '../../constants';

const ContactUs = () => {
  return (
    <>
      <Container>
        <Module>
          <WelcomeText>{'ContactUs'}</WelcomeText>
          <LongText>{'ContactUs'}</LongText>
          <LinkStyled to={LINK.TO.HOME}>{'GO HOME'}</LinkStyled>
        </Module>
      </Container>
    </>
  );
};

export default ContactUs;
