import React, { useState } from 'react';
import TextField from '../components/TextField';
import requiredValidator from '../utils/requiredValidator';
import styled from 'styled-components';
import FixedFooter from '../components/FixedFooter';
import CTAButton from '../components/CTAButton';
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';
import { letterApi } from '../api';

const RegisterPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await letterApi.receive({
        discordId: input,
      });
      navigate('/register/verify');
    } catch (e) {
      console.error(e);
      setErrorMessage('메시지 전송에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Navigation />
      <StyledRegisterForm>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          validator={requiredValidator}
          label="디스코드 아이디를 입력해주세요"
          placeholder="디스코드 아이디"
          errorMessage={errorMessage}
        />
      </StyledRegisterForm>
      <FixedFooter>
        <CTAButton disabled={!input || loading} onClick={handleSubmit}>
          마음 이어 받기
        </CTAButton>
      </FixedFooter>
    </div>
  );
};

const StyledRegisterForm = styled.div`
  margin-top: 240px;
`;
export default RegisterPage;
