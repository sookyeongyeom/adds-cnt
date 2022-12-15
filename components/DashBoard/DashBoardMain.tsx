import styled from 'styled-components';
import Sizes from '../../constants/sizes';
import ReportTotal from '../Report/ReportTotal';
import IconButton from '../Elements/IconButton';
import { SC } from '../../constants/styled';
import { useDispatch, useSelector } from 'react-redux';
import { scaleDown, scaleUp } from '../../modules/scale';
import { RootState } from '../../modules/index';
import { svgZoomIn, svgZoomOut, svgPrinter } from '../../constants/svgs';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';

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
					<div>
						<IconButton onClick={onScaleDown}>{svgZoomOut}</IconButton>
						<S.Scale>{scale}%</S.Scale>
						<IconButton onClick={onScaleUp}>{svgZoomIn}</IconButton>
					</div>
					<div>
						<IconButton onClick={onClickPrint}>{svgPrinter}</IconButton>
					</div>
				</S.Tool>
			</SC.DoNotPrint>
		</S.MainContainer>
	);
}

namespace S {
	export const MainContainer = styled.div<ZoomScaleProps>`
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
		background-color: rgba(55, 44, 44, 0.645);
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
		width: fit-content;
		position: fixed;
		bottom: 4rem;
		left: 50%;
		transform: translateX(-50%);
		margin: 0 auto;
		border-radius: 0.6rem;
		z-index: 15;
		display: flex;
		align-items: center;
		overflow: hidden;

		> div {
			padding: 1rem 1.5rem;
			display: flex;
			align-items: center;

			&:first-of-type {
				gap: 0.6rem;
			}

			&:last-of-type {
				background-color: rgba(55, 44, 44, 0.645);
			}
		}
	`;

	export const Scale = styled.div`
		${Fonts.subtitle16semibold}
		color:${Colors.blue300};
		position: relative;
		top: -0.15rem;
	`;
}
