import { GraphTotalProps } from '../Graph/props';
export interface ReportTotalProps {
	page: number;
}

export interface ReportResultRowProps extends GraphTotalProps {
	title: string;
	titleEng: string;
	subtitle: string;
	comment?: string;
}
