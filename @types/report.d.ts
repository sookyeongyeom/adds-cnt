/**
 * @for ReportResultRow
 * @by ReportPage2
 * @by ReportPage3 */
type ReportResultRowProps = GraphTotalProps & {
	title: string;
	titleEng: string;
	subtitle: string;
	comment?: string;
};

/**
 * @for ReportSpanRow
 * @by ReportPage2 */
type ReportSpanRowProps = {
	visualRtc: number;
	visualItc: number;
	digitRtc: number;
	digitItc: number;
	title: string;
	titleEng: string;
	subtitle: string;
	comment?: string;
};
