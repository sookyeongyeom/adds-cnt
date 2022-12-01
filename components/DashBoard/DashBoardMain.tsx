import styled from 'styled-components';
import Sizes from '../../constants/sizes';
import ReportTotal from '../Report/ReportTotal';
import { useState } from 'react';
import IconButton from '../elements/IconButton';
import { DoNotPrint } from '../../constants/styled';

export default function DashBoardMain() {
	const [page, setPage] = useState(1);

	const toPrev = () => {
		if (page !== 1) setPage(page - 1);
	};

	const toNext = () => {
		if (page !== 3) setPage(page + 1);
	};

	const onClickPrint = () => window.print();

	return (
		<MainContainer>
			<ReportTotal page={page}></ReportTotal>
			<DoNotPrint>
				<Tool>
					<IconButton onClick={toPrev}>&lang;</IconButton> {page}/3{' '}
					<IconButton onClick={toNext}>&rang;</IconButton>{' '}
					<IconButton onClick={onClickPrint}>[Print]</IconButton>
				</Tool>
			</DoNotPrint>
		</MainContainer>
	);
}

const MainContainer = styled.div`
	width: 100vw;
	padding-top: calc(${Sizes.headerHeight} + 3rem);
	padding-bottom: 3rem;
	text-align: center;

	@media print {
		width: fit-content;
		padding: 0;
	}
`;

const Tool = styled.div`
	background-color: lightblue;
	width: fit-content;
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	bottom: 3rem;
	margin: 0 auto;
	padding: 1rem 1.5rem;
	border-radius: 0.6rem;
`;
