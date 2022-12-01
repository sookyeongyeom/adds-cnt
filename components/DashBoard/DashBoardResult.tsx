import DashBoardCategory from './DashBoardCategory';
import { useResultsValue } from '../../contexts/ResultsProviders';
import { useCurrentPatientValue } from '../../contexts/CurrentPatientProviders';
import { CategoryLabel, CategoryLine, CategorySection } from '../../constants/styled';

export default function DashBoardResult() {
	const resultsValue = useResultsValue();
	const currentPatientValue = useCurrentPatientValue();

	return (
		<DashBoardCategory title='Result'>
			<CategorySection>
				<div>Card Sorting</div>
				<CategoryLine>
					<CategoryLabel>TTtc</CategoryLabel>
					{resultsValue[currentPatientValue] &&
						resultsValue[currentPatientValue].getCardSorting()?.getTTtc()}
				</CategoryLine>
				<CategoryLine>
					<CategoryLabel>PEtc</CategoryLabel>
					{resultsValue[currentPatientValue] &&
						resultsValue[currentPatientValue].getCardSorting()?.getPEtc()}
				</CategoryLine>
				<CategoryLine>
					<CategoryLabel>NEtc</CategoryLabel>
					{resultsValue[currentPatientValue] &&
						resultsValue[currentPatientValue].getCardSorting()?.getNEtc()}
				</CategoryLine>
			</CategorySection>
			<CategorySection>
				<div>Word Color</div>
				<CategoryLine>
					<CategoryLabel>TC1</CategoryLabel>
					{resultsValue[currentPatientValue] &&
						resultsValue[currentPatientValue].getWordColor()?.getTC1()}
				</CategoryLine>
				<CategoryLine>
					<CategoryLabel>TC2</CategoryLabel>
					{resultsValue[currentPatientValue] &&
						resultsValue[currentPatientValue].getWordColor()?.getTC2()}
				</CategoryLine>
				<CategoryLine>
					<CategoryLabel>TC5</CategoryLabel>
					{resultsValue[currentPatientValue] &&
						resultsValue[currentPatientValue].getWordColor()?.getTC5()}
				</CategoryLine>
			</CategorySection>
			<CategorySection>
				<div>Trail Making</div>
				<CategoryLine>
					<CategoryLabel>TC1</CategoryLabel>
					{resultsValue[currentPatientValue] &&
						resultsValue[currentPatientValue].getTrailMaking()?.getTC1()}
				</CategoryLine>
				<CategoryLine>
					<CategoryLabel>TC2</CategoryLabel>
					{resultsValue[currentPatientValue] &&
						resultsValue[currentPatientValue].getTrailMaking()?.getTC2()}
				</CategoryLine>
			</CategorySection>
		</DashBoardCategory>
	);
}
