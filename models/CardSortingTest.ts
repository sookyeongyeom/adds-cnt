export default class CardSortingTest {
	private TTtc: number;
	private PEtc: number;
	private NEtc: number;

	constructor(TTtc: number, PEtc: number, NEtc: number) {
		this.TTtc = TTtc;
		this.PEtc = PEtc;
		this.NEtc = NEtc;
	}

	getTTtc() {
		return this.TTtc;
	}

	getPEtc() {
		return this.PEtc;
	}

	getNEtc() {
		return this.NEtc;
	}
}
