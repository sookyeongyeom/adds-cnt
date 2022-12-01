import styled from 'styled-components';
import Colors from '../../constants/colors';

export default function ReportPage1() {
	return (
		<Page1Container id='page1'>
			<NavyBackground src='/assets/page1_남색배경.png' />
			<NavyDecoration src='/assets/page1_남색무늬.png' />
			<GrayBackground src='/assets/page1_회색배경.png' />
			<NavyBottom src='/assets/page1_남색하단.png' />
			<YonseiLogo src='/assets/page1_로고.png' />
			<Title>
				<TitleBorder src='/assets/page1_border.png' />
				<h1>
					2022 ADDS Yonsei
					<br />
					인지기능검사 결과 보고서
				</h1>
				<h2>(CNT 4.0) 전두엽 실행기능 검사</h2>
			</Title>
		</Page1Container>
	);
}

const Page1Container = styled.div``;

const Background = styled.img`
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 3;
`;

const NavyBackground = styled(Background)``;

const NavyDecoration = styled(Background)`
	top: -1.2rem;
`;

const GrayBackground = styled(Background)`
	z-index: 0;
	top: -1.5rem;
	width: 100.2%;
`;

const NavyBottom = styled(Background)`
	top: unset;
	bottom: 0;
`;

const YonseiLogo = styled(Background)`
	top: unset;
	bottom: 24rem;
	left: 1rem;
	width: 45%;
`;

const Title = styled.div`
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

const TitleBorder = styled.img`
	position: relative;
	width: 1rem;
	height: 9rem;
	top: 0.3rem;
`;
