import React, { useState } from 'react';
import TextField, { ValidationResult } from '../components/TextField';
import requiredValidator from '../utils/requiredValidator';
import styled from 'styled-components';
import FixedFooter from '../components/FixedFooter';
import CTAButton from '../components/CTAButton';
import { Subtitle1 } from '../components/Typography';
import { userApi } from '../api';
import { useNavigate, useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';

const RegisterFormPage: React.FC = () => {
  const { letterId } = useParams<{ letterId: string }>() as { letterId: string };
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [input, setInput] = useState<{
    nickname: string;
    password: string;
    confirmPassword: string;
  }>({
    nickname: '',
    password: '',
    confirmPassword: '',
  });
  const handleInputChange = (name: keyof typeof input) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    setLoading(true);
    try {
      await userApi.register({
        rawPassword: input.password,
        personalInformationAgreement: true,
        letterId: letterId,
      });
      navigate('/login');
    } catch (e) {
      console.error(e);
      window.alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const confirmValidator = (value: string): ValidationResult => {
    if (value !== input.password) {
      return { isValid: false, error: '비밀번호가 일치하지 않습니다.' };
    }
    return { isValid: true };
  };

  const passwordValidator = (value: string): ValidationResult => {
    if (value.length < 8 || value.length > 16) {
      return { isValid: false, error: '8 ~ 16자리로 입력해주세요.' };
    }
    return { isValid: true };
  };

  const isValid =
    !loading &&
    requiredValidator(input.nickname).isValid &&
    passwordValidator(input.password).isValid &&
    confirmValidator(input.confirmPassword).isValid;

  return (
    <div>
      <Navigation />
      <StyledTitleWrapper>
        <Subtitle1>
          마음 편지를 더 보려면
          <br />
          회원가입이 필요해요
        </Subtitle1>
      </StyledTitleWrapper>
      <StyledRegisterForm>
        <TextField
          value={input.nickname}
          onChange={handleInputChange('nickname')}
          validator={requiredValidator}
          label="닉네임"
          placeholder="기본 닉네임을 설정해주세요"
        />
        <TextField
          value={input.password}
          onChange={handleInputChange('password')}
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          description="8 ~ 16자리로 입력해주세요"
          validator={passwordValidator}
        />
        <TextField
          value={input.confirmPassword}
          onChange={handleInputChange('confirmPassword')}
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요"
          description="8 ~ 16자리로 입력해주세요."
          validator={confirmValidator}
        />
      </StyledRegisterForm>
      <FixedFooter>
        <CTAButton disabled={!isValid} onClick={handleSubmit}>
          가입 완료
        </CTAButton>
      </FixedFooter>
    </div>
  );
};

const StyledTitleWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 60px;
  text-align: center;
`;
const StyledRegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;
export default RegisterFormPage;
