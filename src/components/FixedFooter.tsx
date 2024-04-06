import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface FixedFooterProps extends PropsWithChildren {}

const FixedFooter: React.FC<FixedFooterProps> = ({ children }) => {
  return (
    <StyledFixedFooter>
      <ContentWrapper>{children}</ContentWrapper>
    </StyledFixedFooter>
  );
};

const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.layout.width}px;
  width: 100%;
  padding: ${({ theme }) => `${theme.layout.paddingY}px ${theme.layout.paddingX}px`};
`;
const StyledFixedFooter = styled.footer`
  background-color: unset;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 10;
`;
export default FixedFooter;
