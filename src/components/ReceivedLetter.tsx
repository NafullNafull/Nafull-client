import styled from 'styled-components';
import { Letter } from '../api/letters';
import { BodyLetter, Subtitle1 } from './Typography';
import { Fragment } from 'react/jsx-runtime';

interface ReceivedLetterProps {
  letter?: Letter;
}

const ReceivedLetter: React.FC<ReceivedLetterProps> = ({ letter }) => {
  return (
    <StyledLetter>
      <SenderContainer>
        <Subtitle1 sansita color="gray_200">
          From.
        </Subtitle1>
        <Subtitle1>{letter?.nickname}</Subtitle1>
      </SenderContainer>
      <ContentContainer>
        <ImageLetterPaper />
        <BodyLetter
          style={{
            position: 'absolute',
            top: 0,
          }}
        >
          {(letter?.content || 'loading...').split('\n').map((line, index, arr) => {
            if (index === arr.length - 1) return line;
            return (
              <Fragment key={index}>
                {line} <br />
              </Fragment>
            );
          })}
        </BodyLetter>
      </ContentContainer>
      <DateContainer>
        <BodyLetter style={{ fontSize: 16 }} color="gray_400">
          {new Date().toLocaleDateString()}
        </BodyLetter>
      </DateContainer>
    </StyledLetter>
  );
};

const ContentContainer = styled.div`
  height: 251px;
  position: relative;
  overflow-y: scroll;
  // scroll바 없애기
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
const SenderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin: 36px 0;
  text-align: center;
`;
const StyledLetter = styled.div`
  background-color: ${({ theme }) => theme.color.gray_0};
  height: 446px;
  padding: 20px;

  border: 1px solid ${({ theme }) => theme.color.gray_200};
  border-radius: 12px;
`;
const ImageLetterPaper = styled.div`
  transform: translateY(35px);
  background-image: url(/icons/ReceivedLetterPaper.png);
  background-size: contain;
  background-repeat: no-repeat;
  width: 275px;
  height: 216px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
export default ReceivedLetter;
