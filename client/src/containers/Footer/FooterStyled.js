import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { tabletUp } from '../../styles/mediaQueries/mixins';
import FacebookMetal from '../../assets/facebook-metal.png';
import TwitterMetal from '../../assets/twitter-metal.png';
import InstagramMetal from '../../assets/instagram-metal.png';
import FacebookBlue from '../../assets/facebook-blue.png';
import TwitterBlue from '../../assets/twitter-blue.png';
import InstagramBlue from '../../assets/instagram-blue.png';
import MailIconPNG from '../../assets/email.png';
import PhoneIconPNG from '../../assets/mobile-phone.png';
import AddressIconPNG from '../../assets/pin.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.footerBlack};
  color: ${props => props.theme.footerTextColor};
  margin: 0;
  align-items: center;
  padding: 0 100px;
  text-align: center;
`;

export const MainContainer = styled.div`
  display: flex;
  font-family: sans-serif;
  font-size: 14px;
  letter-spacing: 0.4px;
  margin: 80px auto 60px;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  text-align: start;
  flex-wrap: wrap;
`;

export const Text = styled.div`
  display: flex;
  padding: 24px 0 12px;
  line-height: 1.6;
  letter-spacing: 0.8px;
`;

export const Address = styled.div`
  display: flex;
  line-height: 1.4;
  letter-spacing: 0.6px;
`;

export const AddressIcon = styled.div`
  padding: 2px 8px;
  margin: 3px 10px 0 0;
  height: 11px;
  width: 0;
  background-image: url(${AddressIconPNG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  line-height: 1.6;
`;

export const EmailSpan = styled.span`
  display: flex;
`;

export const MailIcon = styled.div`
  padding: 2px 8px;
  margin: 3px 10px 0 0;
  height: 11px;
  width: 0;
  background-image: url(${MailIconPNG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const EmailText = styled.a`
  text-decoration: none;
  color: ${props => props.theme.footerTextColor};
  :hover {
    color: ${props => props.theme.midLightGray};
  }
`;

export const PhoneIcon = styled.div`
  padding: 2px 8px;
  margin-right: 10px;
  height: 11px;
  width: 0;
  background-image: url(${PhoneIconPNG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Phone = styled.div`
  display: flex;
`;

export const PhoneText = styled.a`
  text-decoration: none;
  color: ${props => props.theme.footerTextColor};
  :hover {
    color: ${props => props.theme.midLightGray};
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  width: 20%;
`;

export const NewsLetterContainer = styled.div`
  display: flex;
  width: 25%;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
`;

export const TitleAndDate = styled.div`
  display: flex;
  letter-spacing: 0.4px;
  margin: auto 0;
`;

export const CompanyName = styled.span`
  margin-right: 5px;
  cursor: pointer;
  color: inherit;
  :hover {
    color: ${props => props.theme.lightBlue};
    transition: color 0.5s;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
`;

export const MediaIcon = styled.div`
  background-image: ${props =>
    props.type === 'facebook'
      ? `url(${FacebookMetal})`
      : props.type === 'twitter'
      ? `url(${TwitterMetal})`
      : `url(${InstagramMetal})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 16px;
  height: 16px;
`;

export const IconContainer = styled.div.attrs({ as: 'a' })`
  padding: 14px;
  :hover > div {
    background-image: ${props =>
      props.type === 'facebook'
        ? `url(${FacebookBlue})`
        : props.type === 'twitter'
        ? `url(${TwitterBlue})`
        : `url(${InstagramBlue})`};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const ImageContainer = styled(NavLink)`
  margin: 0;
  padding: 0;
  padding-left: 30px;
`;

export const Logo = styled.img`
  width: 50px;
`;

export const LogoText = styled.span`
  margin: auto 24px;
  font-size: 22px;
  cursor: pointer;
  color: white;
  :hover {
    color: ${props => props.theme.lightBlue};
    transition: color 0.5s;
  }
`;

export const LinksTitle = styled.div`
  display: flex;
  color: white;
  font-size: 22px;
  margin-top: 12px;
`;
