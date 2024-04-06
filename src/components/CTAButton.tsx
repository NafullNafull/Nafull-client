import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

type Props = PropsWithChildren<
  {
    variant?: 'primary' | 'secondary';
  } & ButtonHTMLAttributes<HTMLButtonElement>
>;

const CTAButton = ({ variant = 'primary', children, ...props }: Props) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<Props>`
  border-radius: 16px;
  padding: 16px 0;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  border: none;
  cursor: pointer;

  ${({ variant, theme }) =>
    variant === 'primary' &&
    css`
      color: ${theme.color.gray_0};
      background-color: ${theme.color.gray_900};
    `}

  ${({ variant, theme }) =>
    variant === 'secondary' &&
    css`
      color: ${theme.color.gray_900};
      background-color: ${theme.color.gray_0};
      border: 1px solid ${theme.color.gray_700};
    `}

  &:disabled {
    color: ${({ theme }) => theme.color.gray_0};
    background-color: ${({ theme }) => theme.color.gray_200};
  }

  & + & {
    gap: 5px;
  }
`;

export default CTAButton;
