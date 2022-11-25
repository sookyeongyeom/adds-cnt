import Profiles from '../models/Profiles';
import Results from '../models/Results';
import Comments from '../models/Comments';
export interface AuthTokenActionsType {
	createAuthToken(token: string): void;
	removeAuthToken(): void;
}

export interface CurrentPatientActionsType {
	updateCurrentPatient(patientId: string): void;
}

export interface ProfilesActionsType {
	updateProfiles(profiles: ProfilesValueType): void;
}

export interface CommentsActionsType {
	updateComments(comments: CommentsValueType): void;
}

export interface ResultsActionsType {
	updateResults(results: ResultsValueType): void;
}
export interface ResultsValueType {
	[keys: string]: Results;
}

export interface ProfilesValueType {
	[keys: string]: Profiles;
}

export interface CommentsValueType {
	[keys: string]: Comments;
}
