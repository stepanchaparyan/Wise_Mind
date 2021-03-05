import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeTexts } from '../../redux/actions/homeTextsActions';
import Loading from '../../components/Loading/Loading';
import Welcome from './Welcome/Welcome';
import CoreValues from './CoreValues/CoreValues';
import Treatments from './Treatments/Treatments';
import Employees from './Employees/Employees';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {
  const dispatch = useDispatch();
  const { homeTexts, loading, error } = useSelector(state => state.homeTexts);
  const treatments = homeTexts.filter(item => item.section === 'treatment');
  const coreValueMain = homeTexts.find(item => item.section === 'coreValuesMain');
  const coreValues = homeTexts.filter(item => item.parent_section === 'coreValues');
  const whoWeAre = homeTexts.find(item => item.section === 'whoWeAre');
  const employees = homeTexts.filter(item => item.section === 'employees');
  const employeesTitleText = homeTexts.find(item => item.section === 'employeesTitleText');
  const contactUsTexts = homeTexts.find(item => item.section === 'contact_us');

  useEffect(() => {
    dispatch(getHomeTexts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <Welcome></Welcome>
          <CoreValues
            coreValueMain={coreValueMain}
            coreValues={coreValues}
            whoWeAre={whoWeAre}
          ></CoreValues>
          <Treatments treatments={treatments}></Treatments>
          <Employees titleText={employeesTitleText} employees={employees}></Employees>
          <ContactUs texts={contactUsTexts}></ContactUs>
        </>
      )}
    </>
  );
};

export default Home;
