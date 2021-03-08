import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFooter } from '../../redux/actions/footerActions';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';
import ScrollToTop from './ScrollToTop/ScrollToTop';

const FooterContainer = () => {
  const dispatch = useDispatch();
  const { footer, loading } = useSelector(state => state.footer);
  const contactUsTexts = footer.find(item => item.section === 'contactUs');

  useEffect(() => {
    dispatch(getFooter());
  }, [dispatch]);

  return (
    <>
      <ContactUs texts={contactUsTexts}></ContactUs>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
    </>
  );
};

export default FooterContainer;
