import { useEffect, useState } from 'react';
import CTAButton from '../components/CTAButton';
import FixedFooter from '../components/FixedFooter';
import styled from 'styled-components';
import Badge from '../components/Badge';
import { Subtitle1 } from '../components/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import useUser from '../utils/useUser';
import { userApi } from '../api';
import WingInfo from '../components/WingInfo';

const SendCompletePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUser();

  const [keyCount, setKeyCount] = useState(0);

  const { receiverId, badge } = location.state;

  const [receiverNickname, setReceiverNickname] = useState('');

  if (!receiverId) {
    navigate('/mypage');
    return;
  }

  useEffect(() => {
    if (user) {
      userApi
        .get(user.discordId)
        .then((res) => setKeyCount(res.wingCount))
        .catch((err) => console.error(err));
    }
  }, [user]);

  useEffect(() => {
    userApi
      .get(receiverId)
      .then((res) => setReceiverNickname(res.nickname))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <WingInfo keyCount={keyCount} />

      <Wrapper>
        <Subtitle1
          style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}
        >{`소중한 마음을 전달했어요\n앞으로 어떤 나비효과가 일어날까요?`}</Subtitle1>
        <Badge variant={badge ?? 'letter'} size={200} />
        <RecieverWrapper>
          <Subtitle1 sansita color="gray_300">
            To.
          </Subtitle1>
          <Subtitle1>{receiverNickname}</Subtitle1>
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
