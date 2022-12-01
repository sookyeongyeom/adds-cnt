import DashBoardCategory from './DashBoardCategory';
import { useCurrentPatientValue } from '../../contexts/CurrentPatientProviders';
import { useProfilesValue } from '../../contexts/ProfilesProviders';
import { CategoryLabel, CategoryLine } from '../../constants/styled';

export default function DashBoardProfile() {
	const currentPatientValue = useCurrentPatientValue();
	const profilesValue = useProfilesValue();

	return (
		<DashBoardCategory title='Profile'>
			<CategoryLine>
				<CategoryLabel>이름</CategoryLabel>
				{profilesValue[currentPatientValue] && profilesValue[currentPatientValue].getName()}
			</CategoryLine>
			<CategoryLine>
				<CategoryLabel>연령</CategoryLabel>
				{profilesValue[currentPatientValue] && profilesValue[currentPatientValue].getAge()}
			</CategoryLine>
			<CategoryLine>
				<CategoryLabel>성별</CategoryLabel>
				{profilesValue[currentPatientValue] && profilesValue[currentPatientValue].getSex()}
			</CategoryLine>
		</DashBoardCategory>
	);
}
