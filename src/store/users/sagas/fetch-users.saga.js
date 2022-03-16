import { takeLatest, put, call } from 'redux-saga/effects';
import { USERS_ACTION_TYPES } from '../users.types';
import { getUsers } from '../../../api/usersData';
import { USERS_ACTIONS } from '..';

function* fetchUsers() {
    yield put(USERS_ACTIONS.setUsersLoading())
    try {
        const users = yield call(getUsers)
        yield put(USERS_ACTIONS.setUsers(users));
    } catch (error) {
        yield put(USERS_ACTIONS.setUsersError(error.message))
    }
}

function* watchFetchUsers() {
    yield takeLatest(USERS_ACTION_TYPES.FETCH_USERS, fetchUsers)
}

export { watchFetchUsers };
