import styled from 'styled-components';
import DashBoardExplorer from './DashBoardExplorer';
import DashBoardHeader from './DashBoardHeader';
import DashBoardInspector from './DashBoardInspector';
import DashBoardMain from './DashBoardMain';
import Colors from '../../constants/colors';
import { DashBoardPageProps } from './props';
import { useState } from 'react';

export default function DashBoardPage({ handleAuthClick }: DashBoardPageProps) {
	const [isUIOpen, SetIsUIOpen] = useState(true);

	const onClickToggleUI = () => {
		SetIsUIOpen(!isUIOpen);
	};

	return (
		<PageContainer>
			<DashBoardHeader handleAuthClick={handleAuthClick} onClickToggleUI={onClickToggleUI} />
			<DashBoardExplorer isUIOpen={isUIOpen} />
			<DashBoardMain />
			<DashBoardInspector isUIOpen={isUIOpen} />
		</PageContainer>
	);
}

const PageContainer = styled.div`
	width: 100vw;
	min-height: 100vh;
	position: relative;
	background-color: ${Colors.background};
`;
