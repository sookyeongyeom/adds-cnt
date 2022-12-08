import * as XLSX from 'xlsx';
import TestTypes from '../constants/tests';
import CardSortingTest from '../models/CardSortingTest';
import Profiles from '../models/Profiles';
import Results from '../models/Results';
import TrailMakingTest from '../models/TrailMakingTest';
import WordColorTest from '../models/WordColorTest';
import { setResults } from '../modules/results';
import { store } from '../pages/_app';
import { ProfilesValueType, ResultsValueType } from '../@types/context';
import { setProfiles } from '../modules/profiles';

export default function readResultFile(
	file: any,
	fileId: string,
	resultsTemp: ResultsValueType,
	profilesTemp: ProfilesValueType,
	loadingSet: Set<string>,
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

		resultsTemp[patientId] = results;
		profilesTemp[patientId] = profiles;
		loadingSet.delete(fileId);

		if (!loadingSet.size) {
			store.dispatch(setResults(resultsTemp));
			store.dispatch(setProfiles(profilesTemp));
		}
	};

	if (file !== null) reader.readAsBinaryString(file);
}
