import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';

export default function DashBoardCategory({ title, children }: DashBoardCategoryProps) {
	return (
		<S.CategoryContainer>
			<S.Title>{title}</S.Title>
			{children}
		</S.CategoryContainer>
	);
}

namespace S {
	export const CategoryContainer = styled.div`
		border-bottom: 0.1rem solid ${Colors.gray300};
		padding: 1.5rem;
		background-color: ${Colors.white};
		position: relative;
		min-height: 20rem;
	`;

	export const Title = styled.div`
		${Fonts.heading18bold}
		margin-bottom: 1.3rem;
		color: ${Colors.blue700};
		text-transform: uppercase;
	`;
}
