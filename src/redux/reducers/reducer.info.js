import { SET_STATUS, SET_LOADING, SET_PENDING } from "../actions/actions.info";

const initialState = {
  loading: true,
  status: '',
  pending: false,
};

export const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
      case SET_PENDING:
      return {
        ...state,
        pending: action.pending,
      };
    default:
      return state;
  }
};
