export default function deepCopyObject<T>(obj: object): T {
	return JSON.parse(JSON.stringify(obj));
}
