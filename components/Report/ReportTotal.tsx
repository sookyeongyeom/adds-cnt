import styled from 'styled-components';
import ReportPage1 from './ReportPage1';
import ReportPage2 from './ReportPage2';
import ReportPage3 from './ReportPage3';
import Colors from '../../constants/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export default function ReportTotal() {
	const focusId = useSelector(({ focusId }: RootState) => focusId);
	const scale = useSelector(({ scale }: RootState) => scale);

	return (
		<S.TotalContainer scale={scale}>
			{focusId && (
				<>
					<ReportPage1 />
					<ReportPage2 />
					<ReportPage3 />
				</>
			)}
		</S.TotalContainer>
	);
}

namespace S {
	export const TotalContainer = styled.div<ZoomScaleProps>`
		margin: 0 auto;
		transform: ${(props) => `scale(${props.scale}%)`};
		transform-origin: center top;

		@media print {
			transform: none;
		}

		> div {
			width: 210mm;
			height: 297mm;
			margin: 0 auto;
			margin-bottom: 3rem;
			position: relative;
			overflow: hidden;
			background-color: ${Colors.white};

			@media print {
				margin: 0;
				box-shadow: none;
				/* 프린트 시 페이지 분리 */
				page-break-after: always;
				/* 프린트 시 백그라운드 색상 적용 */
				-webkit-print-color-adjust: exact;
			}
		}

		> div:last-of-type {
			margin-bottom: 0;

			@media print {
				/* 마지막 빈 페이지 방지 */
				page-break-after: auto;
			}
		}
	`;
}
