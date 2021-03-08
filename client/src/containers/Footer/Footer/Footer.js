import React from 'react';
import {
  Container,
  MainContainer,
  InfoContainer,
  Text,
  Address,
  AddressIcon,
  EmailContainer,
  EmailText,
  EmailSpan,
  MailIcon,
  Phone,
  PhoneIcon,
  PhoneText,
  LinksContainer,
  StyledLink,
  ArrowIcon,
  Arrow,
  NewsLetterContainer,
  NewsLetterText,
  BottomContainer,
  CompanyName,
  LogoContainer,
  ImageContainer,
  Logo,
  LogoText,
  TitleAndDate,
  SocialMedia,
  IconContainer,
  MediaIcon,
  Title,
  AllRightsReserved
} from './FooterStyled';
import { LINK } from '../../../constants';
import { BLANK, FACEBOOK_LINK, TWITTER_LINK, INSTAGRAM_LINK } from '../../../constants/url';
import logo from '../../../assets/logo.png';

const facebook = 'facebook';
const twitter = 'twitter';
const instagram = 'instagram';
const alt = 'logo';

const Footer = () => {
  const linksList = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/carrier_opportunities', text: 'Carrier Opportunities' },
    { to: '/client_resources', text: 'Client Resources' },
    { to: '/contact_us', text: 'Contact us' },
    { to: '/terms_conditions', text: 'Terms conditions' },
    { to: '/privacy_policy', text: 'Privacy policy' }
  ];

  return (
    <Container>
      <MainContainer>
        <InfoContainer>
          <LogoContainer>
            <ImageContainer to={LINK.TO.HOME}>
              <Logo src={logo} alt={alt} />
            </ImageContainer>
            <LogoText>WISE MIND</LogoText>
          </LogoContainer>
          <Text>
            Our mental health clinicians strive to be proficient in culture sensitive and
            evidence-based psychotherapy treatment tailored to our clients’ specific needs.
          </Text>
          <Address>
            <AddressIcon />
            Address: During this pandemic we mainly offer telehealth. Physical address will be
            available later. Please, contact us for more information.
          </Address>
          <Phone>
            <PhoneIcon />
            <PhoneText href="tel:+424-333-2933">Phone: +424-333-2933</PhoneText>
          </Phone>
          <EmailContainer>
            <EmailSpan>
              <MailIcon />
              Email:
            </EmailSpan>
            <EmailText href="mailto:wisemind2019@wisemindprocessinc.com">
              wisemind2019@wisemindprocessinc.com
            </EmailText>
          </EmailContainer>
        </InfoContainer>
        <LinksContainer>
          <Title>Links</Title>
          {linksList.map(({ to, text }) => (
            <Arrow key={text}>
              <ArrowIcon />
              <StyledLink to={to}>{text}</StyledLink>
            </Arrow>
          ))}
        </LinksContainer>
        <NewsLetterContainer>
          <Title>NewsLetter</Title>
          <NewsLetterText>
            Get the latest news regarding psychotherapy treatment and evidence-based methods with
            our most recent newsletter issue!
          </NewsLetterText>
        </NewsLetterContainer>
      </MainContainer>
      <BottomContainer>
        <TitleAndDate>
          <CompanyName>Wise Mind</CompanyName>
          <AllRightsReserved>{`© ${new Date().getFullYear()}. All rights reserved.`}</AllRightsReserved>
        </TitleAndDate>
        <SocialMedia>
          <IconContainer type={facebook} target={BLANK} href={FACEBOOK_LINK}>
            <MediaIcon type={facebook}></MediaIcon>
          </IconContainer>
          <IconContainer type={twitter} target={BLANK} href={TWITTER_LINK}>
            <MediaIcon type={twitter}></MediaIcon>
          </IconContainer>
          <IconContainer type={instagram} target={BLANK} href={INSTAGRAM_LINK}>
            <MediaIcon type={instagram}></MediaIcon>
          </IconContainer>
        </SocialMedia>
      </BottomContainer>
    </Container>
  );
};

export default Footer;
