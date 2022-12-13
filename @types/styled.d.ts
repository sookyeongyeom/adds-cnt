/**
 * @for DashBoardDrawer */
type DrawerProps = {
	isOpen: boolean;
	isLeft: boolean;
};

/**
 * @for DashBoardSelectModal */
type SelectSectionProps = {
	isResult?: boolean;
};

/**
 * @for DashBoardSelectModal */
type DropDownBtnProps = {
	isOpened?: boolean;
};

/**
 * @for DashBoardMain */
type MainContainerProps = {
	scale: number;
};

/**
 * @for ReportTotal */
type TotalContainerProps = {
	scale: number;
};

/**
 * @for GraphTotal */
type GraphAxisProps = {
	value1: number;
	value2: number;
	value3?: number;
};

/**
 * @for Button */
type ButtonContainerProps = {
	buttonType: string;
	isHidden?: boolean;
};
