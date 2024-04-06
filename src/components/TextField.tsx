import styled from 'styled-components';
import { Body3, Subtitle2 } from './Typography';
import styles from './Typography/styles';
import { useState } from 'react';

type ValidStatus = {
  isValid: true;
};
type InvalidStatus = {
  isValid: false;
  error: string;
};
export type ValidationResult = ValidStatus | InvalidStatus;
interface TextFieldProps {
  value: string;
  onChange: (value: string) => void;
  validator?: (value: string) => ValidationResult;
  label?: string;
  placeholder?: string;
  description?: string;
  disabled?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  validator,
  label,
  placeholder,
  description,
  disabled,
}) => {
  const [validStatus, setValidStatus] = useState<ValidStatus | InvalidStatus>({ isValid: true });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const status = validator?.(value) || { isValid: true };
    setValidStatus(status);
    onChange(value);
  };
  return (
    <StyledTextField>
      {label && (
        <Subtitle2
          style={{
            marginBottom: 12,
          }}
        >
          {label}
        </Subtitle2>
      )}
      <input value={value} onChange={handleChange} placeholder={placeholder} disabled={disabled} />
      {description && validStatus.isValid && <Description color="gray_500">{description}</Description>}
      {!validStatus.isValid && <Description color="red_300">{validStatus.error}</Description>}
    </StyledTextField>
  );
};

const Description = styled(Body3)`
  margin-top: 8px;
`;
const StyledTextField = styled.div`
  input {
    padding: 12px;
    ${styles.Body2};
    border: 1px solid ${({ theme }) => theme.color.gray_200};
    border-radius: 8px;

    &::placeholder {
      color: ${({ theme }) => theme.color.gray_400};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.color.gray_50};
      border-color: ${({ theme }) => theme.color.gray_200};
    }
  }
`;
export default TextField;
