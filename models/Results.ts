import WordColorTest from './WordColorTest';
import TrailMakingTest from './TrailMakingTest';
import SpanTest from './SpanTest';

export default class Results {
	private wordColor: WordColorTest | null;
	private trailMaking: TrailMakingTest | null;
	private visualSpan: SpanTest | null;
	private digitSpan: SpanTest | null;

	constructor() {
		this.wordColor = null;
		this.trailMaking = null;
		this.visualSpan = null;
		this.digitSpan = null;
	}

	/**
	 * Setter
	 */

	setVisualSpan(visualSpan: SpanTest) {
		this.visualSpan = visualSpan;
	}

	setDigitSpan(digitSpan: SpanTest) {
		this.digitSpan = digitSpan;
	}

	setWordColor(wordColor: WordColorTest) {
		this.wordColor = wordColor;
	}

	setTrailMaking(trailMaking: TrailMakingTest) {
		this.trailMaking = trailMaking;
	}

	/**
	 * Getter
	 */

	getVisualSpan() {
		return this.visualSpan;
	}

	getDigitSpan() {
		return this.digitSpan;
	}

	getWordColor() {
		return this.wordColor;
	}

	getTrailMaking() {
		return this.trailMaking;
	}
}
