import { IconButtonProps } from './props';
import styled from 'styled-components';
export default function IconButton({ children, onClick }: IconButtonProps) {
	return <IconContainer onClick={onClick}>{children}</IconContainer>;
}

const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;
