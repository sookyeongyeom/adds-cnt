/**
 * @by DashBoardDrawer */
type DrawerProps = {
	isOpen: boolean;
	isLeft: boolean;
};

/**
 * @by DashBoardSelectModal */
type SelectSectionProps = {
	isResult?: boolean;
};

/**
 * @by DashBoardSelectModal */
type DropDownBtnProps = {
	isOpened?: boolean;
};

/**
 * @by DashBoardMain
 * @by ReportTotal */
type ZoomScaleProps = {
	scale: number;
};

/**
 * @by GraphTotal */
type GraphAxisProps = {
	value1: number;
	value2: number;
	value3?: number;
};

/**
 * @by Button */
type ButtonContainerProps = {
	buttonType: string;
	isHidden?: boolean;
};

/**
 * @by DashBoardPatientsList */
type PatientContainerProps = {
	isFocused: boolean;
};
