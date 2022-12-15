import styled from 'styled-components';
import DashBoardComment from './DashBoardComment';
import DashBoardProfile from './DashBoardProfile';
import DashBoardResult from './DashBoardResult';
import DashBoardDrawer from './DashBoardDrawer';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { SC } from '../../constants/styled';

export default function DashBoardInspector({ isUIOpen }: DashBoardInspectorProps) {
	const focusId = useSelector(({ focusId }: RootState) => focusId);
	const profiles = useSelector(({ profiles }: RootState) => profiles);
	const authToken = useSelector(({ google }: RootState) => google.authToken);
	const results = useSelector(({ results }: RootState) => results);

	return (
		<DashBoardDrawer isLeft={false} isUIOpen={isUIOpen}>
			{authToken !== '' ? (
				focusId ? (
					<>
						<S.PatientMeta>
							{profiles[focusId] && profiles[focusId].getName()}
							<S.PatiendId>{focusId}</S.PatiendId>
						</S.PatientMeta>
						<DashBoardProfile />
						<DashBoardResult />
						<DashBoardComment />
					</>
				) : !Object.keys(results).length ? (
					<SC.Guide>검사결과 파일들을 가져오는 중...</SC.Guide>
				) : Object.keys(profiles).length ? (
					<SC.Guide>좌측 사이드바에서 피험자를 선택해주세요</SC.Guide>
				) : (
					<SC.Guide>좌측 사이드바의 [파일선택]을 눌러 신상정보 파일을 선택해주세요</SC.Guide>
				)
			) : (
				<SC.Guide>관리자 계정으로 로그인해주세요</SC.Guide>
			)}
		</DashBoardDrawer>
	);
}

namespace S {
	export const PatientMeta = styled.div`
		${Fonts.heading24bold}
		padding: 2rem;
		border-bottom: 0.1rem solid ${Colors.gray300};
		display: flex;
		gap: 1rem;
	`;

	export const PatiendId = styled.div`
		${Fonts.subtitle14medium}
		align-self: flex-end;
	`;
}
