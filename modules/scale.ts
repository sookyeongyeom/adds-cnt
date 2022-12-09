import { createAction, handleActions } from 'redux-actions';

const SCALE_DOWN = 'scale/SCALE_DOWN';
const SCALE_UP = 'scale/SCALE_UP';

export const scaleDown = createAction(SCALE_DOWN);
export const scaleUp = createAction(SCALE_UP);

const initialState = 100;

const scale = handleActions(
	{
		[SCALE_DOWN]: (state) => state - 10,
		[SCALE_UP]: (state) => state + 10,
	},
	initialState,
);

export default scale;
