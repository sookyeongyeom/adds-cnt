import styled from 'styled-components';
import Colors from '../../constants/colors';
import { useCurrentPatientValue } from '../../contexts/CurrentPatientProviders';
import { useProfilesValue } from '../../contexts/ProfilesProviders';

export default function ReportPage2() {
	const currentPatientValue = useCurrentPatientValue();
	const profilesValue = useProfilesValue();

	return (
		<Page2Container id='page2'>
			<NavyTop src='/assets/page2_남색상단.png' />
			<GrayBottom src='/assets/page2_회색하단.png' />
			<ContentContainer>
				<ProfileTable>
					<tbody>
						<tr>
							<th>이름</th>
							<td>
								{profilesValue[currentPatientValue] && profilesValue[currentPatientValue].getName()}
							</td>
							<th>연령</th>
							<td>
								만{' '}
								{profilesValue[currentPatientValue] && profilesValue[currentPatientValue].getAge()}
							</td>
							<th>성별</th>
							<td>
								{profilesValue[currentPatientValue] && profilesValue[currentPatientValue].getSex()}
							</td>
							<th>실시일</th>
							<td>
								{profilesValue[currentPatientValue] && profilesValue[currentPatientValue].getDate()}
							</td>
						</tr>
					</tbody>
				</ProfileTable>
				<Contact>
					안녕하십니까, 연구 참여 아동의 인지기능평가 결과를 보내드립니다. 결과와 관련하여
					문의사항이 있으시면 연락주십시오. 감사합니다. *담당연구원: 오서진(임상심리전문가), 연락처:
					addsyonsei@yonsei.ac.kr/ 010-2763-3149
				</Contact>
				<Row1>
					<section>
						<div>
							실행기능(Executive function)이란, 목표를 달성하기 이해 상황에 맞게 행동과 사고를
							조절하고 관리하는 능력으로, 두뇌의 전두엽(오른쪽 그림 참조)에서 담당하는 고차적인
							인지능력입니다.
						</div>
						<div>
							하위 영역으로는 상황을 미리 예측하고 계획을 세우는 능력(계획력), 과제나 상황에 따라
							대안을 생각하고 유연하게 사고하는 능력(인지적 융통성), 목표행동을 달성하기 위해
							불필요한 자극을 무시하고 행동을 억제하는 능력(행동억제 능력), 상황의 요구에 따라
							주의를 조절하고 변경할 수 있는 능력(주의조절력) 등이 포함됩니다.
						</div>
						<div>
							본 연구에서는 전산화된(computerized) 평가도구인 CNT 4.0을 활용하여 실행기능을 평가하는
							대표적인 검사 3가지를 실시하였습니다.
						</div>
						<div>
							결과 해석 시 주의 사항: 실행기능의 발달 시기는 학령기 무렵(만 6세경)부터 후기
							청소년기(10대 후반)까지로 알려져 있습니다. 하위 영역별 발달 양상에는 개인차가 있으며,
							현재 아동의 평가 결과가 고정되어 성인기까지 유지되는 것은 아님을 참고해주십시오.
						</div>
					</section>
					<img src='/assets/page2_brain.png' />
				</Row1>
				<Row2>
					<section>
						<h1>점수대별 수준 해석하기</h1>{' '}
						<div>
							모든 검사 결과 그래프에서 파란색 점선은 동일 연령대의 평균 수행도(T점수=50)를
							나타냅니다.
						</div>
						<div>
							그래프가 빨간색 선 미만인 경우는(T점수&lang;30), 해당 과제에서 아동의 수행이 명백하게
							저조함을 의미합니다.
						</div>
						<div>각 점수대별 수준 해석은 오른쪽 표를 참고하십시오.</div>
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
				</Row2>
				<Row3>
					<section>
						<h1>
							1. 위스콘신 카드분류 검사 <span>(Wisconsin Card Sorting Test, WCST)</span>
						</h1>
						<h2>
							본 검사는 실행기능 중에서도 특히 추상적 문제해결력, 인지적 융통성, 즉 필요에 따라 반응
							경향을 바꾸는 능력 (i.e. set-shifting)을 평가합니다.
						</h2>
					</section>
					<div>
						<section>그래프</section>
						<section>
							<h1>결과해석</h1>
						</section>
					</div>
				</Row3>
			</ContentContainer>
		</Page2Container>
	);
}

const Page2Container = styled.div``;

const Background = styled.img`
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 3;
`;

const NavyTop = styled(Background)``;

const GrayBottom = styled(Background)`
	top: unset;
	bottom: -0.2rem;
`;

const ContentContainer = styled.div`
	height: 100%;
	padding: 7rem 3rem 5rem 3rem;
`;

const ProfileTable = styled.table`
	border: 0.1rem solid ${Colors.gray500};
	margin-bottom: 2rem;

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

const Contact = styled.div`
	font-size: 1.4rem;
	text-align: left;
	word-break: keep-all;
	line-height: 1.8rem;
	margin-bottom: 2rem;
`;

const Row = styled.div`
	display: flex;
	align-items: center;
`;

const Row1 = styled(Row)`
	display: flex;
	align-items: center;
	margin-bottom: 2rem;

	> section {
		background-color: ${Colors.blue100};
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
		padding: 1.8rem;
		text-align: left;
		word-break: keep-all;

		> div {
			font-size: 1.5rem;
		}
	}

	> img {
		width: 20rem;
		height: 25rem;
		padding: 2.5rem;
		padding-right: 1rem;
	}
`;

const Row2 = styled(Row)`
	text-align: left;
	gap: 2rem;
	margin-bottom: 2rem;

	section:first-of-type {
		width: 50%;
		border: 0.1rem dotted ${Colors.gray500};
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-self: stretch;
		justify-content: center;

		h1 {
			text-align: center;
			font-weight: 600;
		}
	}

	section:last-of-type {
		flex-grow: 1;

		table {
			width: 100%;
		}

		th {
			padding: 1rem;
			text-align: center;
			border-bottom: 0.1rem solid ${Colors.gray500};
			background-color: ${Colors.gray100};
		}

		td {
			padding: 0.7rem;
		}

		tr:nth-child(even) {
			background-color: ${Colors.gray100};
		}
	}
`;

const Row3 = styled(Row)`
	text-align: left;
	flex-direction: column;

	> section:first-of-type {
		background-color: ${Colors.gray100};
		padding: 1rem;
		margin-bottom: 1rem;

		h1 {
			font-size: 2rem;
			font-weight: 600;
			margin-bottom: 0.7rem;

			span {
				font-size: 1.4rem;
				font-weight: 500;
			}
		}

		h2 {
			font-size: 1.4rem;
		}
	}

	> div {
		display: flex;
		width: 100%;

		section:first-of-type {
			background-color: beige;
			width: 50%;
		}

		section:last-of-type {
			background-color: ${Colors.blue100};
			flex-grow: 1;
		}
	}
`;
