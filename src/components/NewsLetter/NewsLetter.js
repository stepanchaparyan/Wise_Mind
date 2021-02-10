import React from 'react';
import { Container, Module, WelcomeText, LongText, LinkStyled } from './NewsLetterStyled';
import { LINK } from '../../constants';

const NewsLetter = () => {
  return (
    <>
      <Container>
        <Module>
          <WelcomeText>{'NewsLetter'}</WelcomeText>
          <LongText>{'NewsLetter'}</LongText>
          <LinkStyled to={LINK.TO.HOME}>{'GO HOME'}</LinkStyled>
        </Module>
      </Container>
    </>
  );
};

export default NewsLetter;
