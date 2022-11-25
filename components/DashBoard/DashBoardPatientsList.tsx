import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { useProfilesValue } from '../../contexts/ProfilesProviders';
import { useCurrentPatientActions } from '../../contexts/CurrentPatientProviders';

export default function DashBoardPatientsList() {
	const profilesValue = useProfilesValue();
	const currentPatientsActions = useCurrentPatientActions();

	return (
		<PatientsListContainer>
			<PatientsCount>총 {Object.keys(profilesValue).length}명</PatientsCount>
			<Patient />
			<Patient />
			<Patient />
		</PatientsListContainer>
	);
}

function Patient() {
	return <PatientContainer>쨔쟌</PatientContainer>;
}

const PatientsListContainer = styled.div``;

const PatientsCount = styled.div`
	${Fonts.subtitle16semibold}
	padding: 1.5rem;
	border-top: 0.1rem solid ${Colors.gray300};
	border-bottom: 0.1rem solid ${Colors.gray300};
	background-color: ${Colors.blue700};
	color: ${Colors.white};
`;

const PatientContainer = styled.div`
	background-color: white;
	padding: 2rem;
	border-bottom: 0.1rem solid ${Colors.gray300};
`;
