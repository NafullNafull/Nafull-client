import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '../components/TextField';
import CTAButton from '../components/CTAButton';
import requiredValidator from '../utils/requiredValidator';
import { userApi } from '../api';
import FixedFooter from '../components/FixedFooter';
import Navigation from '../components/Navigation';
import MainLogo from '../components/Logo';
import useUser from '../utils/useUser';
import { useNavigate } from 'react-router-dom';
import { Body1 } from '../components/Typography';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { setUserCookie, resetUser } = useUser();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState<{
    discordId: string;
    password: string;
  }>({
    discordId: '',
    password: '',
  });
  const [failMessage, setFailMessage] = useState('');

  const handleInputChange = (name: keyof typeof input) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const data = await userApi.login({
        discordId: input.discordId,
        rawPassword: input.password,
      });

      setUserCookie({
        discordId: data.discordId,
        nickname: data.nickname,
        userId: data.userId,
      });

      navigate('/');
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error = e as any;
      console.error(e);
      resetUser();
      if (error?.response?.data?.message) setFailMessage(error.response.data.message);
      else setFailMessage('로그인에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Navigation />
      <MainLogo />
      <StyledLoginForm>
        <TextField
          value={input.discordId}
          onChange={handleInputChange('discordId')}
          type="username"
          label="디스코드 아이디"
          placeholder="디스코드 아이디 입력"
          validator={requiredValidator}
        />
        <TextField
          value={input.password}
          onChange={handleInputChange('password')}
          type="password"
          label="비밀번호"
          placeholder="비밀번호 입력"
          validator={requiredValidator}
          errorMessage={failMessage}
        />
      </StyledLoginForm>
      <LoginTextButton>
        <Body1 color="gray_400" onClick={() => navigate('/register')}>
          회원이 아니신가요?
        </Body1>
      </LoginTextButton>
      <FixedFooter>
        <CTAButton disabled={loading || Object.values(input).some((value) => !value)} onClick={handleSubmit}>
          로그인
        </CTAButton>
      </FixedFooter>
    </div>
  );
};

const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-top: 240px;
`;

const LoginTextButton = styled.div`
  margin-top: 16px;
  text-align: center;

  p {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default LoginPage;
