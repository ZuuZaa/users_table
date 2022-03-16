import { combineReducers } from 'redux';
import { usersReducer } from './users/users.reducers';
import { queryReducer } from './query/query.reducers';

export default combineReducers({
  users: usersReducer,
  query: queryReducer
})