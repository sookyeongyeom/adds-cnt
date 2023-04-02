export default class SpanTest {
	private Rtc: number;
	private Itc: number;

	constructor(Rtc: number, Itc: number) {
		this.Rtc = Rtc;
		this.Itc = Itc;
	}

	getRtc() {
		return this.Rtc;
	}

	getItc() {
		return this.Itc;
	}
}
