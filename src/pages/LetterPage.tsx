import { useNavigate } from 'react-router-dom';
import CTAButton from '../components/CTAButton';
import FixedFooter from '../components/FixedFooter';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import { Subtitle1 } from '../components/Typography';

const LetterPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navigation />

      <Container>
        <LetterContainer>
          <Subtitle1 color="gray_0">편지가 도착했어요!</Subtitle1>
        </LetterContainer>
        <FixedFooter>
          <CTAButton onClick={() => navigate('/send')}>나도 보내기</CTAButton>
        </FixedFooter>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
`;
const LetterContainer = styled.div`
  display: flex;
  gap: 28px;
`;

export default LetterPage;
