import * as XLSX from 'xlsx';
import { store } from '../pages/_app';
import { CommentsValueType } from '../@types/store';
import TestTypes from '../constants/tests';
import Comments from '../models/Comments';
import { setComments } from '../modules/comments';

export default function readCommentFile(file: any) {
	let reader = new FileReader();

	reader.onload = function () {
		const data = reader.result;
		const workBook = XLSX.read(data, { type: 'binary' });

		workBook.SheetNames.forEach((sheetName) => {
			const rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
			const commentsTemp: CommentsValueType = {};

			rows.forEach((row: any) => {
				const patientId = `${row.PatientID}`;
				const span = row[TestTypes.span];
				const wordColor = row[TestTypes.wordColor];
				const trailMaking = row[TestTypes.trailMaking];
				const total = row.Conclusion;

				const comments = new Comments(span, wordColor, trailMaking, total);
				commentsTemp[patientId] = comments;
			});

			store.dispatch(setComments(commentsTemp));
		});
	};

	if (file !== null) reader.readAsBinaryString(file);
}
