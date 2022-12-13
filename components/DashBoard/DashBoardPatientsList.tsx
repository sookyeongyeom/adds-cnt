import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules/index';
import { selectFocusId } from '../../modules/focusId';

export default function DashBoardPatientsList() {
	const results = useSelector(({ results }: RootState) => results);
	const profiles = useSelector(({ profiles }: RootState) => profiles);

	return (
		<S.PatientsListContainer>
			<S.PatientsCount>총 {Object.keys(results).length}명</S.PatientsCount>
			{Object.keys(results).map((patientId, i) => (
				<Patient key={i} patientId={patientId}>
					{patientId} {profiles[patientId] && profiles[patientId].getName()}
				</Patient>
			))}
		</S.PatientsListContainer>
	);
}

function Patient({ children, patientId }: PatientProps) {
	const dispatch = useDispatch();

	const onfocus = (patientId: string) => {
		dispatch(selectFocusId(patientId));
	};

	return <S.PatientContainer onClick={() => onfocus(patientId)}>{children}</S.PatientContainer>;
}

namespace S {
	export const PatientsListContainer = styled.div``;

	export const PatientsCount = styled.div`
		${Fonts.subtitle16semibold}
		padding: 1.5rem;
		border-top: 0.1rem solid ${Colors.gray300};
		border-bottom: 0.1rem solid ${Colors.gray300};
		background-color: ${Colors.blue700};
		color: ${Colors.white};
	`;

	export const PatientContainer = styled.div`
		background-color: white;
		padding: 2rem;
		border-bottom: 0.1rem solid ${Colors.gray300};
		cursor: pointer;
	`;
}
