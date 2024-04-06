import styled from 'styled-components';
import CTAButton from '../components/CTAButton';
import Navigation from '../components/Navigation';
import TextField from '../components/TextField';
import { Subtitle1, Title2 } from '../components/Typography';
import { useState } from 'react';
import CheckBox from '../components/CheckBox';
import FixedFooter from '../components/FixedFooter';
import { letterApi } from '../api';
import { useNavigate } from 'react-router-dom';
import TextArea from '../components/TextArea';

const SendPage = () => {
  const [isRandomChecked, setIsRandomChecked] = useState(false);
  const [receiver, setReceiver] = useState('');
  const [content, setContent] = useState('');
  const [sender, setSender] = useState('TODO');

  const [isPosting, setIsPosting] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async () => {
    if (content.length > 150) {
      window.alert('150자 미만으로 입력해 주세요.');
      return;
    }

    try {
      setIsPosting(true);
      //   TODO 랜덤처리
      await letterApi.send({ receiverDiscordId: receiver, content, senderNickname: sender });
      setIsPosting(false);
      navigate('/send/complete', { state: { receiver } });
    } catch (e) {
      setIsPosting(false);
      console.error(e);
    }
  };

  const isInvalidInput = () => {
    return receiver.length === 0 || content.length === 0 || sender.length === 0;
  };

  return (
    <div>
      <Navigation />
      <StyledSendContainer>
        <Title2>따뜻한 마음을 전해보세요</Title2>

        {/* TODO 영문 타이포 */}
        <StyledSendForm>
          <ReceiverContainer>
            <Wrapper>
              <Subtitle1 sansita color="gray_300">
                To
              </Subtitle1>
              <CheckBox label="랜덤" checked={isRandomChecked} onChange={() => setIsRandomChecked((prev) => !prev)} />
            </Wrapper>

            <TextField
              value={isRandomChecked ? '' : receiver}
              onChange={(e) => setReceiver(e.target.value)}
              placeholder={isRandomChecked ? '랜덤으로 마음이 보내져요.' : '디스코드 아이디를 입력해 주세요.'}
              disabled={isRandomChecked}
            />
          </ReceiverContainer>
          <TextArea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="전하고 싶은 마음을 입력해 주세요."
          />

          {/* TODO 영문 타이포 */}
          <SenderContainer>
            <Subtitle1 sansita color="gray_300">
              From
            </Subtitle1>
            <TextField
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              placeholder="보낼 이름을 입력해 주세요."
            />
          </SenderContainer>

          <FixedFooter>
            <CTAButton disabled={isPosting || isInvalidInput()} onClick={onSubmit}>
              마음 편지 보내기
            </CTAButton>
          </FixedFooter>
        </StyledSendForm>
      </StyledSendContainer>
    </div>
  );
};

const StyledSendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
`;
const StyledSendForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ReceiverContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 8px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
`;
const SenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
  margin-bottom: auto;
`;

export default SendPage;
