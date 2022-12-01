import styled from 'styled-components';

export default function ReportPage2() {
	return (
		<Page2Container id='page2'>
			<NavyTop src='/assets/page2_남색상단.png' />
			<GrayBottom src='/assets/page2_회색하단.png' />
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
