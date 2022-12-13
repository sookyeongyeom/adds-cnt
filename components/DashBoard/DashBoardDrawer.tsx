import styled from 'styled-components';
import Sizes from '../../constants/sizes';
import Colors from '../../constants/colors';

export default function DashBoardDrawer({ children, isLeft, isUIOpen }: DashBoardDrawerProps) {
	return (
		<S.DrawerContainer isOpen={isUIOpen} isLeft={isLeft}>
			{children}
		</S.DrawerContainer>
	);
}

namespace S {
	export const DrawerContainer = styled.div<DrawerProps>`
		height: calc(100vh - ${Sizes.headerHeight});
		width: ${Sizes.drawerWidth};
		position: fixed;
		top: ${Sizes.headerHeight};
		left: ${(props) => props.isLeft && '0'};
		left: ${(props) => props.isLeft && !props.isOpen && '-' + Sizes.drawerWidth};
		right: ${(props) => !props.isLeft && '0'};
		right: ${(props) => !props.isLeft && !props.isOpen && '-' + Sizes.drawerWidth};
		transition: 0.5s ease;
		transition-property: left, right;
		border-right: ${(props) => props.isLeft && `0.1rem solid ${Colors.gray300}`};
		border-left: ${(props) => !props.isLeft && `0.1rem solid ${Colors.gray300}`};
		background-color: ${Colors.blue100};
		z-index: 10;
		overflow-y: scroll;
	`;
}
