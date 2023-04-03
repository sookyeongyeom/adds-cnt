import { SC } from '../../constants/styled';
import GraphTotal from '../Graph/GraphTotal';
import { SpanLabels } from '../../constants/tests';
import styled from 'styled-components';
import Fonts from '../../constants/fonts';

export default function ReportResultRow({
	title,
	titleEng,
	subtitle,
	comment,
	visualRtc,
	visualItc,
	digitRtc,
	digitItc,
}: ReportSpanRowProps) {
	const graphCoefficient = 0.67;
	return (
		<S.ResultRow>
			<section>
				<h1>
					{title} <span>{titleEng}</span>
				</h1>
				<h2>{subtitle}</h2>
			</section>
			<div>
				<section>
					<h3>시각주의력 및 작업기억력</h3>
					<h3>청각주의력 및 작업기억력</h3>
				</section>
				<section>
					<GraphTotal
						label1={SpanLabels.Rtc}
						label2={SpanLabels.Itc}
						value1={visualRtc}
						value2={visualItc}
						graphCoefficient={graphCoefficient}
					/>
					<GraphTotal
						label1={SpanLabels.Rtc}
						label2={SpanLabels.Itc}
						value1={digitRtc}
						value2={digitItc}
						graphCoefficient={graphCoefficient}
					/>
				</section>
				<section>
					<h1>결과 해석</h1>
					<pre>{comment}</pre>
				</section>
			</div>
		</S.ResultRow>
	);
}

namespace S {
	export const ResultRow = styled(SC.ResultRow)`
		> div {
			flex-direction: column;
		}

		> div > section:first-of-type {
			width: 100%;
			display: flex;
			justify-content: space-around;
			margin-top: 0.2rem;

			> h3 {
				${Fonts.subtitle14medium}
			}
		}

		> div > section:nth-of-type(2) {
			width: 100%;
			display: flex;
			flex-direction: row;

			> * {
				flex-grow: 1;
				height: 14rem;
			}
		}

		> div > section:last-of-type {
			width: 100%;
			height: 11.7rem;
			margin-top: 1.2rem;
		}
	`;
}
