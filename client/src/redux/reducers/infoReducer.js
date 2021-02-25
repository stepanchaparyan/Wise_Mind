import * as actionTypes from '../constants/infoConstants';

export const infoReducer = (state = { info: [], loading: false }, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_INFO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_INFO_SUCCESS:
      return {
        info: payload,
        loading: false
      };
    case actionTypes.GET_INFO_FAIL:
      return {
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
