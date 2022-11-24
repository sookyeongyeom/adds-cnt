import { useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import * as XLSX from 'xlsx';
import DashBoardPage from '../components/DashBoard/DashBoardPage';

declare let gapi: any;
declare let google: any;

export default function Home() {
	const [tokenClient, setTokenClient] = useState(null) as any;
	const [authToken, setAuthToken] = useState('');

	const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
	const DISCOVERY_DOC = process.env.NEXT_PUBLIC_DISCOVERY_DOC;
	const SCOPES = process.env.NEXT_PUBLIC_SCOPES;

	useEffect(() => {
		const authToken = localStorage.getItem('authToken');
		if (authToken) setAuthToken(authToken);
	}, []);

	useEffect(() => {
		if (authToken) localStorage.setItem('authToken', authToken);
	}, [authToken]);

	function gapiLoaded() {
		gapi.load('client', initializeGapiClient);
	}

	async function initializeGapiClient() {
		await gapi.client.init({
			apiKey: API_KEY,
			discoveryDocs: [DISCOVERY_DOC],
		});
	}

	function gisLoaded() {
		const tokenClient = google.accounts.oauth2.initTokenClient({
			client_id: CLIENT_ID,
			scope: SCOPES,
			callback: '',
		});
		setTokenClient(tokenClient);
	}

	function handleAuthClick() {
		tokenClient.callback = async (resp: any) => {
			if (resp.error !== undefined) {
				throw resp;
			}
			const token = gapi.client.getToken().access_token;
			setAuthToken(token);
		};

		if (gapi.client.getToken() === null) {
			tokenClient.requestAccessToken({ prompt: 'consent' });
		} else {
			tokenClient.requestAccessToken({ prompt: '' });
		}
	}

	function handleSignoutClick() {
		if (authToken) {
			google.accounts.oauth2.revoke(authToken);
			gapi.client.setToken('');
			setAuthToken('');
			localStorage.removeItem('authToken');
		}
	}

	async function listFiles() {
		if (gapi.client.getToken() === null && authToken) {
			gapi.client.setToken({
				access_token: authToken,
			});
		}

		let response;
		try {
			response = await gapi.client.drive.files.list({
				pageSize: 10,
				fields: 'files(id, name)',
			});
		} catch (err: any) {
			console.log(err.message);
			return;
		}
		const files = response.result.files;
		if (!files || files.length == 0) {
			console.log('No files found');
			return;
		}
		const output = files.reduce(
			(str: any, file: any) => `${str}${file.name} (${file.id})\n`,
			'Files:\n',
		);
		console.log(output);

		try {
			const request = await gapi.client.drive.files.get({
				fileId: '1iOn_8ZpqMkHrn65Mff4yCpSc5zT6Yig7',
				alt: 'media',
			});
			console.log(request);
			const content = request.body;
			let n = content.length;
			const buffer = new Uint8Array(n);

			while (n--) {
				buffer[n] = content.charCodeAt(n);
			}

			const file = new File([buffer], 'file', {
				type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
			});

			readExcel(file);
		} catch (e: any) {
			console.log(e.message);
		}
	}

	function readExcel(file: any) {
		let reader = new FileReader();

		reader.onload = function () {
			let data = reader.result;
			let workBook = XLSX.read(data, { type: 'binary' });
			workBook.SheetNames.forEach((sheetName) => {
				console.log('SheetName: ' + sheetName);
				let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
				console.log(JSON.stringify(rows));
			});
		};

		if (file !== null) reader.readAsBinaryString(file);
	}

	async function getProfile() {
		if (gapi.client.getToken() === null && authToken) {
			gapi.client.setToken({
				access_token: authToken,
			});
		}

		let response;
		try {
			response = await gapi.client.request(
				'https://www.googleapis.com/oauth2/v1/userinfo?alt=json',
			);
			console.log(response);
			const picture = response.result.picture;
			const imgElement = document.createElement('img');
			imgElement.src = picture;
			document.body.appendChild(imgElement);
		} catch (err: any) {
			console.log(err);
			return;
		}
	}

	return (
		<>
			<Head>
				<title>CNT</title>
			</Head>
			<Script async defer src='https://apis.google.com/js/api.js' onLoad={gapiLoaded}></Script>
			<Script async defer src='https://accounts.google.com/gsi/client' onLoad={gisLoaded}></Script>
			{/* {!authToken && <button onClick={handleAuthClick}>Authorize</button>}
			{authToken && <button onClick={handleSignoutClick}>SignOut</button>}
			{authToken && <button onClick={listFiles}>데이터</button>}
			{authToken && <button onClick={getProfile}>프로필</button>} */}
			<DashBoardPage handleAuthClick={handleAuthClick} />
		</>
	);
}
