import { useSelector } from 'react-redux';
import { SC } from '../../constants/styled';
import { RootState } from '../../modules';
import DashBoardCategory from './DashBoardCategory';

export default function DashBoardComment() {
	const focusId = useSelector(({ focusId }: RootState) => focusId);
	const comments = useSelector(({ comments }: RootState) => comments);

	return (
		<DashBoardCategory title='Result'>
			<SC.CategorySection>
				<div>Card Sorting</div>
				{comments[focusId] && comments[focusId].getCardSortingComment()}
			</SC.CategorySection>
			<SC.CategorySection>
				<div>Word Color</div>
				{comments[focusId] && comments[focusId].getWordColorComment()}
			</SC.CategorySection>
			<SC.CategorySection>
				<div>Trail Making</div>
				{comments[focusId] && comments[focusId].getTrailMakingComment()}
			</SC.CategorySection>
			<SC.CategorySection>
				<div>전체 요약</div>
				{comments[focusId] && comments[focusId].getTotalComment()}
			</SC.CategorySection>
		</DashBoardCategory>
	);
}
