export default class Comments {
	private spanComment: string;
	private wordColorComment: string;
	private trailMakingComment: string;
	private totalComment: string;

	constructor(
		spanComment: string,
		wordColorComment: string,
		trailMakingComment: string,
		totalComment: string,
	) {
		this.spanComment = spanComment;
		this.wordColorComment = wordColorComment;
		this.trailMakingComment = trailMakingComment;
		this.totalComment = totalComment;
	}

	getSpanComment() {
		return this.spanComment;
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
