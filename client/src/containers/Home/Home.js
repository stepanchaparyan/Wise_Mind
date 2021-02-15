import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getTexts } from '../../redux/actions/textsActions';
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

  const dispatch = useDispatch();

  const textsList = useSelector(state => state.texts);
  const { texts, loading, error } = textsList;

  useEffect(() => {
    dispatch(getTexts());
  }, [dispatch]);

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
        test
      </div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        texts.map(text => {
          return (
            <>
              <div>{text.title}</div>
              <div>{text.text}</div>
              <div>{text.category}</div>
            </>
          );
        })
      )}
    </>
  );
};

export default Home;
