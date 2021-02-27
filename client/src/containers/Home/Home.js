import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../../redux/actions/infoActions';
import Loading from '../../components/Loading/Loading';
import Welcome from './Welcome/Welcome';
import CoreValues from './CoreValues/CoreValues';
import Treatments from './Treatments/Treatments';
import Employees from './Employees/Employees';

const Home = () => {
  const dispatch = useDispatch();
  const allInfo = useSelector(state => state.info);
  const { info, loading, error } = allInfo;
  const treatments = info.filter(item => item.section === 'treatment');
  const coreValueMain = info.find(item => item.section === 'coreValuesMain');
  const coreValues = info.filter(item => item.section === 'coreValues');
  const whoWeAre = info.find(item => item.section === 'whoWeAre');
  const employees = info.filter(item => item.section === 'employees');
  const employeesTitleText = info.find(item => item.section === 'employeesTitleText');

  useEffect(() => {
    dispatch(getInfo());
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
        </>
      )}
    </>
  );
};

export default Home;
