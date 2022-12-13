import Profiles from '../models/Profiles';
import Results from '../models/Results';
import Comments from '../models/Comments';

/**
 * @for results module */
type ResultsValueType = {
	[keys: string]: Results;
};

/**
 * @for profiles module */
type ProfilesValueType = {
	[keys: string]: Profiles;
};

/**
 * @for comments module */
type CommentsValueType = {
	[keys: string]: Comments;
};
