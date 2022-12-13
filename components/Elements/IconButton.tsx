import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';

export default function IconButton({ children, onClick }: IconButtonProps) {
	return <S.IconContainer onClick={onClick}>{children}</S.IconContainer>;
}

namespace S {
	export const IconContainer = styled.button`
		${Fonts.button16bold}
		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		color: ${Colors.blue500};
		transition: 0.3s ease;
		cursor: pointer;

		svg path {
			fill: ${Colors.blue500};
			transition: 0.3s ease;
		}

		&:hover {
			color: ${Colors.blue700};
			svg path {
				fill: ${Colors.blue700};
			}
		}

		&:active {
			color: ${Colors.blue900};
			svg path {
				fill: ${Colors.blue900};
			}
		}
	`;
}
