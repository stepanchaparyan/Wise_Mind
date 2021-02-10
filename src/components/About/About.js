import React from 'react';
import { Container, Module, WelcomeText, LongText, LinkStyled } from './AboutStyled';
import { LINK } from '../../constants';

const About = () => {
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

export default About;
