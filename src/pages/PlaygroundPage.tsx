import TextField, { ValidationResult } from '../components/TextField';
import { Body1, Title1, Title2 } from '../components/Typography';
import React, { useState } from 'react';

const PlaygroundPage: React.FC = () => {
  const [input, setInput] = useState('');
  const inputValidator = (value: string): ValidationResult =>
    !value ? { isValid: false, error: '필수값입니다.' } : { isValid: true };

  return (
    <div>
      PlaygroundPage
      <Title1 sansita color="blue_100">
        Title 1
      </Title1>
      <Title2 color="gray_400">Title 2</Title2>
      <Body1>Body 1</Body1>
      <TextField
        value={input}
        onChange={setInput}
        validator={inputValidator}
        label="디스코드 아이디를 입력하세요"
        description="description"
        placeholder="placeholder"
      />
    </div>
  );
};

export default PlaygroundPage;
