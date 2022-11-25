import { MutableRefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import * as XLSX from 'xlsx';
import DashBoardPage from '../components/DashBoard/DashBoardPage';
import { useAuthTokenActions } from '../contexts/AuthTokenProviders';
import TestTypes from '../constants/tests';
import CardSortingTest from '../models/CardSortingTest';
import WordColorTest from '../models/WordColorTest';
import TrailMakingTest from '../models/TrailMakingTest';
import Results from '../models/Results';
import { useResultsActions } from '../contexts/ResultsProviders';
import Profiles from '../models/Profiles';
import { useProfilesActions } from '../contexts/ProfilesProviders';
import styled from 'styled-components';

declare let gapi: any;
declare let google: any;

export default function Home() {
	const [tokenClient, setTokenClient] = useState(null) as any;
	const [authToken, setAuthToken] = useState('');
	const [profilePhoto, setProfilePhoto] = useState('');
	const [resultsFiles, setResultsFiles] = useState<string[]>([]);
	const [isGApiLoaded, setIsGApiLoaded] = useState(false);
	const [isGLoaded, setIsGLoaded] = useState(false);

	const listClickRef = useRef() as MutableRefObject<HTMLButtonElement>;

	const authTokenActions = useAuthTokenActions();
	const resultsActions = useResultsActions();
	const profilesActions = useProfilesActions();

	const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
	const DISCOVERY_DOC = process.env.NEXT_PUBLIC_DISCOVERY_DOC;
	const SCOPES = process.env.NEXT_PUBLIC_SCOPES;

	const RESULTS_FOLDER_ID = '1b0ZZDRDM9telQUAmEF7l9b5qxp611fnU';
	const PROFILES_FOLDER_ID = '10MF1d0SY38KrErHAMDYji1ID-FiLM9Oe';
	const COMMENTS_FOLDER_ID = '1XIhnw2E2ThkwWgZnww03HSnBTjyIdBaN';

	/* ********************************************************* */

	useEffect(() => {
		const authToken = localStorage.getItem('authToken');
		const profilePhoto = localStorage.getItem('profilePhoto');
		if (authToken) {
			setAuthToken(authToken);
			authTokenActions.createAuthToken(authToken);
		}
		if (profilePhoto) setProfilePhoto(profilePhoto);
	}, []);

	useEffect(() => {
		if (authToken) {
			localStorage.setItem('authToken', authToken);
			authTokenActions.createAuthToken(authToken);
		} else {
			localStorage.removeItem('authToken');
			authTokenActions.removeAuthToken();
		}
	}, [authToken]);

	useEffect(() => {
		if (profilePhoto) localStorage.setItem('profilePhoto', profilePhoto);
	}, [profilePhoto]);

	useEffect(() => {
		if (resultsFiles.length) setResultsAsContextValue();
	}, [resultsFiles]);

	useEffect(() => {
		if (authToken && isGApiLoaded && isGLoaded) listClickRef.current.click();
	}, [authToken, isGApiLoaded, isGLoaded]);

	/* ********************************************************* */

	function gapiLoaded() {
		gapi.load('client', initializeGapiClient);
	}

	async function initializeGapiClient() {
		await gapi.client.init({
			apiKey: API_KEY,
			discoveryDocs: [DISCOVERY_DOC],
		});
		setIsGApiLoaded(true);
	}

	function gisLoaded() {
		const tokenClient = google.accounts.oauth2.initTokenClient({
			client_id: CLIENT_ID,
			scope: SCOPES,
			callback: '',
		});
		setTokenClient(tokenClient);
		setIsGLoaded(true);
	}

	function handleAuthClick() {
		tokenClient.callback = async (resp: any) => {
			if (resp.error !== undefined) {
				throw resp;
			}
			const token = gapi.client.getToken().access_token;
			setAuthToken(token);
			getProfile();
			listResultsFiles();
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
		}
	}

	async function setResultsAsContextValue() {
		const resultsTemp = {};
		const profilesTemp = {};
		const isFinishedStatus = Array(resultsFiles.length).fill(false);
		resultsFiles.forEach((fileId, idx) =>
			getFile(fileId, idx, resultsTemp, profilesTemp, isFinishedStatus),
		);
	}

	async function listResultsFiles() {
		if (gapi.client.getToken() === null && authToken) {
			gapi.client.setToken({
				access_token: authToken,
			});
		}

		let response;
		try {
			response = await gapi.client.drive.files.list({
				pageSize: 1000,
				fields: 'files(id, name)',
				orderBy: 'name',
				q: `'${RESULTS_FOLDER_ID}' in parents`,
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

		let temp: string[] = [];
		files.forEach((file: any) => temp.push(file.id));
		setResultsFiles(temp);
	}

	async function getFile(
		fileId: string,
		idx: number,
		resultsTemp: any,
		profilesTemp: any,
		isFinishedStatus: any,
	) {
		console.log(fileId);
		try {
			const request = await gapi.client.drive.files.get({
				fileId: fileId,
				alt: 'media',
			});
			const content = request.body;
			let n = content.length;
			const buffer = new Uint8Array(n);

			while (n--) {
				buffer[n] = content.charCodeAt(n);
			}

			const file = new File([buffer], 'file', {
				type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
			});

			readResults(file, idx, resultsTemp, profilesTemp, isFinishedStatus);
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
				let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]) as any;
				console.log(JSON.stringify(rows));
			});
		};

		if (file !== null) reader.readAsBinaryString(file);
	}

	function readResults(
		file: any,
		idx: number,
		resultsTemp: any,
		profilesTemp: any,
		isFinishedStatus: any,
	) {
		let reader = new FileReader();

		reader.onload = function () {
			const data = reader.result;
			const workBook = XLSX.read(data, { type: 'binary' });

			let patientId = '';
			let name = '';
			let age = 0;
			let sex = '';

			const results = new Results();
			workBook.SheetNames.forEach((sheetName, i) => {
				const row = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName])[0] as any;
				if (row) {
					if (!i) {
						patientId = `${row.PatientID}`;
						name = row.이름;
						age = row.생년월일;
						sex = row.성별;
					}
					const testType = row.검사이름;
					if (testType === TestTypes.cardSorting) {
						const cardSorting = new CardSortingTest(row.TTtc, row.PEtc, row.NEtc);
						results.setCardSorting(cardSorting);
					}
					if (testType === TestTypes.wordColor) {
						const wordColor = new WordColorTest(row.TC1, row.TC2, row.TC5);
						results.setWordColor(wordColor);
					}
					if (testType === TestTypes.trailMaking) {
						const trailMaking = new TrailMakingTest(row.TC1, row.TC2);
						results.setTrailMaking(trailMaking);
					}
				}
			});

			const profiles = new Profiles(name, age, sex);
			profilesTemp[patientId] = profiles;
			resultsTemp[patientId] = results;
			isFinishedStatus[idx] = true;
			if (!isFinishedStatus.filter((v: boolean) => v === false).length) {
				resultsActions.updateResults(resultsTemp);
				profilesActions.updateProfiles(profilesTemp);
			}
		};

		if (file !== null) reader.readAsBinaryString(file);
	}

	function readProfiles(file: any) {}

	function readComments(file: any) {}

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
			const photo = response.result.picture;
			setProfilePhoto(photo);
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
			<DashBoardPage
				handleAuthClick={handleAuthClick}
				handleSignoutClick={handleSignoutClick}
				profilePhoto={profilePhoto}
				listResultsFiles={listResultsFiles}
			/>
			<AutoListResults onClick={listResultsFiles} ref={listClickRef} />
		</>
	);
}

const AutoListResults = styled.button`
	display: none;
`;
