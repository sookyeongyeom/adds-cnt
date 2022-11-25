import { createContext, useContext, useState, useEffect } from 'react';
import { ChildrenType } from '../@types/base';
import { ProfilesActionsType, ProfilesValueType } from '../@types/context';

const ProfilesValueContext = createContext<ProfilesValueType>({});
const ProfilesActionsContext = createContext<ProfilesActionsType>([] as any);

export default function ProfilesProviders({ children }: ChildrenType) {
	const [profiles, setProfiles] = useState<ProfilesValueType>({});
	const actions = {
		updateProfiles(profiles: ProfilesValueType) {
			setProfiles(profiles);
		},
	};

	useEffect(() => {
		console.log(profiles);
	}, [profiles]);

	return (
		<ProfilesActionsContext.Provider value={actions}>
			<ProfilesValueContext.Provider value={profiles}>{children}</ProfilesValueContext.Provider>
		</ProfilesActionsContext.Provider>
	);
}

export function useProfilesValue() {
	const value = useContext(ProfilesValueContext);
	if (value === undefined) throw new Error('ProfilesValueContext.Provider is Missing');
	return value;
}

export function useProfilesActions() {
	const value = useContext(ProfilesActionsContext);
	if (value === undefined) throw new Error('ProfilesActionsContext.Provider is Missing');
	return value;
}
