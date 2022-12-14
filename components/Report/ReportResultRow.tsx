import { SC } from '../../constants/styled';
import GraphTotal from '../Graph/GraphTotal';

export default function ReportResultRow({
	title,
	titleEng,
	subtitle,
	comment,
	label1,
	label2,
	label3,
	value1,
	value2,
	value3,
}: ReportResultRowProps) {
	return (
		<SC.ResultRow>
			<section>
				<h1>
					{title} <span>{titleEng}</span>
				</h1>
				<h2>{subtitle}</h2>
			</section>
			<div>
				<section>
					<GraphTotal
						label1={label1}
						label2={label2}
						label3={label3}
						value1={value1}
						value2={value2}
						value3={value3}
					/>
				</section>
				<section>
					<h1>결과 해석</h1>
					<pre>{comment}</pre>
				</section>
			</div>
		</SC.ResultRow>
	);
}
