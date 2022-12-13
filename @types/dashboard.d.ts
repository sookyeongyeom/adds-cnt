/**
 * @for Common */
type IsUIOpenType = {
	isUIOpen: boolean;
};

/**
 * @by DashBoardPage */
type DashBoardHeaderProps = {
	onClickToggleUI: () => void;
};

/**
 * @by DashBoardPage */
type DashBoardInspectorProps = IsUIOpenType & {};

/**
 * @by DashBoardPage */
type DashBoardExplorerProps = IsUIOpenType & {
	onClickOpenSelect: () => void;
};

/**
 * @by DashBoardPage */
type DashBoardSelectModalProps = {
	onCancel: () => void;
	onConfirm: () => void;
};

/**
 * @by DashBoardExplorer
 * @by DashBoardInspector */
type DashBoardDrawerProps = ChildrenType &
	IsUIOpenType & {
		isLeft: boolean;
	};

/**
 * @by DashBoardExplorer */
type DashBoardFileManagerProps = {
	onClickOpenSelect: () => void;
};

/**
 * @by DashBoardFileManager */
type FileStatusProps = ChildrenType & {
	title: string;
};

/**
 * @by DashBoardPatientsList */
type PatientProps = ChildrenType & {
	patientId: string;
};

/**
 * @by DashBoardProfile
 * @by DashBoardResult
 * @by DashBoardComment  */
type DashBoardCategoryProps = ChildrenType & {
	title: string;
};

/**
 * @by DashBoardSelectModal */
type DropDownElementProps = {
	onClick: (e: React.MouseEvent, fileId: string, fileName: string) => void;
	filelist: string[];
};
