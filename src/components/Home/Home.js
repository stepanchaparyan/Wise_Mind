import React from 'react';
import { Container, Module, WelcomeText, LongText, LinkStyled } from './HomeStyled';
import { LINK } from '../../constants';

const Home = () => {
  function handleOnClick(e) {
    e.preventDefault();
    const newURL = 'http://google.com';
    window.open(newURL, '_blank');
  }

  return (
    <>
      <Container>
        <Module>
          <WelcomeText>{'welcome'}</WelcomeText>
          <LongText>{'Wise_Mind'}</LongText>
          <LinkStyled to={LINK.TO.HOME}>{'GO HOME'}</LinkStyled>
        </Module>
      </Container>

      <Module>
        <WelcomeText>{'welcome'}</WelcomeText>
        <LongText>{'Wise_Mind'}</LongText>
        <LinkStyled onClick={handleOnClick} target="_blank">
          {'href GO to Google'}
        </LinkStyled>
      </Module>
    </>
  );
};

export default Home;
