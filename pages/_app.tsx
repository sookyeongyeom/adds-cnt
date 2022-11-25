import '../styles/reset.scss';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import AuthTokenProviders from '../contexts/AuthTokenProviders';
import ResultsProviders from '../contexts/ResultsProviders';
import ProfilesProviders from '../contexts/ProfilesProviders';
import CommentsProviders from '../contexts/CommentsProviders';
import CurrentPatientProviders from '../contexts/CurrentPatientProviders';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AuthTokenProviders>
			<ResultsProviders>
				<CurrentPatientProviders>
					<ProfilesProviders>
						<CommentsProviders>
							<Component {...pageProps} />
						</CommentsProviders>
					</ProfilesProviders>
				</CurrentPatientProviders>
			</ResultsProviders>
		</AuthTokenProviders>
	);
}
