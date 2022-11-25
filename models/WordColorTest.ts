export default class WordColorTest {
	private TC1: number;
	private TC2: number;
	private TC5: number;

	constructor(TC1: number, TC2: number, TC5: number) {
		this.TC1 = TC1;
		this.TC2 = TC2;
		this.TC5 = TC5;
	}

	getTC1() {
		return this.TC1;
	}

	getTC2() {
		return this.TC2;
	}

	getTC5() {
		return this.TC5;
	}
}
