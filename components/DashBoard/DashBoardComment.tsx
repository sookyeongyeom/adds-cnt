import { SC } from '../../constants/styled';
import DashBoardCategory from './DashBoardCategory';

export default function DashBoardComment() {
	return (
		<DashBoardCategory title='Result'>
			<SC.CategorySection>
				<div>Card Sorting</div>
			</SC.CategorySection>
			<SC.CategorySection>
				<div>Word Color</div>
			</SC.CategorySection>
			<SC.CategorySection>
				<div>Trail Making</div>
			</SC.CategorySection>
			<SC.CategorySection>
				<div>전체 요약</div>
			</SC.CategorySection>
		</DashBoardCategory>
	);
}
