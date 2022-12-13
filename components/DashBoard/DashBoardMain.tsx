import styled from 'styled-components';
import Sizes from '../../constants/sizes';
import ReportTotal from '../Report/ReportTotal';
import IconButton from '../Elements/IconButton';
import { SC } from '../../constants/styled';
import { useDispatch, useSelector } from 'react-redux';
import { scaleDown, scaleUp } from '../../modules/scale';
import { RootState } from '../../modules/index';

export default function DashBoardMain() {
	const scale = useSelector(({ scale }: RootState) => scale);
	const dispatch = useDispatch();

	const onScaleDown = () => {
		if (scale === 80) return;
		dispatch(scaleDown());
	};

	const onScaleUp = () => {
		if (scale === 120) return;
		dispatch(scaleUp());
	};

	const onClickPrint = () => window.print();

	return (
		<S.MainContainer scale={scale}>
			<ReportTotal></ReportTotal>
			<SC.DoNotPrint>
				<S.Tool>
					<IconButton onClick={onScaleDown}>축소</IconButton> {scale}%
					<IconButton onClick={onScaleUp}>확대</IconButton>{' '}
					<IconButton onClick={onClickPrint}>[Print]</IconButton>
				</S.Tool>
			</SC.DoNotPrint>
		</S.MainContainer>
	);
}

namespace S {
	export const MainContainer = styled.div<MainContainerProps>`
		width: 100vw;
		padding-top: calc(${Sizes.headerHeight} + 3rem);
		padding-bottom: 3rem;
		text-align: center;
		height: ${(props) => Sizes[`scale${props.scale}`]};

		@media print {
			width: fit-content;
			height: fit-content;
			padding: 0;
		}
	`;

	export const Tool = styled.div`
		background-color: lightblue;
		width: fit-content;
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
		bottom: 3rem;
		margin: 0 auto;
		padding: 1rem 1.5rem;
		border-radius: 0.6rem;
		z-index: 15;
	`;
}
