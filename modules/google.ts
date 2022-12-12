import { createAction, handleActions } from 'redux-actions';
import { put, takeLatest, select } from 'redux-saga/effects';
import getResultFiles from '../utils/getResultFiles';
import { RootState } from './index';
import { setResults } from './results';
import { setProfiles } from './profiles';
import { setComments } from './comments';
import { setFocusId } from './focusId';

const SET_GAPI = 'google/SET_GAPI';
const SET_GOOGLE = 'google/SET_GOOGLE';
const SET_TOKEN_CLIENT = 'google/SET_TOKEN_CLIENT';
const SET_AUTH_TOKEN = 'google/SET_AUTH_TOKEN';
const REVOKE_AUTH_TOKEN = 'google/REVOKE_AUTH_TOKEN';
const SET_PROFILE_PICTURE = 'google/SET_PROFILE_PICTURE';
const LOGIN = 'google/LOGIN';
const LOGOUT = 'google/LOGOUT';

export const setGapi = createAction(SET_GAPI, (gapi: any) => gapi);
export const setGoogle = createAction(SET_GOOGLE, (google: any) => google);
export const setTokenClient = createAction(SET_TOKEN_CLIENT, (tokenClient: any) => tokenClient);
export const setAuthToken = createAction(SET_AUTH_TOKEN, (authToken: any) => authToken);
export const revokeAuthToken = createAction(REVOKE_AUTH_TOKEN);
export const setProfilePicture = createAction(SET_PROFILE_PICTURE, (picture: string) => picture);
export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);

function* loginSaga(action: any): Generator<any> {
	const authToken = action.payload;
	const gapi: any = yield select(({ google }: RootState) => google.gapi);

	if (gapi.client.getToken() === null) {
		gapi.client.setToken({
			access_token: authToken,
		});
	}

	try {
		let response: any;
		response = yield gapi.client.request('https://www.googleapis.com/oauth2/v1/userinfo?alt=json');
		const photo = response.result.picture;
		yield put(setProfilePicture(photo));
	} catch (err: any) {
		alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
		yield put(logout());
	}

	localStorage.setItem('authToken', authToken);
	yield put(setAuthToken(authToken));
	yield getResultFiles(gapi, authToken);
}

function* logoutSaga(): Generator<any> {
	const gapi: any = yield select(({ google }: RootState) => google.gapi);
	const google: any = yield select(({ google }: RootState) => google.google);
	const authToken: any = yield select(({ google }: any) => google.authToken);
	google.accounts.oauth2.revoke(authToken);
	gapi.client.setToken('');
	yield put(revokeAuthToken());
	yield put(setResults({}));
	yield put(setProfiles({}));
	yield put(setComments({}));
	yield put(setFocusId(''));
	yield put(setProfilePicture(''));
	localStorage.clear();
	window.location.reload();
}

export function* googleSaga() {
	yield takeLatest(LOGIN, loginSaga);
	yield takeLatest(LOGOUT, logoutSaga);
}

type StateType = {
	gapi: any;
	google: any;
	tokenClient: any;
	authToken: string;
	profilePicture: string;
};

const initialState: StateType = {
	gapi: null,
	google: null,
	tokenClient: null,
	authToken: '',
	profilePicture: '',
};

const google = handleActions(
	{
		[SET_GAPI]: (state, action) => ({
			...state,
			gapi: action.payload as any,
		}),
		[SET_GOOGLE]: (state, action) => ({
			...state,
			google: action.payload as any,
		}),
		[SET_TOKEN_CLIENT]: (state, action) => ({
			...state,
			tokenClient: action.payload as any,
		}),
		[SET_AUTH_TOKEN]: (state, action) => ({
			...state,
			authToken: action.payload as any,
		}),
		[REVOKE_AUTH_TOKEN]: (state) => ({
			...state,
			authToken: '',
		}),
		[SET_PROFILE_PICTURE]: (state, action) => ({
			...state,
			profilePicture: action.payload as any,
		}),
	},
	initialState,
);

export default google;
