import * as actionTypes from '../constants/constants';
import axios from 'axios';
import { URL } from '../../constants';

const { NAVBAR } = URL;

export const getNavbar = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_NAVBAR_REQUEST });

    const { data } = await axios.get(NAVBAR);

    dispatch({
      type: actionTypes.GET_NAVBAR_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_NAVBAR_FAIL,
      paiyload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
