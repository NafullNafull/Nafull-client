import { useNavigate, useParams } from 'react-router-dom';
import CTAButton from '../components/CTAButton';
import FixedFooter from '../components/FixedFooter';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import { Subtitle1 } from '../components/Typography';
import ReceivedLetter from '../components/ReceivedLetter';
import { useEffect, useState } from 'react';
import { Letter } from '../api/letters';
import { letterApi } from '../api';

const LetterPage = () => {
  const navigate = useNavigate();
  const { letterId } = useParams();
  const [data, setData] = useState<Letter>();

  useEffect(() => {
    letterApi.get(letterId as string).then(setData);
  }, []);

  return (
    <div>
      <Navigation />

      <Container>
        <LetterContainer>
          <Subtitle1 color="gray_0">편지가 도착했어요!</Subtitle1>
        </LetterContainer>
        <ReceivedLetter letter={data} />
        <FixedFooter>
          <CTAButton onClick={() => navigate('/send')}>나도 보내기</CTAButton>
        </FixedFooter>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const LetterContainer = styled.div`
  display: flex;
  gap: 28px;
`;

export default LetterPage;
