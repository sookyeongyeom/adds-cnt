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

export const Row = styled.div`
	display: flex;
	align-items: center;
`;

export const ResultRow = styled(Row)`
	text-align: left;
	flex-direction: column;

	> section:first-of-type {
		background-color: ${Colors.gray100};
		padding: 1rem;
		margin-bottom: 1rem;

		h1 {
			font-size: 2rem;
			font-weight: 600;
			margin-bottom: 0.7rem;

			span {
				font-size: 1.4rem;
				font-weight: 500;
			}
		}

		h2 {
			font-size: 1.4rem;
		}
	}

	> div {
		display: flex;
		width: 100%;

		section:first-of-type {
			width: 55%;
		}

		section:last-of-type {
			background-color: ${Colors.blue100};
			flex-grow: 1;
		}
	}
`;

export const Emp = styled.span`
	font-weight: 600;
	text-decoration: underline;
	text-underline-position: below;
`;

export const Underline = styled.span`
	text-decoration: underline;
	text-underline-position: below;
`;
