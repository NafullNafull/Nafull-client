import styled from 'styled-components';
import { Body2 } from './Typography';

interface CheckBoxProps {
  name?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ name, checked, onChange, label }) => {
  return (
    <Wrapper>
      <StyledCheckBox>
        <input name={name} checked={checked} onChange={onChange} className="checkbox" type="checkbox" />
        <label htmlFor={name} />
      </StyledCheckBox>
      {label && (
        <Body2 element={'label'} htmlFor={name}>
          {label}
        </Body2>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
const StyledCheckBox = styled.div`
  width: 26px;
  height: 26px;
  position: relative;

  .checkbox {
    display: inline-block;
    cursor: pointer;
    width: 26px;
    height: 26px;
    border: 1px solid ${({ theme }) => theme.color.gray_200};
    border-radius: 8px;
  }
  .checkbox:checked + label::after {
    content: '';
    background-image: url(/icons/check.svg);
    background-size: contain;
    background-position: center;
    width: 16px;
    height: 16px;
    text-align: center;
    position: absolute;
    left: 5px;
    top: 5px;
    pointer-events: none;
  }
`;

export default CheckBox;
