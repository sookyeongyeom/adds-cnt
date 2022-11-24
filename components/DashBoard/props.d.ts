import { ChildrenType } from '../../@types/base';

export interface DashBoardDrawerProps extends ChildrenType {
	isLeft: boolean;
	isUIOpen: boolean;
}

export interface DashBoardCategoryProps {
	title: string;
	rows: string[];
}

export interface DashBoardPageProps {
	handleAuthClick: () => void;
	handleSignoutClick: () => void;
	profilePhoto: string;
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
}

export interface DashBoardFileManagerProps {
	onClickOpenSelect: () => void;
}
