import styled from 'styled-components';
import Colors from '../../constants/colors';
import Sizes from '../../constants/sizes';
import Button from '../elements/Button';
import { ButtonTypes } from '../../constants/buttons';
import Fonts from '../../constants/fonts';
import { DashBoardHeaderProps } from './props';

export default function DashBoardHeader({
	handleAuthClick,
	onClickToggleUI,
}: DashBoardHeaderProps) {
	return (
		<HeaderContainer>
			<Logo>
				CNT<span>powered by soo</span>
			</Logo>
			<Button onClick={onClickToggleUI} buttonType={ButtonTypes.medium}>
				UI
			</Button>
			<Button onClick={handleAuthClick} buttonType={ButtonTypes.medium}>
				로그인해주세요
			</Button>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	width: 100%;
	height: ${Sizes.headerHeight};
	position: fixed;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 3rem;
	border-bottom: 0.1rem solid ${Colors.gray300};
	background-color: ${Colors.white};
`;

const Logo = styled.div`
	${Fonts.heading24bold}
	color: ${Colors.blue900};

	span {
		${Fonts.body14regular}
		margin-left: 0.5rem;
		color: ${Colors.blue500};
	}
`;
