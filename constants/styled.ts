import styled from 'styled-components';
import Colors from './colors';
import Fonts from './fonts';

export const CategoryLine = styled.div`
	${Fonts.body14regular}
	display: flex;
	gap: 1rem;
	align-items: center;
	margin-bottom: 0.7rem;

	&:last-of-type {
		margin-bottom: 0;
	}
`;

export const CategoryLabel = styled.div`
	${Fonts.subtitle14semibold}
`;

export const CategorySection = styled.section`
	margin-bottom: 3rem;

	> div:first-of-type {
		${Fonts.body12medium}
		color:${Colors.blue300};
		margin-bottom: 0.5rem;
	}

	&:last-of-type {
		margin-bottom: 0;
	}
`;

export const DoNotPrint = styled.div`
	@media print {
		display: none;
	}
`;

export const DoPrint = styled.div`
	@media print {
		display: block;
	}
`;
