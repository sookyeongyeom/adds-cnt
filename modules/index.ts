import { combineReducers } from 'redux';
import google, { googleSaga } from './google';
import { all } from 'redux-saga/effects';
import results from './results';
import profiles from './profiles';
import focusId, { focusIdSaga } from './focusId';
import comments from './comments';
import selectFiles, { selectFilesSaga } from './selectFiles';

const rootReducer = combineReducers({ google, results, profiles, comments, focusId, selectFiles });

export function* rootSaga() {
	yield all([googleSaga(), focusIdSaga(), selectFilesSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
