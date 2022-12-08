import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { PatientProps } from './props';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules/index';
import { selectFocusId } from '../../modules/focusId';

export default function DashBoardPatientsList() {
	const profiles = useSelector(({ profiles }: RootState) => profiles);

	return (
		<PatientsListContainer>
			<PatientsCount>총 {Object.keys(profiles).length}명</PatientsCount>
			{Object.keys(profiles).map((v, i) => (
				<Patient key={i} patientId={v}>
					{v} {profiles[v].getName()}
				</Patient>
			))}
		</PatientsListContainer>
	);
}

function Patient({ children, patientId }: PatientProps) {
	const dispatch = useDispatch();

	const onfocus = (patientId: string) => {
		dispatch(selectFocusId(patientId));
	};

	return <PatientContainer onClick={() => onfocus(patientId)}>{children}</PatientContainer>;
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
	cursor: pointer;
`;
