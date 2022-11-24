import '../styles/reset.scss';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import AuthTokenProviders from '../contexts/AuthTokenProviders';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AuthTokenProviders>
			<Component {...pageProps} />
		</AuthTokenProviders>
	);
}
