import styled from 'styled-components';
import Colors from '../../constants/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules/index';
import Fonts from '../../constants/fonts';

export default function ReportPage1() {
	const profiles = useSelector(({ profiles }: RootState) => profiles);
	const focusId = useSelector(({ focusId }: RootState) => focusId);

	return (
		<S.Page1Container id='page1'>
			<S.NavyBackground src='/assets/page1_남색배경.png' />
			<S.NavyDecoration src='/assets/page1_남색무늬.png' />
			<S.GrayBackground src='/assets/page1_회색배경.png' />
			<S.NavyBottom src='/assets/page1_남색하단.png' />
			<S.YonseiLogo src='/assets/page1_로고.png' />
			<S.Title>
				<S.TitleBorder src='/assets/page1_border.png' />
				<h1>
					2023 ADDS Yonsei
					<br />
					인지기능검사 결과 보고서
				</h1>
				<h2>(CNT 4.0) 전두엽 실행기능 검사</h2>
			</S.Title>
			<S.ProfileTable>
				<tbody>
					<tr>
						<th>이 름</th>
						<td>{profiles[focusId] && profiles[focusId].getName()}</td>
					</tr>
					<tr>
						<th>학 교</th>
						<td>{profiles[focusId] && profiles[focusId].getSchool()}</td>
					</tr>
					<tr>
						<th>만 연 령</th>
						<td>{profiles[focusId] && profiles[focusId].getAge() + '세'}</td>
					</tr>
					<tr>
						<th>성 별</th>
						<td>{profiles[focusId] && profiles[focusId].getSex()}</td>
					</tr>
					<tr>
						<th>실 시 일</th>
						<td>{profiles[focusId] && profiles[focusId].getDate()}</td>
					</tr>
				</tbody>
			</S.ProfileTable>
		</S.Page1Container>
	);
}

namespace S {
	export const Page1Container = styled.div`
		position: relative;
	`;

	export const Background = styled.img`
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 3;
	`;

	export const NavyBackground = styled(Background)``;

	export const NavyDecoration = styled(Background)`
		top: -1.2rem;
	`;

	export const GrayBackground = styled(Background)`
		z-index: 0;
		top: -1.5rem;
		width: 100.2%;
	`;

	export const NavyBottom = styled(Background)`
		top: unset;
		bottom: 0;
	`;

	export const YonseiLogo = styled(Background)`
		top: unset;
		bottom: 29rem;
		left: 0rem;
		width: 45%;
	`;

	export const Title = styled.div`
		display: flex;
		align-items: center;
		position: absolute;
		top: 19.3rem;
		left: 6rem;
		z-index: 5;
		background-color: transparent;
		text-align: left;
		gap: 1rem;

		> h1 {
			font-size: 3.8rem;
			font-weight: bold;
			color: ${Colors.white};
			line-height: 5rem;
		}

		> h2 {
			position: absolute;
			left: 2rem;
			bottom: -2.8rem;
			color: ${Colors.white};
			font-size: 1.8rem;
		}
	`;

	export const TitleBorder = styled.img`
		position: relative;
		width: 1rem;
		height: 9rem;
		top: 0.3rem;
	`;

	export const ProfileTable = styled.table`
		position: absolute;
		z-index: 10;
		right: 2rem;
		bottom: 5rem;

		th,
		td {
			padding: 0.8rem;
			position: relative;
			top: 0.7rem;
		}

		th {
			${Fonts.subtitle16semibold}
			width: 16rem;
			padding: 0.8rem 4rem;
			padding-right: 5rem;
			text-align: justify;

			&:after {
				content: '';
				display: inline-block;
				width: 100%;
			}
		}

		td {
			text-align: left;
			width: 23rem;
		}

		tr:first-of-type {
			th,
			td {
				border-top: 0.1rem solid ${Colors.gray500};
				border-bottom: 0.1rem solid ${Colors.gray500};
			}
		}
	`;
}
