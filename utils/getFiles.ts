export default async function getFiles(gapi: any, authToken: string, folderId: string) {
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
			q: `'${folderId}' in parents`,
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
		'--- Files ---\n',
	);
	console.log(output);

	return files.map((file: any) => [file.id, file.name]);
}
