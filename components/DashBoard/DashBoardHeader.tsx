import styled from 'styled-components';
import Colors from '../../constants/colors';
import Sizes from '../../constants/sizes';
import Button from '../elements/Button';
import { ButtonTypes } from '../../constants/buttons';
import Fonts from '../../constants/fonts';
import { DashBoardHeaderProps } from './props';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules/index';
import { logout, login } from '../../modules/google';

export default function DashBoardHeader({ onClickToggleUI }: DashBoardHeaderProps) {
	const { gapi, tokenClient, authToken, profilePicture } = useSelector(
		({ google }: RootState) => google,
	);

	const dispatch = useDispatch();
	const onLogout = () => dispatch(logout());
	const onLogin: any = (authToken: any) => dispatch(login(authToken));

	const [isDropDownOpen, setIsDropDownOpen] = useState(false);

	const onClickDropDownOpen = () => {
		setIsDropDownOpen(true);
	};

	const onBlurDropDown = () => {
		setIsDropDownOpen(false);
	};

	const onClickLogout = (e: React.MouseEvent) => {
		e.stopPropagation();
		handleSignoutClick();
		setIsDropDownOpen(false);
	};

	function handleAuthClick() {
		if (tokenClient !== null) {
			tokenClient.callback = async (resp: any) => {
				if (resp.error !== undefined) throw resp;
				const authToken = gapi.client.getToken().access_token;
				onLogin(authToken);
			};

			if (gapi.client.getToken() === null) tokenClient.requestAccessToken({ prompt: 'consent' });
			else tokenClient.requestAccessToken({ prompt: '' });
		}
	}

	function handleSignoutClick() {
		if (authToken) onLogout();
	}

	return (
		<HeaderContainer>
			<Logo>
				CNT<span>powered by playidea</span>
			</Logo>
			<Button onClick={onClickToggleUI} buttonType={ButtonTypes.medium}>
				UI
			</Button>
			{!authToken && (
				<Button onClick={handleAuthClick} buttonType={ButtonTypes.medium}>
					LOGIN
				</Button>
			)}
			{authToken && (
				<>
					<Photo onClick={onClickDropDownOpen} onBlur={onBlurDropDown}>
						<img src={profilePicture} />
						{isDropDownOpen && <DropDown onClick={onClickLogout}>LOGOUT</DropDown>}
					</Photo>
				</>
			)}
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	width: 100%;
	height: ${Sizes.headerHeight};
	position: fixed;
	top: 0;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	padding: 0 3rem;
	border-bottom: 0.1rem solid ${Colors.gray300};
	background-color: ${Colors.white};
	z-index: 20;

	button {
		width: fit-content;
	}

	button:first-of-type {
		margin: 0 auto;
	}

	button:nth-of-type(2) {
		margin-left: auto;
	}
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

const Photo = styled.button`
	display: block;
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	overflow: hidden;
	display: flex;
	margin-left: auto;
	cursor: pointer;
`;

const DropDown = styled.div`
	${Fonts.button16bold}
	background-color: ${Colors.red500};
	color: ${Colors.white};
	border-radius: 0.6rem;
	box-shadow: 6px 7px 16px rgba(106, 106, 106, 0.3);
	position: absolute;
	right: 2rem;
	top: 6.5rem;
	padding: 1.3rem 1.8rem;
	text-align: center;
	cursor: pointer;

	&:hover {
		background-color: ${Colors.red700};
	}

	&:active {
		background-color: ${Colors.red900};
	}
`;
