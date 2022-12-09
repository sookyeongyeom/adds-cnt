import readCommentFile from './readCommentFile';

export default async function getCommentFile(gapi: any, fileId: string) {
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

		readCommentFile(file);
	} catch (e: any) {
		console.log(e.message);
	}
}
