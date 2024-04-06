import { useLoaderData, useNavigate } from 'react-router-dom';
import CTAButton from '../components/CTAButton';
import FixedFooter from '../components/FixedFooter';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import { Subtitle1 } from '../components/Typography';
import ReceivedLetter from '../components/ReceivedLetter';
import { useEffect } from 'react';
import { Letter } from '../api/letters';

const colorMap = {
  flower: '#EEC229',
  butterfly: '#5493E1',
  clover: '#00A850',
  key: '#EC5636',
  letter: '#F1304A',
};

const LetterPage = () => {
  const navigate = useNavigate();
  const data = useLoaderData() as Letter;

  useEffect(() => {
    (document.getElementById('layout-container') as HTMLDivElement).style.backgroundColor = colorMap[data.badge];
  }, []);

  return (
    <div>
      <Navigation />

      <Container>
        <Subtitle1 color="gray_0">편지가 도착했어요!</Subtitle1>

        <LetterContainer>
          <Subtitle1 color="gray_0">From. 펄럭펄럭</Subtitle1>
          <Content />
        </LetterContainer>
        <ReceivedLetter />
        <FixedFooter>
          <CTAButton onClick={() => navigate('/send')}>나도 보내기</CTAButton>
        </FixedFooter>
        <img src="/icons/butterflies" />
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
  background-color: #fff;
  width: 100%;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.gray_200};
`;
const Content = styled.div``;

export default LetterPage;
