import DashBoardFileManager from './DashBoardFileManager';
import DashBoardPatientsList from './DashBoardPatientsList';
import DashBoardDrawer from './DashBoardDrawer';

export default function DashBoardExplorer({ isUIOpen, onClickOpenSelect }: DashBoardExplorerProps) {
	return (
		<DashBoardDrawer isLeft={true} isUIOpen={isUIOpen}>
			<DashBoardFileManager onClickOpenSelect={onClickOpenSelect as () => void} />
			<DashBoardPatientsList />
		</DashBoardDrawer>
	);
}
