import styled from 'styled-components';
import DashBoardCategory from './DashBoardCategory';

export default function DashBoardProfile() {
	return <DashBoardCategory title='Profile' rows={['이름', '연령', '성별', '학교', '실시일']} />;
}
