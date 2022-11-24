import styled from 'styled-components';
import DashBoardExplorer from './DashBoardExplorer';
import DashBoardHeader from './DashBoardHeader';
import DashBoardInspector from './DashBoardInspector';
import DashBoardMain from './DashBoardMain';
import Colors from '../../constants/colors';
import { DashBoardPageProps } from './props';
import { useState } from 'react';
import DashBoardSelectModal from './DashBoardSelectModal';

export default function DashBoardPage({ handleAuthClick }: DashBoardPageProps) {
	const [isUIOpen, SetIsUIOpen] = useState(true);
	const [isOpenSelectModal, setIsOpenSelectModal] = useState(false);

	const onClickToggleUI = () => {
		SetIsUIOpen(!isUIOpen);
	};

	const onClickOpenSelect = () => setIsOpenSelectModal(true);
	const onClickCloseSelect = () => setIsOpenSelectModal(false);

	return (
		<PageContainer>
			<DashBoardHeader handleAuthClick={handleAuthClick} onClickToggleUI={onClickToggleUI} />
			<DashBoardExplorer isUIOpen={isUIOpen} onClickOpenSelect={onClickOpenSelect} />
			<DashBoardMain />
			<DashBoardInspector isUIOpen={isUIOpen} />
			{isOpenSelectModal && (
				<DashBoardSelectModal onCancel={onClickCloseSelect} onConfirm={console.log} />
			)}
		</PageContainer>
	);
}

const PageContainer = styled.div`
	width: 100vw;
	min-height: 100vh;
	position: relative;
	background-color: ${Colors.background};
`;
