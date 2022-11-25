export default class Profiles {
	private name: string;
	private age: number;
	private sex: string;
	private school?: string;
	private date?: string;

	constructor(name: string, age: number, sex: string, school?: string, date?: string) {
		this.name = name;
		this.age = age;
		this.sex = sex;
		if (school) this.school = school;
		if (date) this.date = date;
	}

	getName() {
		return this.name;
	}

	getSchool() {
		return this.school;
	}

	getAge() {
		return this.age;
	}

	getSex() {
		return this.sex;
	}

	getDate() {
		return this.date;
	}
}
