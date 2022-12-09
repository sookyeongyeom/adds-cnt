export default function excelSerialDateToJSDate(excelSerialDate: number) {
	const daysBeforeUnixEpoch = 70 * 365 + 19;
	const hour = 60 * 60 * 1000;
	return new Date(Math.round((excelSerialDate - daysBeforeUnixEpoch) * 24 * hour) + 12 * hour);
}
