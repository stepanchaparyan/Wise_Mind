import * as actionTypes from '../constants/textsConstants';

export const textsReducer = (state = { texts: [], loading: false }, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_TEXTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_TEXTS_SUCCESS:
      return {
        texts: payload,
        loading: false
      };
    case actionTypes.GET_TEXTS_FAIL:
      return {
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
