import { GraphTotalProps } from './props';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import { GraphAxisProps } from './styled';

export default function GraphTotal({
	label1,
	label2,
	label3,
	value1,
	value2,
	value3,
}: GraphTotalProps) {
	return (
		<GraphContainer>
			<GraphAxis value1={value1} value2={value2} value3={value3}>
				<div />
				<div>
					<div />
				</div>
				<div>
					<div />
				</div>
				<div />
				<div />
				<section>
					<div>
						<div>{label1}</div>
						<div />
					</div>
					<div>
						<div>{label2}</div>
						<div />
					</div>
					{label3 && (
						<div>
							<div>{label3}</div>
							<div />
						</div>
					)}
				</section>
			</GraphAxis>
		</GraphContainer>
	);
}

const GraphContainer = styled.div`
	padding: 1rem 4rem;
	padding-left: 8.5rem;
	padding-bottom: 2rem;
	height: 22rem;
	display: flex;
	align-items: center;
`;

const GraphAxis = styled.div<GraphAxisProps>`
	border: 0.1rem solid ${Colors.gray500};
	border-top: 0;
	border-right: 0;
	display: flex;
	position: relative;
	width: 100%;
	height: 85%;

	&::after {
		content: '0';
		position: absolute;
		left: 0;
		bottom: 0;
		transform: translate(-50%, 150%);
		font-size: 1.2rem;
	}

	> div {
		flex-grow: 1;
		border-right: 0.1rem solid ${Colors.gray500};
		position: relative;

		&::after {
			content: '20';
			position: absolute;
			bottom: 0;
			right: 0;
			transform: translate(50%, 150%);
			font-size: 1.2rem;
		}

		&:nth-of-type(2),
		&:nth-of-type(3) {
			display: flex;
			> div {
				width: 50%;
				border-right: 0.1rem solid ${Colors.gray500};
			}
		}

		&:nth-of-type(2) {
			> div {
				border-color: red;
				z-index: 2;
			}

			&:after {
				content: '40';
			}
		}

		&:nth-of-type(3) {
			> div {
				border-color: blue;
				z-index: 2;
				border-style: dashed;
			}

			&:after {
				content: '60';
			}
		}

		&:nth-of-type(4)::after {
			content: '80';
		}

		&:nth-of-type(5)::after {
			content: '100';
		}
	}

	> section {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: transparent !important;
		height: 100%;
		left: -8.3rem;

		> div {
			width: 35.9rem;
			flex-grow: 1;
			display: flex;
			align-items: center;
			gap: 0.3rem;

			> div {
				&:first-of-type {
					font-size: 1.3rem;
					word-break: keep-all;
					width: 8rem;
					text-align: center;
					flex-shrink: 0;
				}

				&:last-of-type {
					width: 100%;
					height: 2rem;
					background-color: ${Colors.blue500};
					position: relative;

					&::after {
						content: 'value';
						position: absolute;
						top: 0;
						right: 0;
						transform: translate(140%, 25%);
						font-size: 1.2rem;
						font-weight: 600;
					}
				}
			}
		}

		> div:first-of-type {
			> div:last-of-type {
				width: ${(props) => props.value1 && props.value1 * 0.775 + '%'};

				&::after {
					content: \'${(props) => props.value1 && props.value1}\';
				}
			}
		}

		> div:nth-of-type(2) {
			> div:last-of-type {
				width: ${(props) => props.value2 && props.value2 * 0.775 + '%'};

				&::after {
					content: \'${(props) => props.value2 && props.value2}\';
				}
			}
		}

		> div:nth-of-type(3) {
			> div:last-of-type {
				width: ${(props) => props.value3 && props.value3 * 0.775 + '%'};

				&::after {
					content: \'${(props) => props.value3 && props.value3}\';
				}
			}
		}
	}
`;
