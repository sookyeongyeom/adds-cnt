import * as XLSX from 'xlsx';
import Profiles from '../models/Profiles';
import { store } from '../pages/_app';
import { setProfiles } from '../modules/profiles';
import { ProfilesValueType } from '../@types/store';
import excelSerialDateToJSDate from './excelSerialDateToJSDate';
import calculateAge from './calculateAge';

export default function readProfileFile(file: any) {
	let reader = new FileReader();

	reader.onload = function () {
		const data = reader.result;
		const workBook = XLSX.read(data, { type: 'binary' });

		workBook.SheetNames.forEach((sheetName) => {
			const rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
			const profilesTemp: ProfilesValueType = {};

			rows.forEach((row: any, i) => {
				const patientId = row.PatientID;
				const name = row.이름;
				const birthDate = excelSerialDateToJSDate(row.생년월일);
				const age = calculateAge(birthDate);
				const sex = row.성별;
				const school = row.학교;
				// const [month, day, year] = excelSerialDateToJSDate(row.실시일)
				// 	.toLocaleDateString()
				// 	.split('/');
				// if (month && day && year)
				// 	date = year + '-' + month.padStart(2, '0') + '-' + day.padStart(2, '0');

				let date = '';
				try {
					date = excelSerialDateToJSDate(row.실시일).toLocaleDateString('ko-KR').slice(0, -1);
				} catch (e) {
					console.log(e);
					date = 'Parse Failed';
				}

				if (!i) {
					console.log(row);
					console.log(row.실시일);
					console.log(excelSerialDateToJSDate(row.실시일));
					console.log(date);
				}

				const profiles = new Profiles(name, age, sex, school, date);
				console.log(profiles);
				profilesTemp[patientId] = profiles;
			});

			store.dispatch(setProfiles(profilesTemp));
		});
	};

	if (file !== null) reader.readAsBinaryString(file);
}
