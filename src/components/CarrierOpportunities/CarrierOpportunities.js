import React from 'react';
import { Container, Module, WelcomeText, LongText, LinkStyled } from './CarrierOpportunitiesStyled';
import { LINK } from '../../constants';

const CarrierOpportunities = () => {
  return (
    <>
      <Container>
        <Module>
          <WelcomeText>{'CarrierOpportunities'}</WelcomeText>
          <LongText>{'CarrierOpportunities'}</LongText>
          <LinkStyled to={LINK.TO.HOME}>{'GO HOME'}</LinkStyled>
        </Module>
      </Container>

      <Module>
        <WelcomeText>{'welcome'}</WelcomeText>
        <LongText>{'Wise_Mind'}</LongText>
        <LinkStyled to={LINK.TO.HOME}>{'GO HOME'}</LinkStyled>
      </Module>
      <Module>
        <WelcomeText>{'welcome'}</WelcomeText>
        <LongText>{'Wise_Mind'}</LongText>
        <LinkStyled to={LINK.TO.HOME}>{'GO HOME'}</LinkStyled>
      </Module>
    </>
  );
};

export default CarrierOpportunities;
