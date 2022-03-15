import { USERS_ACTION_TYPES } from './users.types';

const usersInit = {
  data: {},
  loading: false,
  error: ''
}


export const usersReducer = (store = usersInit, action) => {
  switch (action.type) {
    case USERS_ACTION_TYPES.SET_USERS:
      return {
        ...store,
        ...usersInit,
        data: action.data
      };
    case USERS_ACTION_TYPES.SET_USERS_LOADING:
      return {
        ...store,
        ...usersInit,
        loading: true,
      }
    case USERS_ACTION_TYPES.SET_USERS_ERROR:
      return {
        ...store,
        ...usersInit,
        error: action.data
      }

    default: return store;
  }
}