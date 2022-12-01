import styled from 'styled-components';
import ReportPage1 from './ReportPage1';
import { ReportTotalProps } from './props';
import ReportPage2 from './ReportPage2';
import ReportPage3 from './ReportPage3';

export default function ReportTotal({ page }: ReportTotalProps) {
	return (
		<TotalContainer>
			<ReportPage1 />
			<ReportPage2 />
			<ReportPage3 />
		</TotalContainer>
	);
}

const TotalContainer = styled.div`
	margin: 0 auto;

	div {
		background-color: pink;
		width: 210mm;
		height: 297mm;
		margin: 0 auto;
		margin-bottom: 3rem;

		@media print {
			margin: 0;
			box-shadow: none;
			/* 프린트 시 페이지 분리 */
			page-break-after: always;
			/* 프린트 시 백그라운드 색상 적용 */
			-webkit-print-color-adjust: exact;
		}
	}

	div:last-of-type {
		margin-bottom: 0;
	}
`;
