import CardSortingTest from './CardSortingTest';
import WordColorTest from './WordColorTest';
import TrailMakingTest from './TrailMakingTest';

export default class Results {
	private cardSorting: CardSortingTest | null;
	private wordColor: WordColorTest | null;
	private trailMaking: TrailMakingTest | null;

	constructor() {
		this.cardSorting = null;
		this.wordColor = null;
		this.trailMaking = null;
	}

	setCardSorting(cardSorting: CardSortingTest) {
		this.cardSorting = cardSorting;
	}

	setWordColor(wordColor: WordColorTest) {
		this.wordColor = wordColor;
	}

	setTrailMaking(trailMaking: TrailMakingTest) {
		this.trailMaking = trailMaking;
	}

	getCardSorting() {
		return this.cardSorting;
	}

	getWordColor() {
		return this.wordColor;
	}

	getTrailMaking() {
		return this.trailMaking;
	}
}
