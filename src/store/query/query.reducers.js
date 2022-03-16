import { QUERY_ACTION_TYPES } from './query.action-types';

const queryInit = {
  data: ""
}

export const queryReducer = (store = queryInit, action) => {
  switch (action.type) {
    case QUERY_ACTION_TYPES.SET_QUERY:
      return {
        ...store,
        ...queryInit,
        data: action.data
      };
    default: return store;
  }
}