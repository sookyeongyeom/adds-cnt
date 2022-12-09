import { DashBoardModalProps, DropDownElementProps } from './props';
import Modal from '../Elements/Modal';
import styled from 'styled-components';
import Fonts from '../../constants/fonts';
import Colors from '../../constants/colors';
import { DropDownBtnProps, SelectSectionProps } from './styled';
import { svgRefresh } from '../../constants/svgs';
import IconButton from '../Elements/IconButton';
import getResultFiles from '../../utils/getResultFiles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules/index';
import { useState, useEffect } from 'react';
import getFiles from '../../utils/getFiles';
import { selectProfileFile, selectCommentFile } from '../../modules/selectFiles';
import Keys from '../../constants/keys';

export default function DashBoardSelectModal({ onCancel, onConfirm }: DashBoardModalProps) {
	const { gapi, authToken } = useSelector(({ google }: RootState) => google);
	const { profileFile, commentFile } = useSelector(({ selectFiles }: RootState) => selectFiles);
	const results = useSelector(({ results }: RootState) => results);
	const [openDropDown, setOpenDropDown] = useState(0);
	const [filelist, setFileList] = useState([]);
	const dispatch = useDispatch();
	const onSetProfileFile = (fileId: string) => dispatch(selectProfileFile(fileId));
	const onSetCommentFile = (fileId: string) => dispatch(selectCommentFile(fileId));

	const onClickProfileFile = async (e: React.MouseEvent, fileId: string) => {
		e.stopPropagation();
		onSetProfileFile(fileId);
	};

	const onClickCommentFile = async (e: React.MouseEvent, fileId: string) => {
		e.stopPropagation();
		onSetCommentFile(fileId);
	};

	const onOpenDropDown = async (idx: number) => {
		setOpenDropDown(idx);
		let filelist = [];
		if (idx === 1) filelist = await getFiles(gapi, authToken, Keys.PROFILES_FOLDER_ID);
		if (idx === 2) filelist = await getFiles(gapi, authToken, Keys.COMMENTS_FOLDER_ID);
		setFileList(filelist);
	};

	const onCloseDropDown = (idx: number) => {
		if (openDropDown === idx) setOpenDropDown(0);
		setFileList([]);
	};

	useEffect(() => {
		console.log(openDropDown);
	}, [openDropDown]);

	return (
		<Modal onCancel={onCancel} onConfirm={onConfirm}>
			<S.SelectContainer>
				<S.IconButtonWrapper>
					<IconButton onClick={() => getResultFiles(gapi, authToken)}>
						{svgRefresh}새로고침
					</IconButton>
				</S.IconButtonWrapper>
				<S.SelectSection isResult={true}>
					<h1>검사결과</h1>
					<S.ResultBtn>
						Results 폴더에 포함된 {Object.keys(results).length}개의 파일이 자동으로 선택됩니다.
					</S.ResultBtn>
				</S.SelectSection>
				<S.SelectSection>
					<h1>신상정보</h1>
					<S.DropDownBtn
						onClick={() => onOpenDropDown(1)}
						onBlur={() => onCloseDropDown(1)}
						isOpened={openDropDown === 1}>
						{profileFile ? profileFile : 'Profiles 폴더에 포함된 파일 중 하나를 선택해주세요.'}
						{openDropDown === 1 && (
							<DropDownElement onClick={onClickProfileFile} filelist={filelist} />
						)}
					</S.DropDownBtn>
				</S.SelectSection>
				<S.SelectSection>
					<h1>결과해석</h1>
					<S.DropDownBtn
						onClick={() => onOpenDropDown(2)}
						onBlur={() => onCloseDropDown(2)}
						isOpened={openDropDown === 2}>
						{commentFile ? commentFile : 'Comments 폴더에 포함된 파일 중 하나를 선택해주세요.'}
						{openDropDown === 2 && (
							<DropDownElement onClick={onClickCommentFile} filelist={filelist} />
						)}
					</S.DropDownBtn>
				</S.SelectSection>
			</S.SelectContainer>
		</Modal>
	);
}

const DropDownElement = ({ onClick, filelist }: DropDownElementProps) => {
	return (
		<S.DropDown>
			{filelist &&
				filelist.map((file, i) => (
					<p onClick={(e) => onClick(e, file[0])} key={i}>
						{file[1]}
					</p>
				))}
		</S.DropDown>
	);
};

namespace S {
	export const SelectContainer = styled.div`
		display: flex;
		flex-direction: column;
		gap: 2rem;
		position: relative;
	`;

	export const IconButtonWrapper = styled.div`
		button {
			margin-left: auto;
			position: absolute;
			right: 0;
		}
	`;

	export const SelectSection = styled.div<SelectSectionProps>`
		display: flex;
		flex-direction: column;
		text-align: left;
		gap: 1rem;

		> h1 {
			${Fonts.heading18bold}
		}
	`;

	export const DropDownBtn = styled.button<DropDownBtnProps>`
		color: ${Colors.gray400};
		border: 0.1rem solid ${Colors.gray300};
		border-radius: 0.6rem;
		padding: 1rem;
		position: relative;
		border-color: ${(props) => props.isOpened && Colors.blue300};
		cursor: pointer;
	`;

	export const ResultBtn = styled(DropDownBtn)`
		cursor: default;
	`;

	export const DropDown = styled.div`
		position: absolute;
		background-color: ${Colors.white};
		width: 100%;
		left: 0;
		top: 0;
		transform: translateY(4.3rem);
		display: flex;
		flex-direction: column;
		z-index: 1;
		border-radius: 0.6rem;
		box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.12);
		overflow: hidden;

		> p {
			padding: 1.1rem;
			transition: 0.3s ease;
			transition-property: background-color;
			color: ${Colors.gray400};

			&:hover {
				background-color: ${Colors.blue100};
			}

			&:active {
				background-color: ${Colors.blue300};
			}
		}
	`;
}
