import { ChildrenType } from '../../@types/base';

export interface DashBoardDrawerProps extends ChildrenType {
	isLeft: boolean;
	isUIOpen: boolean;
}

export interface DashBoardCategoryProps extends ChildrenType {
	title: string;
}

export interface DashBoardPageProps {
	handleAuthClick: () => void;
	handleSignoutClick: () => void;
	profilePhoto: string;
	listResultsFiles: () => void;
}

export interface DashBoardHeaderProps {
	handleAuthClick: () => void;
	handleSignoutClick: () => void;
	onClickToggleUI: () => void;
	profilePhoto: string;
}

export interface DashBoardExplorerAndInspectorProps {
	isUIOpen: boolean;
	onClickOpenSelect?: () => void;
}

export interface DashBoardModalProps {
	onCancel: () => void;
	onConfirm: () => void;
	onRefresh: () => void;
}

export interface DashBoardFileManagerProps {
	onClickOpenSelect: () => void;
}

export interface FileStatusProps extends ChildrenType {
	title: string;
}

export interface PatientProps extends ChildrenType {
	patientId: string;
}
