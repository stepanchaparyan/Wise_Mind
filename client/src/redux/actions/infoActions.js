import * as actionTypes from '../constants/infoConstants';
import axios from 'axios';
import { URL } from '../../constants';

const { INFO } = URL;

export const getInfo = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_INFO_REQUEST });

    const { data } = await axios.get(INFO);

    dispatch({
      type: actionTypes.GET_INFO_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_INFO_FAIL,
      paiyload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
