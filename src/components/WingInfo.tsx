import styled from 'styled-components';
import Icon from './Icon';
import { Body1 } from './Typography';

type Props = { keyCount: number };

const WingInfo = ({ keyCount }: Props) => {
  return (
    <Container>
      <Icon icon="butterfly" color="blue_300" width={20} height={30} />
      <Body1>보유한 날갯짓</Body1>
      <Icon icon="divider" color="gray_200" width={10} height={12} />
      <Body1>{keyCount}회</Body1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export default WingInfo;
