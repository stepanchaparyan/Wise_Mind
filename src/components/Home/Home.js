import React from 'react';
import { Container, Module, WelcomeText, LongText, LinkStyled } from './HomeStyled';
import { LINK } from '../../constants';

const Welcome = () => {
  return (
    <Container>
      <Module>
        <WelcomeText>{'welcome'}</WelcomeText>
        <LongText>{'Wise_Mind'}</LongText>
        <LinkStyled to={LINK.TO.HOME}>{'GO HOME'}</LinkStyled>
      </Module>
    </Container>
  );
};

export default Welcome;
