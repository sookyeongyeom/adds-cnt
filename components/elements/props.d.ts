import { ChildrenType } from '../../@types/base';
import { ButtonTypes } from '../../constants/buttons';

export interface ModalProps extends ChildrenType {
	onCancel: () => void;
	onConfirm: () => void;
}

export interface ButtonProps extends ChildrenType {
	onClick: () => void;
	buttonType: string;
}

export interface IconButtonProps extends ChildrenType {
	onClick: () => void;
}
