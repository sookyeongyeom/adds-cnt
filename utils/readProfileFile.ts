import * as XLSX from 'xlsx';
import Profiles from '../models/Profiles';
import { store } from '../pages/_app';
import { setProfiles } from '../modules/profiles';
import { ProfilesValueType } from '../@types/context';

export default function readProfileFile(file: any) {
	let reader = new FileReader();

	reader.onload = function () {
		const data = reader.result;
		const workBook = XLSX.read(data, { type: 'binary' });

		workBook.SheetNames.forEach((sheetName) => {
			const rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
			const profilesTemp: ProfilesValueType = {};

			rows.forEach((row: any) => {
				const patientId = `${row.PatientID}`;
				const name = row.이름;
				const age = row.생년월일;
				const sex = row.성별;
				const school = row.학교;
				const date = row.실시일;

				const profiles = new Profiles(name, age, sex, school, date);
				profilesTemp[patientId] = profiles;
			});

			store.dispatch(setProfiles(profilesTemp));
		});
	};

	if (file !== null) reader.readAsBinaryString(file);
}
