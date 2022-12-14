import styled from 'styled-components';
import DashBoardExplorer from './DashBoardExplorer';
import DashBoardHeader from './DashBoardHeader';
import DashBoardInspector from './DashBoardInspector';
import DashBoardMain from './DashBoardMain';
import Colors from '../../constants/colors';
import { useState } from 'react';
import DashBoardSelectModal from './DashBoardSelectModal';
import { SC } from '../../constants/styled';

export default function DashBoardPage() {
	const [isUIOpen, SetIsUIOpen] = useState(true);
	const [isOpenSelectModal, setIsOpenSelectModal] = useState(false);

	const onClickToggleUI = () => {
		SetIsUIOpen(!isUIOpen);
	};

	const onClickOpenSelect = () => setIsOpenSelectModal(true);
	const onClickCloseSelect = () => setIsOpenSelectModal(false);

	return (
		<S.PageContainer>
			<SC.DoNotPrint>
				<DashBoardHeader onClickToggleUI={onClickToggleUI} />
				<DashBoardExplorer isUIOpen={isUIOpen} onClickOpenSelect={onClickOpenSelect} />
			</SC.DoNotPrint>
			<DashBoardMain />
			<SC.DoNotPrint>
				<DashBoardInspector isUIOpen={isUIOpen} />
				{isOpenSelectModal && (
					<DashBoardSelectModal onCancel={onClickCloseSelect} onConfirm={console.log} />
				)}
			</SC.DoNotPrint>
		</S.PageContainer>
	);
}

namespace S {
	export const PageContainer = styled.div`
		width: 100vw;
		min-height: 100vh;
		position: relative;
		background-color: ${Colors.gray300};
	`;
}
