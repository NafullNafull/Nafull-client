import React, { useEffect, useState } from 'react';
import { statApi } from '../api';
import FixedFooter from '../components/FixedFooter';
import CTAButton from '../components/CTAButton';
import MainLogo from '../components/Logo';
import { useNavigate } from 'react-router-dom';
import useUser from '../utils/useUser';
import styled from 'styled-components';
import { Body1 } from '../components/Typography';
import Icon from '../components/Icon';

const HomePage: React.FC = () => {
  const { user } = useUser();
  const [stat, setStat] = useState<statApi.Statistics>();
  const naviagte = useNavigate();

  useEffect(() => {
    // statApi.get().then((data) => {
    //   setStat(data);
    // });
  }, []);

  const handleClickSend = () => {
    if (user) {
      naviagte('/send');
    } else {
      naviagte('/register');
    }
  };
  return (
    <div>
      <MainLogo />
      <Header>
        <IconButton onClick={() => naviagte('/mypage')}>
          <Icon width={20} height={20} icon="letter" color="white" />
        </IconButton>
      </Header>
      <FixedFooter>
        <CTAButton onClick={handleClickSend}>마음 편지 보내기</CTAButton>
        <LoginTextButton>
          <Body1 color="gray_400" onClick={() => naviagte('/login')}>
            회원이신가요?
          </Body1>
        </LoginTextButton>
      </FixedFooter>
    </div>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
`;

const IconButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 100%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.gray_900};
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
