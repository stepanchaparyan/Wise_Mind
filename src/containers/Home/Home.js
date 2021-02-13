import React from 'react';
import Button from '../../components/Button/Button';
import { Container, Module, SmallText, TitleText, ButtonsContainer, LongText } from './HomeStyled';
import { LINK } from '../../constants';
import theme from '../../styles/theme';

const { lightBlue, lightBlack, white } = theme;

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
          <ButtonsContainer>
            <Button
              text="About Us"
              textcolor={white}
              texthovercolor={white}
              backgroundcolor={lightBlue}
              backgroundhovercolor={lightBlack}
              to={LINK.CONTACT_US}
            />
            <Button
              text="About Us"
              backgroundcolor="transparent"
              backgroundhovercolor={white}
              withborder
              to={LINK.CONTACT_US}
            />
          </ButtonsContainer>
        </Module>
      </Container>
      <div onClick={handleOnClick} target="_blank">
        Test
      </div>
    </>
  );
};

export default Home;
