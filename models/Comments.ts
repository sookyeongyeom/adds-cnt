export default class Comments {
	private cardSortingComment: string;
	private wordColorComment: string;
	private trailMakingComment: string;
	private totalComment: string;

	constructor(
		cardSortingComment: string,
		wordColorComment: string,
		trailMakingComment: string,
		totalComment: string,
	) {
		this.cardSortingComment = cardSortingComment;
		this.wordColorComment = wordColorComment;
		this.trailMakingComment = trailMakingComment;
		this.totalComment = totalComment;
	}

	getCardSortingComment() {
		return this.cardSortingComment;
	}

	getWordColorComment() {
		return this.wordColorComment;
	}

	getTrailMakingComment() {
		return this.trailMakingComment;
	}

	getTotalComment() {
		return this.totalComment;
	}
}
