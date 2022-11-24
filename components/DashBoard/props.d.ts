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
}

export interface DashBoardHeaderProps {
	handleAuthClick: () => void;
	onClickToggleUI: () => void;
}

export interface DashBoardExplorerAndInspectorProps {
	isUIOpen: boolean;
}
