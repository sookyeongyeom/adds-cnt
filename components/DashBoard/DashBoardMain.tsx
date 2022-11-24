import styled from 'styled-components';
import Sizes from '../../constants/sizes';
import ReportTotal from '../Report/ReportTotal';

export default function DashBoardMain() {
	return (
		<MainContainer>
			<ReportTotal></ReportTotal>
		</MainContainer>
	);
}

const MainContainer = styled.div`
	width: 100vw;
	padding-top: calc(${Sizes.headerHeight} + 3rem);
	padding-bottom: 3rem;
	text-align: center;
`;
