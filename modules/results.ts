import { createAction, handleActions } from 'redux-actions';
import { ResultsValueType } from '../@types/store';

const SET_RESULTS = 'results/SET_RESULTS';

export const setResults = createAction(SET_RESULTS, (results: ResultsValueType) => results);

const initialState: ResultsValueType = {};

const results = handleActions(
	{
		[SET_RESULTS]: (state, action) => ({ ...action.payload }),
	},
	initialState,
);

export default results;
