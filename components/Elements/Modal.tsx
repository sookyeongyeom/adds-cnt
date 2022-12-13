import styled from 'styled-components';
import Colors from '../../constants/colors';
import usePreventScroll from '../../hooks/usePreventScroll';
import Button from './Button';
import { ButtonTypes } from '../../constants/buttons';

export default function Modal({ children, onCancel, onConfirm }: ModalProps) {
	usePreventScroll();

	return (
		<S.ModalBackground>
			<S.ModalContainer>
				{children}
				<S.ButtonWrapper>
					<Button onClick={onCancel} buttonType={ButtonTypes.medium}>
						선택 완료
					</Button>
				</S.ButtonWrapper>
			</S.ModalContainer>
		</S.ModalBackground>
	);
}

namespace S {
	export const ModalBackground = styled.div`
		background-color: ${Colors.shade};
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		animation: 0.2s fadeIn;
		z-index: 100;

		@keyframes fadeIn {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
	`;

	export const ModalContainer = styled.div`
		width: 50rem;
		padding: 2.4rem;
		text-align: center;
		background-color: ${Colors.white};
		box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.12);
		border-radius: 1.2rem;
		display: flex;
		flex-direction: column;
	`;

	export const ButtonWrapper = styled.div`
		display: flex;
		width: 100%;
		gap: 0.8rem;
		margin-top: 2rem;

		button {
			width: 100%;
			text-align: center;
			flex-grow: 1;
		}
	`;
}
