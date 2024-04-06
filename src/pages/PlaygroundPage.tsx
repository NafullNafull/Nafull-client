import { userApi } from '../api';
import CheckBox from '../components/CheckBox';
import Modal from '../components/Modal';
import TextField, { ValidationResult } from '../components/TextField';
import { Body1, Subtitle1, Subtitle3, Title1, Title2 } from '../components/Typography';
import React, { useState } from 'react';

const PlaygroundPage: React.FC = () => {
  const [input, setInput] = useState('');
  const [checked, setChecked] = useState(false);
  const [modal, setModal] = useState(false);

  const inputValidator = (value: string): ValidationResult =>
    !value ? { isValid: false, error: '필수값입니다.' } : { isValid: true };

  const getUser = async () => {
    try {
      const user = await userApi.get(input);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

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
        onChange={(e) => setInput(e.target.value)}
        validator={inputValidator}
        label="디스코드 아이디를 입력하세요"
        description="description"
        placeholder="placeholder"
      />
      <CheckBox name="랜덤" label="랜덤" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      <Modal open={modal} onClose={() => setModal(false)}>
        <Subtitle1>이 마음편지를 열어볼까요?</Subtitle1>
        <Subtitle3 color="gray_400">날개짓 2회가 사용돼요.</Subtitle3>
      </Modal>
      <button onClick={() => setModal(true)}>Open modal</button>
      <button onClick={getUser}>Call GET user api</button>
    </div>
  );
};

export default PlaygroundPage;
