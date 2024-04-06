import styled from 'styled-components';
import { PropsWithChildren } from 'react';

const LetterPaper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledLetter className="LetterPaper">
      <ImageLetterPaper />
      {children}
    </StyledLetter>
  );
};

const ImageLetterPaper = styled.div`
  background-image: url(/icons/LetterPaper.png);
  background-size: contain;
  background-repeat: no-repeat;
  width: 235px;
  height: 252px;
  position: absolute;
  top: 157px;
`;

const StyledLetter = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.gray_0};
  width: 275px;
  height: 381px;
  padding: 20px;

  border: 1px solid ${({ theme }) => theme.color.gray_200};
  border-radius: 4px;
`;
export default LetterPaper;
