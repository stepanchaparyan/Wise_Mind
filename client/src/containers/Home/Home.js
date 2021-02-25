import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../../redux/actions/infoActions';
import Loading from '../../components/Loading/Loading';
import Welcome from './Welcome/Welcome';
import CoreValues from './CoreValues/CoreValues';

const Home = () => {
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
          <Welcome></Welcome>
          <CoreValues info={info}></CoreValues>
        </>
      )}
    </>
  );
};

export default Home;
