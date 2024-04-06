import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button<Props>`
  border-radius: 100px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  border: none;
  cursor: pointer;

  ${({ theme }) => css`
    color: ${theme.color.gray_0};
    background-color: ${theme.color.gray_900};
  `};

  ${({ children }) =>
    typeof children !== 'string' &&
    css`
      padding: 15px;
    `}
`;

export default Button;
