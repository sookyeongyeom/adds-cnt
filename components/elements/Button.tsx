import { ButtonProps } from './props';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import { ButtonStyles, ButtonTypes } from '../../constants/buttons';
import { ButtonContainerProps } from './styled';

export default function Button({ children, onClick, buttonType }: ButtonProps) {
	return (
		<ButtonContainer onClick={onClick} buttonType={buttonType}>
			{children}
		</ButtonContainer>
	);
}

const ButtonContainer = styled.div<ButtonContainerProps>`
	${(props) => props.buttonType === ButtonTypes.medium && ButtonStyles.medium}
	${(props) => props.buttonType === ButtonTypes.small && ButtonStyles.small}
	background-color: ${Colors.blue500};
	color: ${Colors.white};
	border-radius: 0.6rem;
	cursor: pointer;

	&:hover {
		background-color: ${Colors.blue700};
	}

	&:active {
		background-color: ${Colors.blue900};
	}
`;
