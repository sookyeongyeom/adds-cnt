import styled from 'styled-components';
import Colors from '../../constants/colors';
import usePreventScroll from '../../hooks/usePreventScroll';
import { ModalProps } from './props';

export default function BasicModal({ children, onCancel, onConfirm }: ModalProps) {
	usePreventScroll();

	return (
		<ModalBackground>
			<ModalContainer>
				{children}
				<ButtonWrapper></ButtonWrapper>
			</ModalContainer>
		</ModalBackground>
	);
}

const ModalBackground = styled.div`
	background-color: ${Colors.shade};
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: 0.2s fadeIn;

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

const ModalContainer = styled.div`
	width: 50rem;
	padding: 2.4rem;
	padding-top: 4rem;
	text-align: center;
	background-color: ${Colors.white};
	box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.12);
	border-radius: 1.2rem;
`;

const ButtonWrapper = styled.div`
	display: flex;
	width: 100%;
	gap: 0.8rem;

	button {
		width: 100%;
		text-align: center;
	}
`;
