import readProfileFile from './readProfileFile';

export default async function getProfileFile(gapi: any, fileId: string) {
	try {
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

		readProfileFile(file);
	} catch (e: any) {
		console.log(e.message);
	}
}
