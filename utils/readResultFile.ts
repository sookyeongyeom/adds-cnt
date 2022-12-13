import * as XLSX from 'xlsx';
import TestTypes from '../constants/tests';
import CardSortingTest from '../models/CardSortingTest';
import Results from '../models/Results';
import TrailMakingTest from '../models/TrailMakingTest';
import WordColorTest from '../models/WordColorTest';
import { setResults } from '../modules/results';
import { store } from '../pages/_app';
import { ResultsValueType } from '../@types/store';

export default function readResultFile(
	file: any,
	fileId: string,
	resultsTemp: ResultsValueType,
	loadingSet: Set<string>,
) {
	let reader = new FileReader();

	reader.onload = function () {
		const data = reader.result;
		const workBook = XLSX.read(data, { type: 'binary' });

		let patientId = '';
		const results = new Results();
		workBook.SheetNames.forEach((sheetName, i) => {
			const row = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName])[0] as any;
			if (row) {
				patientId = `${row.PatientID}`;
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

		resultsTemp[patientId] = results;
		loadingSet.delete(fileId);

		if (!loadingSet.size) store.dispatch(setResults(resultsTemp));
	};

	if (file !== null) reader.readAsBinaryString(file);
}
