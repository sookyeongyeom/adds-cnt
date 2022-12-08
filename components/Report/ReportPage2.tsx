import styled from 'styled-components';
import Colors from '../../constants/colors';
import { useEffect, useState } from 'react';
import Profiles from '../../models/Profiles';
import { CardSortingLabels } from '../../constants/tests';
import Results from '../../models/Results';
import { SC } from '../../constants/styled';
import ReportResultRow from './ReportResultRow';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export default function ReportPage2() {
	const focusId = useSelector(({ focusId }: RootState) => focusId);
	const results = useSelector(({ results }: RootState) => results);
	const profiles = useSelector(({ profiles }: RootState) => profiles);

	const [profile, setProfile] = useState<Profiles>();
	const [result, setResult] = useState<Results>();

	useEffect(() => {
		if (profiles[focusId]) setProfile(profiles[focusId]);
	}, [profiles, focusId]);

	useEffect(() => {
		if (results[focusId]) setResult(results[focusId]);
	}, [results, focusId]);

	return (
		<S.Page2Container id='page2'>
			<S.NavyTop src='/assets/page2_남색상단.png' />
			<S.GrayBottom src='/assets/page2_회색하단.png' />
			<S.ContentContainer>
				<S.ProfileTable>
					<tbody>
						<tr>
							<th>이름</th>
							<td>{profile && profile.getName()}</td>
							<th>연령</th>
							<td>만 {profile && profile.getAge()}</td>
							<th>성별</th>
							<td>{profile && profile.getSex()}</td>
							<th>실시일</th>
							<td>{profile && profile.getDate()}</td>
						</tr>
					</tbody>
				</S.ProfileTable>
				<S.Contact>
					안녕하십니까, 연구 참여 아동의 인지기능평가 결과를 보내드립니다. 결과와 관련하여
					문의사항이 있으시면 연락주십시오. 감사합니다. *담당연구원: 오서진(임상심리전문가), 연락처:{' '}
					<SC.Underline>addsyonsei@yonsei.ac.kr</SC.Underline> / 010-2763-3149
				</S.Contact>
				<S.Row1>
					<section>
						<div>
							<div>·</div>
							<div>
								<SC.Emp>실행기능(Executive function)이란,</SC.Emp> 목표를 달성하기 이해 상황에 맞게
								행동과 사고를 조절하고 관리하는 능력으로, 두뇌의 전두엽(오른쪽 그림 참조)에서
								담당하는 고차적인 인지능력입니다.
							</div>
						</div>
						<div>
							<div>·</div>
							<div>
								<SC.Emp>하위 영역</SC.Emp>으로는 상황을 미리 예측하고 계획을 세우는 능력(계획력),
								과제나 상황에 따라 대안을 생각하고 유연하게 사고하는 능력(인지적 융통성), 목표행동을
								달성하기 위해 불필요한 자극을 무시하고 행동을 억제하는 능력(행동억제 능력), 상황의
								요구에 따라 주의를 조절하고 변경할 수 있는 능력(주의조절력) 등이 포함됩니다.
							</div>
						</div>
						<div>
							<div>·</div>
							<div>
								본 연구에서는 전산화된(computerized) 평가도구인 CNT 4.0을 활용하여 실행기능을
								평가하는 대표적인 검사 3가지를 실시하였습니다.
							</div>
						</div>
						<div>
							<div>·</div>
							<div>
								<SC.Emp>결과 해석 시 주의 사항:</SC.Emp> 실행기능의 발달 시기는 학령기 무렵(만
								6세경)부터 후기 청소년기(10대 후반)까지로 알려져 있습니다. 하위 영역별 발달 양상에는
								개인차가 있으며, 현재 아동의 평가 결과가 고정되어 성인기까지 유지되는 것은 아님을
								참고해주십시오.
							</div>
						</div>
					</section>
					<img src='/assets/page2_brain.png' />
				</S.Row1>
				<S.Row2>
					<section>
						<h1>점수대별 수준 해석하기</h1>{' '}
						<div>
							<div>✓</div>
							<div>
								모든 검사 결과 그래프에서{' '}
								<SC.Emp>파란색 점선은 동일 연령대의 평균 수행도(T점수=50)</SC.Emp>를 나타냅니다.
							</div>
						</div>
						<div>
							<div>✓</div>
							<div>
								그래프가 빨간색 선 미만인 경우는(T점수&lt;30), 해당 과제에서 아동의 수행이 명백하게
								저조함을 의미합니다.
							</div>
						</div>
						<div>
							<div>✓</div>
							<div>각 점수대별 수준 해석은 오른쪽 표를 참고하십시오.</div>
						</div>
					</section>
					<section>
						<table>
							<thead>
								<tr>
									<th>수준</th>
									<th>T점수</th>
									<th>백분위(%)</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>최우수(very superior)</td>
									<td>70T 이상</td>
									<td>98-100%</td>
								</tr>
								<tr>
									<td>우수(superior)</td>
									<td>64-69T</td>
									<td>91-97%</td>
								</tr>
								<tr>
									<td>보통 상(high average)</td>
									<td>57~63T</td>
									<td>75-90%</td>
								</tr>
								<tr>
									<td>보통(average)</td>
									<td>44~56T</td>
									<td>25-74%</td>
								</tr>
								<tr>
									<td>보통 하(low average)</td>
									<td>37-43T</td>
									<td>10-24%</td>
								</tr>
								<tr>
									<td>경계선(borderline)</td>
									<td>31-36T</td>
									<td>3-9%</td>
								</tr>
								<tr>
									<td>손상(impairment)</td>
									<td>30T 이하</td>
									<td>2% 이하</td>
								</tr>
							</tbody>
						</table>
					</section>
				</S.Row2>
				<ReportResultRow
					title={'1. 위스콘신 카드분류 검사'}
					titleEng={'(Wisconsin Card Sorting Test, WCST)'}
					subtitle={
						'본 검사는 실행기능 중에서도 특히 추상적 문제해결력, 인지적 융통성, 즉 필요에 따라 반응 경향을 바꾸는 능력 (i.e. set-shifting)을 평가합니다.'
					}
					label1={`${CardSortingLabels.TTtc}`}
					label2={`${CardSortingLabels.PEtc}`}
					label3={`${CardSortingLabels.NEtc}`}
					value1={result?.getCardSorting()?.getTTtc() as number}
					value2={result?.getCardSorting()?.getPEtc() as number}
					value3={result?.getCardSorting()?.getNEtc() as number}
				/>
			</S.ContentContainer>
		</S.Page2Container>
	);
}

