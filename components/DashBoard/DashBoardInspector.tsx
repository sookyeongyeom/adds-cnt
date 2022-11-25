import styled from 'styled-components';
import Sizes from '../../constants/sizes';
import DashBoardComment from './DashBoardComment';
import DashBoardProfile from './DashBoardProfile';
import DashBoardResult from './DashBoardResult';
import DashBoardDrawer from './DashBoardDrawer';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { DashBoardExplorerAndInspectorProps } from './props';
import { useCurrentPatientValue } from '../../contexts/CurrentPatientProviders';
import { useProfilesValue } from '../../contexts/ProfilesProviders';

export default function DashBoardInspector({ isUIOpen }: DashBoardExplorerAndInspectorProps) {
	const currentPatientValue = useCurrentPatientValue();
	const profilesValue = useProfilesValue();

	return (
		<DashBoardDrawer isLeft={false} isUIOpen={isUIOpen}>
			<PatientMeta>
				{profilesValue[currentPatientValue] && profilesValue[currentPatientValue].getName()}
				<PatiendId>{currentPatientValue}</PatiendId>
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
