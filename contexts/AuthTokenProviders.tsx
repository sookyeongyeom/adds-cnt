import { createContext, useContext, useState, useEffect } from 'react';
import { ChildrenType } from '../@types/base';
import { AuthTokenActionsType } from '../@types/context';

const AuthTokenValueContext = createContext('');
const AuthTokenActionsContext = createContext<AuthTokenActionsType>([] as any);

export default function AuthTokenProviders({ children }: ChildrenType) {
	const [authToken, setAuthToken] = useState('');
	const actions = {
		createAuthToken(token: string) {
			setAuthToken(token);
		},
		removeAuthToken() {
			setAuthToken('');
		},
	};

	return (
		<AuthTokenActionsContext.Provider value={actions}>
			<AuthTokenValueContext.Provider value={authToken}>{children}</AuthTokenValueContext.Provider>
		</AuthTokenActionsContext.Provider>
	);
}

export function useAuthTokenValue() {
	const value = useContext(AuthTokenValueContext);
	if (value === undefined) throw new Error('AuthTokenValueContext.Provider is Missing');
	return value;
}

export function useAuthTokenActions() {
	const value = useContext(AuthTokenActionsContext);
	if (value === undefined) throw new Error('AuthTokenActionsContext.Provider is Missing');
	return value;
}
