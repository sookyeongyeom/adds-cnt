import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';

export default function DashBoardPatientsList() {
	return (
		<PatientsListContainer>
			<PatientsCount>총 0명</PatientsCount>
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
