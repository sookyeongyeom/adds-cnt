import { ChildrenType } from '../../@types/base';

export interface DashBoardDrawerProps extends ChildrenType {
	isLeft: boolean;
	isUIOpen: boolean;
}

export interface DashBoardCategoryProps extends ChildrenType {
	title: string;
}

export interface DashBoardPageProps {}

export interface DashBoardHeaderProps {
	onClickToggleUI: () => void;
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

export interface FileStatusProps extends ChildrenType {
	title: string;
}

export interface PatientProps extends ChildrenType {
	patientId: string;
}

export interface DropDownElementProps {
	onClick: (e: React.MouseEvent, fileId: string, fileName: string) => void;
	filelist: string[];
}
