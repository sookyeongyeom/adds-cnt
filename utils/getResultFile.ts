import readResultFile from './readResultFile';
import { ResultsValueType } from '../@types/store';

export default async function getResultFile(
	gapi: any,
	fileId: string,
	resultsTemp: ResultsValueType,
	loadingSet: Set<string>,
) {
	try {
		loadingSet.add(fileId);

		const request = await gapi.client.drive.files.get({
			fileId: fileId,
			alt: 'media',
		});
		const content = request.body;
		let n = content.length;
		const buffer = new Uint8Array(n);

		while (n--) buffer[n] = content.charCodeAt(n);

		const file = new File([buffer], 'file', {
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		});

		readResultFile(file, fileId, resultsTemp, loadingSet);
	} catch (e: any) {
		console.log(e.message);
	}
}
