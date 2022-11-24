import styled from 'styled-components';
import Colors from '../../constants/colors';
import { DashBoardCategoryProps } from './props';
import Fonts from '../../constants/fonts';

export default function DashBoardCategory({ title, rows }: DashBoardCategoryProps) {
	return (
		<CategoryContainer>
			<Title>{title}</Title>
			{rows.map((v, i) => (
				<div key={i}>{v}</div>
			))}
		</CategoryContainer>
	);
}

const CategoryContainer = styled.div`
	border-bottom: 0.1rem solid ${Colors.gray300};
	padding: 1.5rem;
	background-color: ${Colors.white};
`;

const Title = styled.div`
	${Fonts.heading18bold}
	margin-bottom: 1rem;
	color: ${Colors.blue700};
`;