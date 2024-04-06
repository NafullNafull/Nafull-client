import { ComponentProps } from 'react';
import styled from 'styled-components';

type Props = ComponentProps<'span'>;

const Tag = ({ children, ...props }: Props) => {
  return <StyledTag {...props}>{children}</StyledTag>;
};

const StyledTag = styled.span`
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 600;
  color: ${({ theme }) => theme.color.gray_0};
  background-color: ${({ theme }) => theme.color.blue_300};
`;

export default Tag;
