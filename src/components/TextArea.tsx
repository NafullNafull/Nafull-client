import styled from 'styled-components';
import { Body2, Body3, Subtitle2 } from './Typography';
import styles from './Typography/styles';
import { InputHTMLAttributes, useState } from 'react';
import { ValidationResult } from './TextField';

type ValidStatus = {
  isValid: true;
};
type InvalidStatus = {
  isValid: false;
  error: string;
};
interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  validator?: (value: string) => ValidationResult;
  label?: string;
  placeholder?: string;
  description?: string;
  disabled?: boolean;
  errorMessage?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  value,
  onChange,
  validator,
  label,
  placeholder,
  description,
  disabled,
  errorMessage,
  ...inputProps
}) => {
  const [validStatus, setValidStatus] = useState<ValidStatus | InvalidStatus>({ isValid: true });
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const status = validator?.(value) || { isValid: true };
    setValidStatus(status);
    onChange(e);
  };
  return (
    <StyledTextArea>
      {label && (
        <Subtitle2
          element={'label'}
          htmlFor={name}
          style={{
            marginBottom: 12,
          }}
        >
          {label}
        </Subtitle2>
      )}
      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        {...inputProps}
      />
      <Counter>
        <Body2 color="gray_400">
          {value.length} / {inputProps.maxLength}
        </Body2>
      </Counter>
      {description && validStatus.isValid && <Description color="gray_500">{description}</Description>}
      {(!validStatus.isValid || errorMessage) && (
        <Description color="red_300">{!validStatus.isValid ? validStatus.error : errorMessage}</Description>
      )}
    </StyledTextArea>
  );
};

const Counter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 18px;
`;
const Description = styled(Body3)`
  margin-top: 8px;
`;
const StyledTextArea = styled.div`
  textarea {
    width: 100%;
    height: 187px;
    ${styles.Letter};
    border: none;
    resize: none;

    &::placeholder {
      color: ${({ theme }) => theme.color.gray_400};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.color.gray_50};
      border-color: ${({ theme }) => theme.color.gray_200};
    }
  }
`;
export default TextArea;
