import styled from 'styled-components';
import DashBoardFileManager from './DashBoardFileManager';
import DashBoardPatientsList from './DashBoardPatientsList';
import DashBoardDrawer from './DashBoardDrawer';
import { DashBoardExplorerAndInspectorProps } from './props';

export default function DashBoardExplorer({
	isUIOpen,
	onClickOpenSelect,
}: DashBoardExplorerAndInspectorProps) {
	return (
		<DashBoardDrawer isLeft={true} isUIOpen={isUIOpen}>
			<DashBoardFileManager onClickOpenSelect={onClickOpenSelect as () => void} />
			<DashBoardPatientsList />
		</DashBoardDrawer>
	);
}
