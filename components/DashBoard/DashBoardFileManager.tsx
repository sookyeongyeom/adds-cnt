import styled from 'styled-components';
import Colors from '../../constants/colors';
import Button from '../elements/Button';
import { ButtonTypes } from '../../constants/buttons';
import Fonts from '../../constants/fonts';
import { ChildrenType } from '../../@types/base';
import { DashBoardFileManagerProps } from './props';

export default function DashBoardFileManager({ onClickOpenSelect }: DashBoardFileManagerProps) {
	return (
		<FileManagerContainer>
			<Title>파일관리자</Title>
			<FileAction>
				<Button onClick={console.log} buttonType={ButtonTypes.small}>
					도움말
				</Button>
				<Button onClick={console.log} buttonType={ButtonTypes.small}>
					파일업로드
				</Button>
				<Button onClick={onClickOpenSelect} buttonType={ButtonTypes.small}>
					파일선택
				</Button>
			</FileAction>
			<FileStatus>검사결과</FileStatus>
			<FileStatus>신상정보</FileStatus>
			<FileStatus>결과해석</FileStatus>
		</FileManagerContainer>
	);
}

function FileStatus({ children }: ChildrenType) {
	return (
		<FileStatusContainer>
			{children}
			<FileName>선택된 파일이 없습니다.</FileName>
		</FileStatusContainer>
	);
}

const FileManagerContainer = styled.div`
	div {
		display: flex;
	}
`;

const Title = styled.div`
	${Fonts.subtitle16semibold}
	padding: 1.5rem;
	border-bottom: 0.1rem solid ${Colors.gray300};
	background-color: ${Colors.blue700};
	color: ${Colors.white};
`;

const FileAction = styled.div`
	background-color: ${Colors.white};
	justify-content: space-evenly;
	padding: 1rem;
`;

const FileStatusContainer = styled.div`
	${Fonts.subtitle14medium}
	background-color: ${Colors.white};
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
`;

const FileName = styled.div`
	${Fonts.subtitle14medium}
	background-color: ${Colors.blue100};
	color: ${Colors.gray400};
	border-radius: 0.6rem;
	flex-grow: 1;
	padding: 1rem;
`;