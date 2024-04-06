import { useEffect, useState } from 'react';
import CTAButton from '../components/CTAButton';
import FixedFooter from '../components/FixedFooter';
import styled from 'styled-components';
import Badge from '../components/Badge';
import { Subtitle1, Subtitle3 } from '../components/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import useUser from '../utils/useUser';
import { userApi } from '../api';

const SendCompletePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUser();

  const [keyCount, setKeyCount] = useState(0);

  const receiver = location.state.receiver;

  if (!receiver) {
    navigate('/mypage');
    return;
  }

  useEffect(() => {
    userApi
      .get(user!.discordId)
      .then((res) => setKeyCount(res.keyCount))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <Subtitle3>보유한 날갯짓 | {keyCount}회</Subtitle3>

      <Wrapper>
        <Subtitle1
          style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}
        >{`소중한 마음을 전달했어요\n앞으로 어떤 나비효과가 일어날까요?`}</Subtitle1>
        <Badge variant="letter" size={200} />
        <RecieverWrapper>
          <Subtitle1 sansita color="gray_300">
            To.
          </Subtitle1>
          <Subtitle1>{receiver}</Subtitle1>
        </RecieverWrapper>
      </Wrapper>

      <FixedFooter>
        <ButtonContainer>
          <CTAButton
            variant="secondary"
            onClick={() => {
              navigate('/mypage');
            }}
          >
            마음함으로 가기
          </CTAButton>
          <CTAButton
            onClick={() => {
              navigate('/send');
            }}
          >
            편지 더 보내기
          </CTAButton>
        </ButtonContainer>
      </FixedFooter>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-right: 15px;
  padding-left: 15px;
`;
const Wrapper = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 68px;
  gap: 48px;
`;
const RecieverWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  gap: 6px;
  padding: 32px 0;
  border-top: 1px solid ${({ theme }) => theme.color.gray_200};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray_200};
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export default SendCompletePage;
