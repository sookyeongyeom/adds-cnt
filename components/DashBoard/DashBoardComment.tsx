import { useSelector } from 'react-redux';
import { SC } from '../../constants/styled';
import { RootState } from '../../modules';
import DashBoardCategory from './DashBoardCategory';
import styled from 'styled-components';
import Fonts from '../../constants/fonts';

export default function DashBoardComment() {
	const focusId = useSelector(({ focusId }: RootState) => focusId);
	const comments = useSelector(({ comments }: RootState) => comments);

	return (
		<DashBoardCategory title='Result'>
			{Object.keys(comments).length ? (
				<>
					<SC.CategorySection>
						<div>Span</div>
						<S.Comment>{comments[focusId] && comments[focusId].getSpanComment()}</S.Comment>
					</SC.CategorySection>
					<SC.CategorySection>
						<div>Word Color</div>
						<S.Comment>{comments[focusId] && comments[focusId].getWordColorComment()}</S.Comment>
					</SC.CategorySection>
					<SC.CategorySection>
						<div>Trail Making</div>
						<S.Comment>{comments[focusId] && comments[focusId].getTrailMakingComment()}</S.Comment>
					</SC.CategorySection>
					<SC.CategorySection>
						<div>전체 요약</div>
						<S.Comment>{comments[focusId] && comments[focusId].getTotalComment()}</S.Comment>
					</SC.CategorySection>
				</>
			) : (
				<SC.Guide>좌측 사이드바의 [파일선택]을 눌러 결과해석 파일을 선택해주세요</SC.Guide>
			)}
		</DashBoardCategory>
	);
}

namespace S {
	export const Comment = styled.p`
		${Fonts.body14regular}
		line-height: 130%;
	`;
}
