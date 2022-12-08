import { createAction, handleActions } from 'redux-actions';
import { put, takeLatest } from 'redux-saga/effects';

const SET_FOCUS_ID = 'focusId/SET_FOCUS_ID';
const SELECT_FOCUS_ID = 'focusId/SELECT_FOCUS_ID';

export const setFocusId = createAction(SET_FOCUS_ID, (patientId: string) => patientId);
export const selectFocusId = createAction(SELECT_FOCUS_ID);

function* selectFocusIdSaga(action: any) {
	const focusId = action.payload;
	yield put(setFocusId(focusId));
	localStorage.setItem('focusId', focusId);
}

export function* focusIdSaga() {
	yield takeLatest(SELECT_FOCUS_ID, selectFocusIdSaga);
}

const initialState = '';

const focusId = handleActions(
	{
		[SET_FOCUS_ID]: (state, action) => action.payload,
	},
	initialState,
);

export default focusId;
