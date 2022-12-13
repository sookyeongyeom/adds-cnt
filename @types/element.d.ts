/**
 * @for Modal */
type ModalProps = ChildrenType & {
	onCancel: () => void;
	onConfirm: () => void;
};

/**
 * @for Button */
type ButtonProps = ChildrenType & {
	onClick: React.MouseEventHandler;
	buttonType: string;
	isHidden?: boolean;
};

/**
 * @for IconButton */
type IconButtonProps = ChildrenType & {
	onClick: () => void;
};
