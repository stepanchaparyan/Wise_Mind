import React from 'react';
import { Container, Module, SmallText, TitleText, LinkStyled, LongText } from './HomeStyled';
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
          <SmallText>Mental health Services</SmallText>
          <TitleText>Wise_Mind</TitleText>
          <LongText>
            Your solution to having more effective/productive mental fortitude for tomorrow.
          </LongText>
        </Module>
      </Container>

      <Module>
        <SmallText>{'welcome'}</SmallText>
        <LinkStyled onClick={handleOnClick} target="_blank">
          {'href GO to Google'}
        </LinkStyled>
      </Module>
    </>
  );
};

export default Home;
