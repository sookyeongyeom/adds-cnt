import styled from 'styled-components';
import Sizes from '../../constants/sizes';
import DashBoardComment from './DashBoardComment';
import DashBoardProfile from './DashBoardProfile';
import DashBoardResult from './DashBoardResult';
import DashBoardDrawer from './DashBoardDrawer';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { DashBoardExplorerAndInspectorProps } from './props';

export default function DashBoardInspector({ isUIOpen }: DashBoardExplorerAndInspectorProps) {
	return (
		<DashBoardDrawer isLeft={false} isUIOpen={isUIOpen}>
			<PatientMeta>
				이아름<PatiendId>020993</PatiendId>
			</PatientMeta>
			<DashBoardProfile />
			<DashBoardResult />
			<DashBoardComment />
		</DashBoardDrawer>
	);
}

const PatientMeta = styled.div`
	${Fonts.heading24bold}
	padding: 2rem;
	border-bottom: 0.1rem solid ${Colors.gray300};
	display: flex;
	gap: 1rem;
`;

const PatiendId = styled.div`
	${Fonts.subtitle14medium}
	align-self: flex-end;
`;
