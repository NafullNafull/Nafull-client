import { Navigate, useNavigate, useParams } from 'react-router-dom';
import CTAButton from '../components/CTAButton';
import FixedFooter from '../components/FixedFooter';
import styled, { css } from 'styled-components';
import Navigation from '../components/Navigation';
import { Subtitle1 } from '../components/Typography';
import ReceivedLetter from '../components/ReceivedLetter';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Letter } from '../api/letters';
import { letterApi } from '../api';
import { CONTAINER_ID } from '../components/layout/Layout';
import { BadgeType } from '../assets/badges';

const colorMap = {
  flower: '#5493E1',
  butterfly: '#EC5636',
  clover: '#00A850',
  key: '#EEC229',
  letter: '#F1304A',
};
const imageMap = {
  flower: '/icons/flowers.svg',
  butterfly: '/icons/butterflies.svg',
  clover: '/icons/clovers.svg',
  key: '/icons/keys.svg',
  letter: '/icons/letters.svg',
};
const LetterPage = () => {
  const navigate = useNavigate();
  const { letterId } = useParams();
  const [data, setData] = useState<Letter>();

  useLayoutEffect(() => {
    if (!data) return;
    const color = colorMap[data?.badge || 'letter'];
    const containerEl = document.getElementById(CONTAINER_ID);
    if (containerEl) containerEl.style.backgroundColor = color;

    return () => {
      if (containerEl) containerEl.style.backgroundColor = '';
    };
  }, [data]);

  useEffect(() => {
    letterApi.get(letterId as string).then(setData);
  }, []);
  console.log(imageMap[(data?.badge.toLowerCase() as BadgeType) || 'letter']);
  return (
    <div>
      {data?.locked && <Navigate replace to="/mypage" />}
      <Navigation />
      <Illustration src={imageMap[(data?.badge as BadgeType) || 'letter']} />

      <Container>
        <CenterTitle>
          <Subtitle1 color="gray_0">편지가 도착했어요!</Subtitle1>
        </CenterTitle>
        <ReceivedLetter letter={data} />
        <FixedFooter>
          <CTAButton onClick={() => navigate('/send')}>나도 보내기</CTAButton>
        </FixedFooter>
      </Container>
    </div>
  );
};

const smallIlluCss = css`
  width: 100%;
  height: 68px;
  bottom: 88px;
  left: 50%;
`;
const Illustration = styled.div<{ src: string }>`
  margin-bottom: 28px;
  background-image: url(${(props) => props.src});
  width: ${({ theme }) => theme.layout.width}px;
  background-size: contain;
  background-repeat: no-repeat;
  height: 186px;
  position: absolute;
  bottom: 30px;
  transform: translateX(-30px);
  z-index: 0;
  ${({ src }) => (src.includes('key') || src.includes('letter')) && smallIlluCss};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: relative;
`;
const CenterTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 28px;
`;

export default LetterPage;
