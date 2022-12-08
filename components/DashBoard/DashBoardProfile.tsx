import DashBoardCategory from './DashBoardCategory';
import { SC } from '../../constants/styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export default function DashBoardProfile() {
	const focusId = useSelector(({ focusId }: RootState) => focusId);
	const profiles = useSelector(({ profiles }: RootState) => profiles);

	return (
		<DashBoardCategory title='Profile'>
			<SC.CategoryLine>
				<SC.CategoryLabel>이름</SC.CategoryLabel>
				{profiles[focusId] && profiles[focusId].getName()}
			</SC.CategoryLine>
			<SC.CategoryLine>
				<SC.CategoryLabel>연령</SC.CategoryLabel>
				{profiles[focusId] && profiles[focusId].getAge()}
			</SC.CategoryLine>
			<SC.CategoryLine>
				<SC.CategoryLabel>성별</SC.CategoryLabel>
				{profiles[focusId] && profiles[focusId].getSex()}
			</SC.CategoryLine>
		</DashBoardCategory>
	);
}
