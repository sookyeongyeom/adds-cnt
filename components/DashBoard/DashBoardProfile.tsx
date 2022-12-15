import DashBoardCategory from './DashBoardCategory';
import { SC } from '../../constants/styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export default function DashBoardProfile() {
	const focusId = useSelector(({ focusId }: RootState) => focusId);
	const profiles = useSelector(({ profiles }: RootState) => profiles);

	return (
		<DashBoardCategory title='Profile'>
			{Object.keys(profiles).length ? (
				<>
					<SC.CategoryLine>
						<SC.CategoryLabel>이름</SC.CategoryLabel>
						{profiles[focusId] && profiles[focusId].getName()}
					</SC.CategoryLine>
					<SC.CategoryLine>
						<SC.CategoryLabel>연령</SC.CategoryLabel>
						{profiles[focusId] && `만 ${profiles[focusId].getAge()}세`}
					</SC.CategoryLine>
					<SC.CategoryLine>
						<SC.CategoryLabel>성별</SC.CategoryLabel>
						{profiles[focusId] && profiles[focusId].getSex()}
					</SC.CategoryLine>
					<SC.CategoryLine>
						<SC.CategoryLabel>학교</SC.CategoryLabel>
						{profiles[focusId] && profiles[focusId].getSchool()}
					</SC.CategoryLine>
					<SC.CategoryLine>
						<SC.CategoryLabel>실시일</SC.CategoryLabel>
						{profiles[focusId] && profiles[focusId].getDate()}
					</SC.CategoryLine>
				</>
			) : (
				<SC.Guide>좌측 사이드바의 [파일선택]을 눌러 신상정보 파일을 선택해주세요</SC.Guide>
			)}
		</DashBoardCategory>
	);
}
