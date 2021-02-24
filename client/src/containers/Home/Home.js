import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../../redux/actions/infoActions';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import { Container, Module, SmallText, TitleText, ButtonsContainer, LongText } from './HomeStyled';
import { LINK } from '../../constants';
import theme from '../../styles/theme';
import CoreValues from './CoreValues/CoreValues';

const { lightBlue, navGreen, lightBlack, white } = theme;
const alt = 'mainImg';

const Home = () => {
  function handleOnClick(e) {
    e.preventDefault();
    const newURL = 'http://google.com';
    window.open(newURL, '_blank');
  }

  const dispatch = useDispatch();
  const allInfo = useSelector(state => state.info);
  const { info, loading, error } = allInfo;

  useEffect(() => {
    dispatch(getInfo());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <Container alt={alt}>
            <Module>
              <SmallText>Mental health Services</SmallText>
              <TitleText>Wise Mind</TitleText>
              <ButtonsContainer>
                <Button
                  text="About Us"
                  textcolor={white}
                  texthovercolor={white}
                  backgroundcolor={lightBlue}
                  backgroundhovercolor={lightBlack}
                  to={LINK.TO.ABOUT_US}
                />
                <Button
                  text="Contact Us"
                  textcolor={white}
                  texthovercolor={white}
                  backgroundcolor={navGreen}
                  backgroundhovercolor={lightBlack}
                  borderColor={white}
                  to={LINK.TO.CONTACT_US}
                />
              </ButtonsContainer>
              <LongText>
                Your solution to having more effective/productive mental fortitude for tomorrow.
              </LongText>
            </Module>
          </Container>
          <div onClick={handleOnClick} target="_blank"></div>
          <CoreValues info={info}></CoreValues>
        </>
      )}
    </>
  );
};

export default Home;
