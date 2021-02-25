import React from 'react';
import { LoadingStyled } from './LoadingStyled';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <LoadingStyled>
      <Loader type="ThreeDots" color="#1996cd" height={80} width={80} />
    </LoadingStyled>
  );
};

export default Loading;
