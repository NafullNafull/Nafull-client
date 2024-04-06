import React, { useEffect, useState } from 'react';
import { statApi } from '../api';
import FixedFooter from '../components/FixedFooter';
import CTAButton from '../components/CTAButton';
import TextLogo from '../components/TextLogo';
import { useNavigate } from 'react-router-dom';
import useUser from '../utils/useUser';
import styled from 'styled-components';
import { Body1, Body2, Subtitle2, Title3 } from '../components/Typography';
import Icon from '../components/Icon';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  const { user } = useUser();
  const [stat, setStat] = useState<statApi.Statistics>();
  const naviagte = useNavigate();

  useEffect(() => {
    statApi.get().then((data) => {
      setStat(data);
    });
  }, []);

  const handleClickSend = () => {
    if (user) {
      naviagte('/send');
    } else {
      naviagte('/register');
    }
  };
  return (
    <Container>
      <Header>
        <TextLogo />
        {user && (
          <Button onClick={() => naviagte('/mypage')}>
            <Icon width={20} height={20} icon="letter" color="white" />
          </Button>
        )}
      </Header>
      <img src="/icons/butterfly.svg" />
      <StatContainer>
        <div>
          <Subtitle2 color="gray_400">함께한 사람들</Subtitle2>
          <Title3>
            {/* TODO */}
            <span>{stat?.totalUserCount || '??'}</span>명
          </Title3>
        </div>
        <div>
          <Subtitle2 color="gray_400">전파된 나비효과</Subtitle2>
          <Title3>
            {/* TODO */}
            <span>{stat?.totalButterflyEffectCount || '??'}</span>회
          </Title3>
        </div>
      </StatContainer>
      <FixedFooter>
        <Body2
          color="gray_500"
          style={{ whiteSpace: 'pre-wrap', textAlign: 'center', marginBottom: '30px' }}
        >{`차곡차곡 쌓인 따뜻한 마음들을\n나비의 날갯짓에 실어 보내요.`}</Body2>
        <CTAButton onClick={handleClickSend}>나비 효과 동참하기</CTAButton>
        {user && (
          <LoginTextButton>
            <Body1 color="gray_400" onClick={() => naviagte('/login')}>
              회원이신가요?
            </Body1>
          </LoginTextButton>
        )}
      </FixedFooter>
    </Container>
  );
};

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  margin-top: 10px;
`;
const Container = styled.div`
  position: relative;

  & img {
    position: absolute;
    right: 0;
    top: 100px;
    transform: translateX(30px);
  }
`;
const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  & span {
    color: ${({ theme }) => theme.color.blue_300};
  }
`;
const LoginTextButton = styled.div`
  margin-top: 16px;
  text-align: center;

  p {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default HomePage;
