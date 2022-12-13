import { createAction, handleActions } from 'redux-actions';
import { CommentsValueType } from '../@types/store';

const SET_COMMENTS = 'results/SET_COMMENTS';

export const setComments = createAction(SET_COMMENTS, (comments: CommentsValueType) => comments);

const initialState: CommentsValueType = {};

const comments = handleActions(
	{
		[SET_COMMENTS]: (state, action) => ({ ...action.payload }),
	},
	initialState,
);

export default comments;
