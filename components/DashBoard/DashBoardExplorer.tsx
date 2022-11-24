import styled from 'styled-components';
import DashBoardFileManager from './DashBoardFileManager';
import DashBoardPatientsList from './DashBoardPatientsList';
import DashBoardDrawer from './DashBoardDrawer';
import { DashBoardExplorerAndInspectorProps } from './props';

export default function DashBoardExplorer({ isUIOpen }: DashBoardExplorerAndInspectorProps) {
	return (
		<DashBoardDrawer isLeft={true} isUIOpen={isUIOpen}>
			<DashBoardFileManager />
			<DashBoardPatientsList />
		</DashBoardDrawer>
	);
}

const ExplorerContainer = styled.div``;
