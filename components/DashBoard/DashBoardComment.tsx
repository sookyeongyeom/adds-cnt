import { CategorySection } from '../../constants/styled';
import DashBoardCategory from './DashBoardCategory';

export default function DashBoardComment() {
	return (
		<DashBoardCategory title='Result'>
			<CategorySection>
				<div>Card Sorting</div>
			</CategorySection>
			<CategorySection>
				<div>Word Color</div>
			</CategorySection>
			<CategorySection>
				<div>Trail Making</div>
			</CategorySection>
			<CategorySection>
				<div>전체 요약</div>
			</CategorySection>
		</DashBoardCategory>
	);
}
