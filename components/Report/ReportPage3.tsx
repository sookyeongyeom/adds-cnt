import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Results from '../../models/Results';
import ReportResultRow from './ReportResultRow';
import { WordColorLabels, TrailMakingLabels } from '../../constants/tests';
import Colors from '../../constants/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export default function ReportPage3() {
	const focusId = useSelector(({ focusId }: RootState) => focusId);
	const results = useSelector(({ results }: RootState) => results);

	const [result, setResult] = useState<Results>();

	useEffect(() => {
		if (results[focusId]) setResult(results[focusId]);
	}, [results, focusId]);

	return (
		<S.Page3Container id='page3'>
			<S.NavyTop src='/assets/page2_남색상단.png' />
			<S.GrayBottom src='/assets/page2_회색하단.png' />
			<S.ContentContainer>
				<ReportResultRow
					title={'2. 스트룹 색상-단어 검사'}
					titleEng={'(Stroop Color-Word Test)'}
					subtitle={
						'세 가지 점수 중 단어 점수, 색상 점수는 짧은 시간 동안 단순 자극을 처리하는 속도를 평가합니다. 색상-단어 점수는 갈등상황에서 자동화된 반응을 억제하고 주어진 규칙에 따라 반응하는 능력(행동억제력)을 평가합니다.'
					}
					label1={WordColorLabels.TC1}
					label2={WordColorLabels.TC2}
					label3={WordColorLabels.TC5}
					value1={result?.getWordColor()?.getTC1() as number}
					value2={result?.getWordColor()?.getTC2() as number}
					value3={result?.getWordColor()?.getTC5() as number}
				/>
				<ReportResultRow
					title={'3. 선로 잇기 검사'}
					titleEng={'(Trail Making Test, TMT)'}
					subtitle={
						'선로 잇기 검사(TMT)의 두 시행 중 TMT-A는 여러 자극 중에서 한 가지 자극에만 주의를 집중하는 능력(selective attention, 선택적 주의력)을, TMT-B는 두 종류 이상의 자극에 주의를 적절히 분배하는 능력(divided attention, 분할 주의력)과 인지적 융통성의 평가에 초점이 맞추어져 있습니다.'
					}
					label1={TrailMakingLabels.TC1}
					label2={TrailMakingLabels.TC2}
					value1={result?.getTrailMaking()?.getTC1() as number}
					value2={result?.getTrailMaking()?.getTC2() as number}
				/>
				<section>
					<h1>전체 요약</h1>
					<div>
						검사 결과, 목표지향적 행동에 필수적으로 요구되는 추상적 문제해결력은 정상 범위 내에서
						발휘되었습니다. 단, 응답 '속도＇가 중요한 과제들에서는 수행이 상대적으로 저조한
						편이었습니다. (스트룹 검사 결과, 과제에서 요구되는 방식으로 반응을 억제하는 능력이 여타
						능력에 비해 뚜렷하게 저조한 것으로 나타납니다. 선로잇기 검사의 경우, 특히 TMT-B 시행 중
						‘가-나-다-’ 순서를 정확하게 알지 못해 제대로 수행하기 어려워했습니다.) 실생활에서도
						반응속도 지연 등을 포함하여 주의력 문제가 나타나는 경우라면 6개월~1년 이내 재검사를
						권합니다. (본 연구에서도 1년 후 재검사를 시행할 예정입니다.)
					</div>
				</section>
			</S.ContentContainer>
		</S.Page3Container>
	);
}

namespace S {
	export const Page3Container = styled.div``;

	export const Background = styled.img`
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 3;
	`;

	export const NavyTop = styled(Background)``;

	export const GrayBottom = styled(Background)`
		top: unset;
		bottom: -0.2rem;
	`;

	export const ContentContainer = styled.div`
		height: 100%;
		padding: 7rem 3rem 5rem 3rem;

		> section {
			text-align: left;

			> h1 {
				font-size: 2rem;
				font-weight: 600;
				margin-bottom: 1rem;
			}

			> div {
				background-color: ${Colors.blue100};
				padding: 1rem;
				line-height: 150%;
			}
		}
	`;
}
