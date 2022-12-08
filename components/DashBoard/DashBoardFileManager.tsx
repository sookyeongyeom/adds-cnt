import styled from 'styled-components';
import Colors from '../../constants/colors';
import Button from '../Elements/Button';
import { ButtonTypes } from '../../constants/buttons';
import Fonts from '../../constants/fonts';
import { DashBoardFileManagerProps, FileStatusProps } from './props';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export default function DashBoardFileManager({ onClickOpenSelect }: DashBoardFileManagerProps) {
	const results = useSelector(({ results }: RootState) => results);

	return (
		<S.FileManagerContainer>
			<S.Title>파일관리자</S.Title>
			<S.FileAction>
				<Button onClick={console.log} buttonType={ButtonTypes.small}>
					도움말
				</Button>
				<Button onClick={console.log} buttonType={ButtonTypes.small}>
					파일업로드
				</Button>
				<Button onClick={onClickOpenSelect} buttonType={ButtonTypes.small}>
					파일선택
				</Button>
			</S.FileAction>
			<FileStatus title={'검사결과'}>{Object.keys(results).length}개의 데이터</FileStatus>
			<FileStatus title={'신상정보'}>신상정보</FileStatus>
			<FileStatus title={'결과해석'}>결과해석</FileStatus>
		</S.FileManagerContainer>
	);
}

function FileStatus({ children, title }: FileStatusProps) {
	return (
		<S.FileStatusContainer>
			{title}
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
	`;

	export const FileName = styled.div`
		${Fonts.subtitle14medium}
		background-color: ${Colors.blue100};
		color: ${Colors.gray400};
		border-radius: 0.6rem;
		flex-grow: 1;
		padding: 1rem;
	`;
}
