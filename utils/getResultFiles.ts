import Keys from '../constants/keys';
import getResultFile from './getResultFile';
import { ResultsValueType } from '../@types/store';

export default async function getResultFiles(gapi: any, authToken: string) {
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
			q: `'${Keys.RESULTS_FOLDER_ID}' in parents`,
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

	const resultsTemp: ResultsValueType = {};
	const loadingSet = new Set<string>();

	files.forEach((file: any) => getResultFile(gapi, file.id, resultsTemp, loadingSet));
}
