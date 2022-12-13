import styled from 'styled-components';
import Colors from '../../constants/colors';
import { ButtonStyles, ButtonTypes } from '../../constants/buttons';

export default function Button({ children, onClick, buttonType, isHidden }: ButtonProps) {
	return (
		<S.ButtonContainer onClick={onClick} buttonType={buttonType} isHidden={isHidden}>
			{children}
		</S.ButtonContainer>
	);
}

namespace S {
	export const ButtonContainer = styled.button<ButtonContainerProps>`
		${(props) => props.buttonType === ButtonTypes.medium && ButtonStyles.medium}
		${(props) => props.buttonType === ButtonTypes.small && ButtonStyles.small}
	background-color: ${Colors.blue500};
		color: ${Colors.white};
		border-radius: 0.6rem;
		cursor: pointer;
		visibility: ${(props) => props.isHidden && 'hidden'};

		&:hover {
			background-color: ${Colors.blue700};
		}

		&:active {
			background-color: ${Colors.blue900};
		}
	`;
}