namespace S {
	export const Page2Container = styled.div``;

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
	`;

	export const ProfileTable = styled.table`
		border: 0.1rem solid ${Colors.gray500};
		margin-bottom: 1rem;

		td,
		th {
			padding: 0.5rem;
			border-left: 0.1rem solid ${Colors.gray500};
			border-right: 0.1rem solid ${Colors.gray500};
		}

		th {
			background-color: ${Colors.gray100};
			padding: 0.5rem 1.5rem;
		}

		td {
			padding: 0.5rem 2rem;
		}
	`;

	export const Contact = styled.div`
		font-size: 1.4rem;
		text-align: left;
		word-break: keep-all;
		line-height: 130%;
		margin-bottom: 1rem;
	`;

	export const Row1 = styled(SC.Row)`
		display: flex;
		align-items: center;
		margin-bottom: 1rem;

		> section {
			background-color: ${Colors.blue100};
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 1.5rem;
			padding: 1.5rem;
			text-align: left;
			word-break: keep-all;

			> div {
				/* 주의사항 안내 */
				display: flex;
				gap: 0.5rem;

				> div {
					font-size: 1.4rem;
					line-height: 140%;
				}
			}
		}

		> img {
			/* 전두엽 사진 */
			width: 20rem;
			height: 25rem;
			padding: 2.5rem;
			padding-right: 1rem;
		}
	`;

	export const Row2 = styled(SC.Row)`
		text-align: left;
		gap: 2rem;
		margin-bottom: 1rem;

		section:first-of-type {
			/* 점수대별 수준 해석하기 */
			width: 50%;
			border: 0.1rem dashed ${Colors.gray400};
			padding: 1rem 1.5rem;
			display: flex;
			flex-direction: column;
			gap: 1.2rem;
			align-self: stretch;

			> h1 {
				/* 제목 */
				text-align: center;
				font-weight: 600;
				margin-top: 1.5rem;
				margin-bottom: 1.4rem;
			}

			> div {
				display: flex;
				gap: 0.5rem;
			}

			> div > div {
				/* 내용 */
				font-size: 1.4rem;
				line-height: 140%;
				word-break: keep-all;
			}
		}

		section:last-of-type {
			/* 수준 테이블 */
			flex-grow: 1;

			table {
				width: 100%;
			}

			th,
			td {
				font-size: 1.3rem;
			}

			th {
				padding: 0.7rem;
				text-align: center;
				border-bottom: 0.15rem solid ${Colors.gray500};
				background-color: ${Colors.gray100};
				font-weight: 600;
			}

			td {
				padding: 0.7rem;
			}

			tr:nth-child(even) {
				background-color: ${Colors.gray100};
			}
		}
	`;
}
