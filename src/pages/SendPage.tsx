import styled from 'styled-components';
import CTAButton from '../components/CTAButton';
import Navigation from '../components/Navigation';
import TextField from '../components/TextField';
import { Subtitle1, Title2 } from '../components/Typography';
import { useEffect, useState } from 'react';
import CheckBox from '../components/CheckBox';
import FixedFooter from '../components/FixedFooter';
import { letterApi } from '../api';
import { useNavigate } from 'react-router-dom';
import TextArea from '../components/TextArea';
import useUser from '../utils/useUser';
import LetterPaper from '../components/LetterPaper';
import Envelope from '../components/Envelope';
import { BadgeType, badges } from '../assets/badges';

const SendPage = () => {
  const { user } = useUser();
  const [isRandomChecked, setIsRandomChecked] = useState(false);
  const [receiverDiscordId, setReceiverDiscordId] = useState('');
  const [content, setContent] = useState('');
  const [sender, setSender] = useState('');
  const [badge, setBadge] = useState<BadgeType>();

  useEffect(() => {
    const badgeKeys = Object.keys(badges);
    const randomBadge = badgeKeys[Math.floor(Math.random() * badgeKeys.length)] as BadgeType;
    setBadge(randomBadge);
  }, []);

  useEffect(() => {
    setSender(user?.nickname ?? '');
  }, [user]);

  const [isPosting, setIsPosting] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async () => {
    if (!badge || !user) {
      window.alert('로그인이 필요합니다.');
      return navigate('/login');
    }

    try {
      setIsPosting(true);
      //   TODO 랜덤처리
      await letterApi.send([
        {
          senderId: user.userId,
          badge,
          receiverDiscordId,
          content,
          senderNickname: sender,
        },
      ]);
      setIsPosting(false);
      navigate('/send/complete', { state: { receiver: receiverDiscordId, badge } });
    } catch (e) {
      setIsPosting(false);
      console.error(e);
    }
  };

  const isInvalidInput = () => {
    return receiverDiscordId.length === 0 || content.length === 0 || sender.length === 0;
  };

  return (
    <div style={{ position: 'relative' }}>
      <Navigation />
      <StyledSendContainer>
        <Title2>따뜻한 마음을 전해보세요 :)</Title2>

        <LetterContainer>
          <LetterPaper>
            <StyledSendForm>
              <ReceiverContainer>
                <Flex>
                  <Subtitle1 sansita color="gray_300">
                    To
                  </Subtitle1>
                  <CheckBox
                    label="랜덤"
                    checked={isRandomChecked}
                    onChange={() => setIsRandomChecked((prev) => !prev)}
                  />
                </Flex>

                <TextField
                  value={isRandomChecked ? '' : receiverDiscordId}
                  onChange={(e) => setReceiverDiscordId(e.target.value)}
                  placeholder={isRandomChecked ? '랜덤으로 마음이 보내져요.' : '디스코드 아이디를 입력해 주세요.'}
                  disabled={isRandomChecked}
                />
              </ReceiverContainer>
              <TextArea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="전하고 싶은 마음을 입력해 주세요."
                maxLength={150}
              />
            </StyledSendForm>
          </LetterPaper>
          <Envelope badge={badge || 'letter'} senderValue={sender} onChange={setSender} />
        </LetterContainer>

        <FixedFooter>
          <CTAButton disabled={isPosting || isInvalidInput()} onClick={onSubmit}>
            마음 편지 보내기
          </CTAButton>
        </FixedFooter>
      </StyledSendContainer>
    </div>
  );
};

const StyledSendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-bottom: 18px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LetterContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 36px;

  .LetterPaper {
    z-index: 1;
  }

  .Envelope {
    top: 304px;
  }
`;
export default SendPage;
