import DashBoardCategory from './DashBoardCategory';
import { CategoryLabel, CategoryLine, CategorySection } from '../../constants/styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export default function DashBoardResult() {
	const focusId = useSelector(({ focusId }: RootState) => focusId);
	const results = useSelector(({ results }: RootState) => results);

	return (
		<DashBoardCategory title='Result'>
			<CategorySection>
				<div>Card Sorting</div>
				<CategoryLine>
					<CategoryLabel>TTtc</CategoryLabel>
					{results[focusId] && results[focusId].getCardSorting()?.getTTtc()}
				</CategoryLine>
				<CategoryLine>
					<CategoryLabel>PEtc</CategoryLabel>
					{results[focusId] && results[focusId].getCardSorting()?.getPEtc()}
				</CategoryLine>
				<CategoryLine>
					<CategoryLabel>NEtc</CategoryLabel>
					{results[focusId] && results[focusId].getCardSorting()?.getNEtc()}
				</CategoryLine>
			</CategorySection>
			<CategorySection>
				<div>Word Color</div>
				<CategoryLine>
					<CategoryLabel>TC1</CategoryLabel>
					{results[focusId] && results[focusId].getWordColor()?.getTC1()}
				</CategoryLine>
				<CategoryLine>
					<CategoryLabel>TC2</CategoryLabel>
					{results[focusId] && results[focusId].getWordColor()?.getTC2()}
				</CategoryLine>
				<CategoryLine>
					<CategoryLabel>TC5</CategoryLabel>
					{results[focusId] && results[focusId].getWordColor()?.getTC5()}
				</CategoryLine>
			</CategorySection>
			<CategorySection>
				<div>Trail Making</div>
				<CategoryLine>
					<CategoryLabel>TC1</CategoryLabel>
					{results[focusId] && results[focusId].getTrailMaking()?.getTC1()}
				</CategoryLine>
				<CategoryLine>
					<CategoryLabel>TC2</CategoryLabel>
					{results[focusId] && results[focusId].getTrailMaking()?.getTC2()}
				</CategoryLine>
			</CategorySection>
		</DashBoardCategory>
	);
}
