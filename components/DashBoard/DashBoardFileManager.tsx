import styled from 'styled-components';
import Colors from '../../constants/colors';
import Button from '../Elements/Button';
import { ButtonTypes } from '../../constants/buttons';
import Fonts from '../../constants/fonts';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export default function DashBoardFileManager({ onClickOpenSelect }: DashBoardFileManagerProps) {
	const results = useSelector(({ results }: RootState) => results);
	const { profileFile, commentFile } = useSelector(({ selectFiles }: RootState) => selectFiles);

	const onClickDrive = () => window.open('https://drive.google.com/drive/u/2/my-drive', '_blank');

	return (
		<S.FileManagerContainer>
			<S.Title>파일관리자</S.Title>
			<S.FileAction>
				<Button onClick={() => alert('미구현된 기능입니다.')} buttonType={ButtonTypes.small}>
					도움말
				</Button>
				<Button onClick={onClickDrive} buttonType={ButtonTypes.small}>
					드라이브
				</Button>
				<Button onClick={onClickOpenSelect} buttonType={ButtonTypes.small}>
					파일선택
				</Button>
			</S.FileAction>
			<FileStatus title={'검사결과'}>{Object.keys(results).length}개의 데이터</FileStatus>
			<FileStatus title={'신상정보'}>
				{profileFile.fileName ? profileFile.fileName : '선택된 파일이 없습니다.'}
			</FileStatus>
			<FileStatus title={'결과해석'}>
				{commentFile.fileName ? commentFile.fileName : '선택된 파일이 없습니다.'}
			</FileStatus>
		</S.FileManagerContainer>
	);
}

function FileStatus({ children, title }: FileStatusProps) {
	return (
		<S.FileStatusContainer>
			<span>{title}</span>
			<S.FileName>{children}</S.FileName>
		</S.FileStatusContainer>
	);
}

namespace S {
	export const FileManagerContainer = styled.div`
		div {
			display: flex;
		}
	`;

	export const Title = styled.div`
		${Fonts.subtitle16semibold}
		padding: 1.5rem;
		border-bottom: 0.1rem solid ${Colors.gray300};
		background-color: ${Colors.blue700};
		color: ${Colors.white};
	`;

	export const FileAction = styled.div`
		background-color: ${Colors.white};
		justify-content: space-evenly;
		padding: 1rem;
	`;

	export const FileStatusContainer = styled.div`
		${Fonts.subtitle14medium}
		background-color: ${Colors.white};
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;

		> span {
			flex-shrink: 0;
		}
	`;

	export const FileName = styled.span`
		${Fonts.subtitle14medium}
		color: ${Colors.gray400};
		background-color: ${Colors.blue100};
		border-radius: 0.6rem;
		width: 19.7rem;
		padding: 1rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	`;
}
