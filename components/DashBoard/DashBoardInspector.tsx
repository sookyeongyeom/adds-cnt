import styled from 'styled-components';
import DashBoardComment from './DashBoardComment';
import DashBoardProfile from './DashBoardProfile';
import DashBoardResult from './DashBoardResult';
import DashBoardDrawer from './DashBoardDrawer';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export default function DashBoardInspector({ isUIOpen }: DashBoardInspectorProps) {
	const focusId = useSelector(({ focusId }: RootState) => focusId);
	const profiles = useSelector(({ profiles }: RootState) => profiles);

	return (
		<DashBoardDrawer isLeft={false} isUIOpen={isUIOpen}>
			{focusId ? (
				<>
					<S.PatientMeta>
						{profiles[focusId] && profiles[focusId].getName()}
						<S.PatiendId>{focusId}</S.PatiendId>
					</S.PatientMeta>
					<DashBoardProfile />
					<DashBoardResult />
					<DashBoardComment />
				</>
			) : (
				'좌측 사이드바에서 피험자를 선택해주세요.'
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
