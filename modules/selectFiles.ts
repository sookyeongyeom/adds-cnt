import { createAction, handleActions } from 'redux-actions';
import { put, select, takeLatest } from 'redux-saga/effects';
import { RootState } from '.';
import getCommentFile from '../utils/getCommentFile';
import getProfileFile from '../utils/getProfileFile';

const SET_PROFILE_FILE = 'selectFiles/SET_PROFILE_FILE';
const SET_COMMENT_FILE = 'selectFiles/SET_COMMENT_FILE';
const SELECT_PROFILE_FILE = 'selectFiles/SELECT_PROFILE_FILE';
const SELECT_COMMENT_FILE = 'selectFiles/SELECT_COMMENT_FILE';

export const setProfileFile = createAction(SET_PROFILE_FILE);
export const setCommentFile = createAction(SET_COMMENT_FILE);
export const selectProfileFile = createAction(SELECT_PROFILE_FILE);
export const selectCommentFile = createAction(SELECT_COMMENT_FILE);

function* selectProfileFileSaga(action: any): Generator<any> {
	const gapi: any = yield select(({ google }: RootState) => google.gapi);
	const payload = action.payload;
	yield put(setProfileFile(payload));
	yield getProfileFile(gapi, payload.fileId);
	localStorage.setItem('profileFile', JSON.stringify(payload));
}

function* selectCommentFileSaga(action: any): Generator<any> {
	const gapi: any = yield select(({ google }: RootState) => google.gapi);
	const payload = action.payload;
	yield put(setCommentFile(payload));
	yield getCommentFile(gapi, payload.fileId);
	localStorage.setItem('commentFile', JSON.stringify(payload));
}

export function* selectFilesSaga() {
	yield takeLatest(SELECT_PROFILE_FILE, selectProfileFileSaga);
	yield takeLatest(SELECT_COMMENT_FILE, selectCommentFileSaga);
}

type StateType = {
	profileFile: {
		fileId: string | null;
		fileName: string | null;
	};
	commentFile: {
		fileId: string | null;
		fileName: string | null;
	};
	[key: string]: any;
};

const initialState: StateType = {
	profileFile: {
		fileId: null,
		fileName: null,
	},
	commentFile: {
		fileId: null,
		fileName: null,
	},
};

const selectFiles = handleActions(
	{
		[SET_PROFILE_FILE]: (state, action) => ({
			...state,
			profileFile: {
				fileId: action.payload.fileId,
				fileName: action.payload.fileName,
			},
		}),
		[SET_COMMENT_FILE]: (state, action) => ({
			...state,
			commentFile: {
				fileId: action.payload.fileId,
				fileName: action.payload.fileName,
			},
		}),
	},
	initialState,
);

export default selectFiles;
