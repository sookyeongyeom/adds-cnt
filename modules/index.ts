import { combineReducers } from 'redux';
import google, { googleSaga } from './google';
import { all } from 'redux-saga/effects';
import results from './results';
import profiles from './profiles';
import focusId, { focusIdSaga } from './focusId';
import comments from './comments';

const rootReducer = combineReducers({ google, results, profiles, comments, focusId });

export function* rootSaga() {
	yield all([googleSaga(), focusIdSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
