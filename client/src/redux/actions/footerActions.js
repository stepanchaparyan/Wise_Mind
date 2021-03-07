import * as actionTypes from '../constants/constants';
import axios from 'axios';
import { URL } from '../../constants';

const { FOOTER } = URL;

export const getFooter = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_FOOTER_REQUEST });

    const { data } = await axios.get(FOOTER);

    dispatch({
      type: actionTypes.GET_FOOTER_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_FOOTER_FAIL,
      paiyload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
