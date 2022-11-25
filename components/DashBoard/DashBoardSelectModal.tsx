import { DashBoardModalProps } from './props';
import Modal from '../elements/Modal';
import styled from 'styled-components';
import Fonts from '../../constants/fonts';
import Colors from '../../constants/colors';
import { SelectSectionProps } from './styled';
import { svgRefresh } from '../../constants/svgs';
import IconButton from '../elements/IconButton';
import { useResultsValue } from '../../contexts/ResultsProviders';

export default function DashBoardSelectModal({
	onCancel,
	onConfirm,
	onRefresh,
}: DashBoardModalProps) {
	const resultsValue = useResultsValue();

	return (
		<Modal onCancel={onCancel} onConfirm={onConfirm}>
			<SelectContainer>
				<IconButtonWrapper>
					<IconButton onClick={onRefresh}>{svgRefresh}새로고침</IconButton>
				</IconButtonWrapper>
				<SelectSection isResult={true}>
					<h1>검사결과</h1>
					<p>
						Result 폴더에 포함된 {Object.keys(resultsValue).length}개의 파일이 자동으로 선택됩니다.
					</p>
				</SelectSection>
				<SelectSection>
					<h1>신상정보</h1>
					<p>드롭다운으로 선택할수잇게</p>
				</SelectSection>
				<SelectSection>
					<h1>결과해석</h1>
					<p>드롭다운으로 선택할수잇게</p>
				</SelectSection>
			</SelectContainer>
		</Modal>
	);
}

const SelectContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	position: relative;
`;

const IconButtonWrapper = styled.div`
	button {
		margin-left: auto;
		position: absolute;
		right: 0;
	}
`;

const SelectSection = styled.div<SelectSectionProps>`
	display: flex;
	flex-direction: column;
	text-align: left;
	gap: 1rem;

	h1 {
		${Fonts.heading18bold}
	}

	p {
		color: ${Colors.gray400};
		border: 0.1rem solid ${Colors.gray300};
		border-radius: 0.6rem;
		padding: 1rem;
	}
`;
