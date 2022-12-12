import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import DashBoardPage from '../components/DashBoard/DashBoardPage';
import { useDispatch, useSelector } from 'react-redux';
import { setGapi, setGoogle, setTokenClient, login } from '../modules/google';
import Keys from '../constants/keys';
import { RootState } from '../modules/index';
import { setFocusId } from '../modules/focusId';
import { selectProfileFile, selectCommentFile } from '../modules/selectFiles';

declare let gapi: any;
declare let google: any;

export default function Home() {
	const { gapi: GlobalGapi, google: GlobalGoogle } = useSelector(({ google }: RootState) => google);

	const dispatch = useDispatch();
	const onLoadGapi: any = (gapi: any) => dispatch(setGapi(gapi));
	const onLoadGoogle: any = (google: any) => dispatch(setGoogle(google));
	const onInitTokenClient: any = (tokenClient: any) => dispatch(setTokenClient(tokenClient));
	const onLogin: any = (authToken: string) => dispatch(login(authToken));
	const onRetrieveFocusId: any = (focusId: string) => dispatch(setFocusId(focusId));
	const onRetrieveProfileFile: any = ({ fileId, fileName }: { [key: string]: string }) =>
		dispatch(selectProfileFile({ fileId, fileName }));
	const onRetrieveCommentFile: any = ({ fileId, fileName }: { [key: string]: string }) =>
		dispatch(selectCommentFile({ fileId, fileName }));

	useEffect(() => {
		const authToken = localStorage.getItem('authToken');
		if (GlobalGapi && GlobalGoogle && authToken) {
			onLogin(authToken);

			const profileFile = localStorage.getItem('profileFile');
			if (profileFile) onRetrieveProfileFile(JSON.parse(profileFile));

			const commentFile = localStorage.getItem('commentFile');
			if (commentFile) onRetrieveCommentFile(JSON.parse(commentFile));
		}
	}, [GlobalGapi, GlobalGoogle]);

	useEffect(() => {
		const focusId = localStorage.getItem('focusId');
		if (focusId) onRetrieveFocusId(focusId);
	}, []);

	const gapiLoaded = () => {
		gapi.load('client', initializeGapiClient);
	};

	const initializeGapiClient = async () => {
		await gapi.client.init({
			apiKey: Keys.API_KEY,
			discoveryDocs: [Keys.DISCOVERY_DOC],
		});
		onLoadGapi(gapi);
	};

	const gisLoaded = () => {
		const tokenClient = google.accounts.oauth2.initTokenClient({
			client_id: Keys.CLIENT_ID,
			scope: Keys.SCOPES,
			callback: '',
		});
		onLoadGoogle(google);
		onInitTokenClient(tokenClient);
	};

	return (
		<>
			<Head>
				<title>CNT</title>
			</Head>
			<Script defer src='https://apis.google.com/js/api.js' onLoad={gapiLoaded}></Script>
			<Script defer src='https://accounts.google.com/gsi/client' onLoad={gisLoaded}></Script>
			<DashBoardPage />
		</>
	);
}
