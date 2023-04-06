import { createAction, handleActions } from 'redux-actions';
import { ProfilesValueType } from '../@types/store';

const SET_PROFILES = 'profiles/SET_PROFILES';

export const setProfiles = createAction(SET_PROFILES, (profiles: ProfilesValueType) => profiles);

const initialState: ProfilesValueType = {};

const profiles = handleActions(
	{
		[SET_PROFILES]: (state, action) => ({ ...action.payload }),
	},
	initialState,
);

export default profiles;
