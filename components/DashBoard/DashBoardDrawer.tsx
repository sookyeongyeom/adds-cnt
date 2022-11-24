import { useState } from 'react';
import styled from 'styled-components';
import Sizes from '../../constants/sizes';
import { DrawerProps, DrawerTriggerAreaProps } from './styled';
import { DashBoardDrawerProps } from './props';
import Colors from '../../constants/colors';

export default function DashBoardDrawer({ children, isLeft, isUIOpen }: DashBoardDrawerProps) {
	return (
		<DrawerContainer isOpen={isUIOpen} isLeft={isLeft}>
			{children}
			{/* <CloseTriggerArea onClick={onClickClose} isLeft={isLeft} />
			{!isOpen && <OpenTriggerArea onClick={onClickOpen} isLeft={isLeft} />} */}
		</DrawerContainer>
	);
}

const DrawerContainer = styled.div<DrawerProps>`
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
`;

// const CloseTriggerArea = styled.div<DrawerTriggerAreaProps>`
// 	width: 2rem;
// 	height: 100%;
// 	position: absolute;
// 	right: ${(props) => props.isLeft && '0'};
// 	left: ${(props) => !props.isLeft && '0'};
// 	top: 0;
// 	cursor: pointer;

// 	&:hover {
// 		background-color: #4343ff3a;
// 	}
// `;

// const OpenTriggerArea = styled.div<DrawerTriggerAreaProps>`
// 	background-color: pink;
// 	width: 2rem;
// 	height: 2rem;
// 	position: absolute;
// 	right: ${(props) => props.isLeft && '-2rem'};
// 	left: ${(props) => !props.isLeft && '-2rem'};
// 	top: 0;
// 	cursor: pointer;
// `;
