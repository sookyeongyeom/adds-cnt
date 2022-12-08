import DashBoardCategory from './DashBoardCategory';
import { CategoryLabel, CategoryLine } from '../../constants/styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export default function DashBoardProfile() {
	const focusId = useSelector(({ focusId }: RootState) => focusId);
	const profiles = useSelector(({ profiles }: RootState) => profiles);

	return (
		<DashBoardCategory title='Profile'>
			<CategoryLine>
				<CategoryLabel>이름</CategoryLabel>
				{profiles[focusId] && profiles[focusId].getName()}
			</CategoryLine>
			<CategoryLine>
				<CategoryLabel>연령</CategoryLabel>
				{profiles[focusId] && profiles[focusId].getAge()}
			</CategoryLine>
			<CategoryLine>
				<CategoryLabel>성별</CategoryLabel>
				{profiles[focusId] && profiles[focusId].getSex()}
			</CategoryLine>
		</DashBoardCategory>
	);
}
