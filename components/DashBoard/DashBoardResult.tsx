import DashBoardCategory from './DashBoardCategory';
import { SC } from '../../constants/styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export default function DashBoardResult() {
	const focusId = useSelector(({ focusId }: RootState) => focusId);
	const results = useSelector(({ results }: RootState) => results);

	return (
		<DashBoardCategory title='Result'>
			<SC.CategorySection>
				<div>Visual Span Test</div>
				<SC.CategoryLine>
					<SC.CategoryLabel>Rtc</SC.CategoryLabel>
					{results[focusId] && results[focusId].getVisualSpan()?.getRtc()}
				</SC.CategoryLine>
				<SC.CategoryLine>
					<SC.CategoryLabel>Itc</SC.CategoryLabel>
					{results[focusId] && results[focusId].getVisualSpan()?.getItc()}
				</SC.CategoryLine>
			</SC.CategorySection>
			<SC.CategorySection>
				<div>Digit Span Test</div>
				<SC.CategoryLine>
					<SC.CategoryLabel>Rtc</SC.CategoryLabel>
					{results[focusId] && results[focusId].getDigitSpan()?.getRtc()}
				</SC.CategoryLine>
				<SC.CategoryLine>
					<SC.CategoryLabel>Itc</SC.CategoryLabel>
					{results[focusId] && results[focusId].getDigitSpan()?.getItc()}
				</SC.CategoryLine>
			</SC.CategorySection>
			<SC.CategorySection>
				<div>Word Color</div>
				<SC.CategoryLine>
					<SC.CategoryLabel>TC1</SC.CategoryLabel>
					{results[focusId] && results[focusId].getWordColor()?.getTC1()}
				</SC.CategoryLine>
				<SC.CategoryLine>
					<SC.CategoryLabel>TC2</SC.CategoryLabel>
					{results[focusId] && results[focusId].getWordColor()?.getTC2()}
				</SC.CategoryLine>
				<SC.CategoryLine>
					<SC.CategoryLabel>TC5</SC.CategoryLabel>
					{results[focusId] && results[focusId].getWordColor()?.getTC5()}
				</SC.CategoryLine>
			</SC.CategorySection>
			<SC.CategorySection>
				<div>Trail Making</div>
				<SC.CategoryLine>
					<SC.CategoryLabel>TC1</SC.CategoryLabel>
					{results[focusId] && results[focusId].getTrailMaking()?.getTC1()}
				</SC.CategoryLine>
				<SC.CategoryLine>
					<SC.CategoryLabel>TC2</SC.CategoryLabel>
					{results[focusId] && results[focusId].getTrailMaking()?.getTC2()}
				</SC.CategoryLine>
			</SC.CategorySection>
		</DashBoardCategory>
	);
}
