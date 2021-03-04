import * as actionTypes from '../constants/constants';
import axios from 'axios';
import { URL } from '../../constants';

const { HOME_TEXTS } = URL;

export const getHomeTexts = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_HOME_TEXTS_REQUEST });

    const { data } = await axios.get(HOME_TEXTS);

    dispatch({
      type: actionTypes.GET_HOME_TEXTS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_HOME_TEXTS_FAIL,
      paiyload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
