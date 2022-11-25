import styled from 'styled-components';
import DashBoardCategory from './DashBoardCategory';
import { useCurrentPatientValue } from '../../contexts/CurrentPatientProviders';
import { useProfilesValue } from '../../contexts/ProfilesProviders';

export default function DashBoardProfile() {
	const currentPatientValue = useCurrentPatientValue();
	const profilesValue = useProfilesValue();

	return (
		<DashBoardCategory title='Profile'>
			<div>
				{profilesValue[currentPatientValue] && profilesValue[currentPatientValue].getName()}
			</div>
			<div>{profilesValue[currentPatientValue] && profilesValue[currentPatientValue].getAge()}</div>
			<div>{profilesValue[currentPatientValue] && profilesValue[currentPatientValue].getSex()}</div>
		</DashBoardCategory>
	);
}
