import { all, fork } from "redux-saga/effects";
import { watchFetchUsers} from "./fetch-users.saga"; 


function* usersSaga(){
    yield all([
        fork(watchFetchUsers),
    ])
}

export {usersSaga};