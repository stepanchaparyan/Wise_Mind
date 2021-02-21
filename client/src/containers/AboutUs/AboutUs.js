import React from 'react';
import { Container, Module, WelcomeText, LongText, LinkStyled } from './AboutUsStyled';
import { LINK } from '../../constants';

const AboutUs = () => {
  return (
    <>
      <Container>
        <Module>
          <WelcomeText>{'AboutUs'}</WelcomeText>
          <LongText>{'AboutUs'}</LongText>
          <LinkStyled to={LINK.TO.HOME}>{'GO HOME'}</LinkStyled>
        </Module>
      </Container>
    </>
  );
};

export default AboutUs;
