import styled from 'styled-components';
import DashBoardCategory from './DashBoardCategory';
import { useResultsValue } from '../../contexts/ResultsProviders';
import { useCurrentPatientValue } from '../../contexts/CurrentPatientProviders';

export default function DashBoardResult() {
	const resultsValue = useResultsValue();
	const currentPatientValue = useCurrentPatientValue();

	return (
		<DashBoardCategory title='Result'>
			<div>Card Sorting</div>
			<div>
				{resultsValue[currentPatientValue] &&
					resultsValue[currentPatientValue].getCardSorting()?.getTTtc()}
			</div>
			<div>
				{resultsValue[currentPatientValue] &&
					resultsValue[currentPatientValue].getCardSorting()?.getPEtc()}
			</div>
			<div>
				{resultsValue[currentPatientValue] &&
					resultsValue[currentPatientValue].getCardSorting()?.getNEtc()}
			</div>
			<div>Word Color</div>
			<div>
				{resultsValue[currentPatientValue] &&
					resultsValue[currentPatientValue].getWordColor()?.getTC1()}
			</div>
			<div>
				{resultsValue[currentPatientValue] &&
					resultsValue[currentPatientValue].getWordColor()?.getTC2()}
			</div>
			<div>
				{resultsValue[currentPatientValue] &&
					resultsValue[currentPatientValue].getWordColor()?.getTC5()}
			</div>
			<div>Trail Making</div>
			<div>
				{resultsValue[currentPatientValue] &&
					resultsValue[currentPatientValue].getTrailMaking()?.getTC1()}
			</div>
			<div>
				{resultsValue[currentPatientValue] &&
					resultsValue[currentPatientValue].getTrailMaking()?.getTC2()}
			</div>
		</DashBoardCategory>
	);
}
