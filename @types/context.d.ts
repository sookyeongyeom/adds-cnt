export interface AuthTokenActionsType {
	createAuthToken(token: string): void;
	removeAuthToken(): void;
}
