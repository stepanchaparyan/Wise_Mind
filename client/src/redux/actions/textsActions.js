import * as actionTypes from '../constants/textsConstants';
import axios from 'axios';
import { URL } from '../../constants';

const { TEXTS } = URL;

export const getTexts = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_TEXTS_REQUEST });

    const { data } = await axios.get(TEXTS);

    dispatch({
      type: actionTypes.GET_TEXTS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_TEXTS_FAIL,
      paiyload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
