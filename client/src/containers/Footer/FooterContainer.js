import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFooter } from '../../redux/actions/footerActions';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import Loading from '../../components/Loading/Loading';

const FooterContainer = () => {
  const dispatch = useDispatch();
  const { footer, loading } = useSelector(state => state.footer);
  const contactUsTexts = footer.find(item => item.section === 'contactUs');
  const infoText = footer.find(item => item.title === 'text');
  const address = footer.find(item => item.title === 'Address: ');
  const phone = footer.find(item => item.title === 'Phone: ');
  const email = footer.find(item => item.title === 'Email: ');
  const newsLetter = footer.find(item => item.title === 'NewsLetter');

  useEffect(() => {
    dispatch(getFooter('en'));
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <ContactUs texts={contactUsTexts}></ContactUs>
          <Footer
            infoText={infoText}
            address={address}
            phone={phone}
            email={email}
            newsLetter={newsLetter}
          ></Footer>
          <ScrollToTop></ScrollToTop>
        </>
      )}
    </>
  );
};

export default FooterContainer;
