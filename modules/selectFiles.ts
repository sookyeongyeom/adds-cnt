import { createAction, handleActions } from 'redux-actions';
import { put, select, takeLatest } from 'redux-saga/effects';
import { RootState } from '.';
import getCommentFile from '../utils/getCommentFile';

import getProfileFile from '../utils/getProfileFile';

const SET_PROFILE_FILE = 'selectFiles/SET_PROFILE_FILE';
const SET_COMMENT_FILE = 'selectFiles/SET_COMMENT_FILE';
const SELECT_PROFILE_FILE = 'selectFiles/SELECT_PROFILE_FILE';
const SELECT_COMMENT_FILE = 'selectFiles/SELECT_COMMENT_FILE';

export const setProfileFile = createAction(SET_PROFILE_FILE, (filename: string) => filename);
export const setCommentFile = createAction(SET_COMMENT_FILE, (filename: string) => filename);
export const selectProfileFile = createAction(SELECT_PROFILE_FILE);
export const selectCommentFile = createAction(SELECT_COMMENT_FILE);

function* selectProfileFileSaga(action: any): Generator<any> {
	const gapi: any = yield select(({ google }: RootState) => google.gapi);
	const fileId = action.payload;
	yield put(setProfileFile(fileId));
	yield getProfileFile(gapi, fileId);
}

function* selectCommentFileSaga(action: any): Generator<any> {
	const gapi: any = yield select(({ google }: RootState) => google.gapi);
	const fileId = action.payload;
	yield put(setCommentFile(fileId));
	yield getCommentFile(gapi, fileId);
}

export function* selectFilesSaga() {
	yield takeLatest(SELECT_PROFILE_FILE, selectProfileFileSaga);
	yield takeLatest(SELECT_COMMENT_FILE, selectCommentFileSaga);
}

const initialState = {
	profileFile: null,
	commentFile: null,
};

const selectFiles = handleActions(
	{
		[SET_PROFILE_FILE]: (state, action) => ({
			...state,
			profileFile: action.payload as any,
		}),
		[SET_COMMENT_FILE]: (state, action) => ({
			...state,
			commentFile: action.payload as any,
		}),
	},
	initialState,
);

export default selectFiles;
