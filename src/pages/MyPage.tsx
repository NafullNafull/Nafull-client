import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import styled from 'styled-components';
import Tag from '../components/Tag';
import { Body1, Body2, Subtitle1, Subtitle3, Title2 } from '../components/Typography';
import Badge from '../components/Badge';
import { letterApi, userApi } from '../api';
import { UserData } from '../api/users';
import useUser from '../utils/useUser';
import { useNavigate } from 'react-router-dom';
import FixedFooter from '../components/FixedFooter';
import CTAButton from '../components/CTAButton';
import Modal from '../components/Modal';
import { Letter } from '../api/letters';

const REQUIRED_KEY_COUNT = 2;

const MyPage = () => {
  const { user } = useUser();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [openedModal, setOpenedModal] = useState<'confirm' | 'warning' | null>(null);
  const [clickedLetter, setClickedLetter] = useState<null | Letter>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      userApi
        .get(user!.discordId)
        .then((res) => setUserData(res))
        .catch((err) => console.error(err));
    }
  }, [user]);

  const onOpenModal = () => {
    if (userData && userData?.wingCount >= REQUIRED_KEY_COUNT) {
      setOpenedModal('confirm');
      return;
    }
    setOpenedModal('warning');
  };

  const unlockLetter = async (clickedLetterId: string, userId: string) => {
    if (clickedLetterId) {
      await letterApi.unlock(clickedLetterId, userId);
    }
  };

  return (
    <div>
      <Navigation keyCount={userData?.wingCount} />

      <EffectInfoContainer>
        <Tag>{userData?.registrationOrder}번째 나비</Tag>
        <FlexContainer>
          <Body1 color="gray_400">나로부터 비롯된 나비효과</Body1>
          <Title2 color="gray_900">{userData?.totalSpreadCount || 0}회</Title2>
        </FlexContainer>
      </EffectInfoContainer>

      <Container>
        <Subtitle1>마음 편지함</Subtitle1>
        <Subtitle1 color="blue_300">{userData?.receivedLetters.length || ''}</Subtitle1>
      </Container>
      <GridContainer>
        {userData?.receivedLetters.map((letter) => (
          <FlexContainer
            key={letter.letterId}
            onClick={() => {
              if (letter.locked) {
                onOpenModal();
                setClickedLetter(letter);
              } else {
                navigate(`/letter/${letter.letterId}`);
              }
            }}
          >
            <Badge variant={letter.badge} size={94} isLocked={letter.locked} />
            <Body2 sansita color="gray_300">
              From.
            </Body2>
            <Body2>{letter.nickname}</Body2>
          </FlexContainer>
        ))}
      </GridContainer>
      <FixedFooter>
        <CTAButton
          onClick={() => {
            navigate('/send');
          }}
        >
          마음 편지 보내기
        </CTAButton>
      </FixedFooter>
      <Modal
        open={openedModal !== null}
        onClose={() => {
          setOpenedModal(null);
          setClickedLetter(null);
        }}
      >
        {openedModal === 'confirm' ? (
          <StyledModal>
            <Subtitle1>이 마음편지를 열어볼까요?</Subtitle1>
            <Subtitle3 color="gray_400">날갯짓 2회가 사용돼요</Subtitle3>
            <Badge variant="key" size={110} />
            <StyledDiv>
              <Subtitle1 sansita color="gray_300">
                From.
              </Subtitle1>
              <Subtitle1>{clickedLetter?.nickname}</Subtitle1>
            </StyledDiv>
            <ModalButtonContainer>
              <CTAButton
                variant="secondary"
                onClick={() => {
                  setOpenedModal(null);
                  setClickedLetter(null);
                }}
              >
                나중에요
              </CTAButton>
              <CTAButton
                onClick={async () => {
                  await unlockLetter(clickedLetter!.letterId, user!.userId);
                  navigate(`/letter/${clickedLetter!.letterId}`);
                }}
              >
                열어볼래요
              </CTAButton>
            </ModalButtonContainer>
          </StyledModal>
        ) : (
          <StyledModal>
            <Subtitle1>날갯짓이 부족해요</Subtitle1>
            <Subtitle3
              color="gray_400"
              style={{ whiteSpace: 'pre-wrap' }}
            >{`마음편지를 보내면\n날갯짓을 획득할 수 있어요`}</Subtitle3>
            <ModalButtonContainer>
              <CTAButton
                variant="secondary"
                onClick={() => {
                  setOpenedModal(null);
                  setClickedLetter(null);
                }}
              >
                취소
              </CTAButton>
              <CTAButton onClick={() => navigate('/send')}>편지 보내기</CTAButton>
            </ModalButtonContainer>
          </StyledModal>
        )}
      </Modal>
    </div>
  );
};

const EffectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 12px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin-top: 12px;
  gap: 12px;
  background-color: ${({ theme }) => theme.color.gray_0};
  border: 1px solid ${({ theme }) => theme.color.gray_200};
`;
const Container = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 24px;
  margin-bottom: 20px;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
`;
const ModalButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  gap: 7px;
  margin-top: 32px;
`;
const StyledModal = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 16px;
`;
const StyledDiv = styled.div`
  display: flex;
  gap: 4px;
`;

export default MyPage;
