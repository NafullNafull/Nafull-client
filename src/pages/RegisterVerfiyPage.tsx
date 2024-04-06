import React from 'react';
import styled, { css } from 'styled-components';
import Navigation from '../components/Navigation';
import { Body2, Title2 } from '../components/Typography';
import { badges } from '../assets/badges';

const RegisterVerfiyPage: React.FC = () => {
  return (
    <div>
      <Navigation />
      <StyledTitleWrapper>
        <Title2>디스코드를 확인해주세요</Title2>
        <Body2 color="gray_500">디스코드로 인증 url을 보내드렸어요</Body2>
      </StyledTitleWrapper>
      <StyledBadgeListWrapper>
        <StyledBadgeList>
          {Object.values(badges).map((badge, index) => {
            return <badge.unLocked min={110} width={110} height={110} key={index} />;
          })}
        </StyledBadgeList>
        <StyledBadgeList>
          {Object.values(badges).map((badge, index) => {
            return <badge.unLocked min={110} width={110} height={110} key={index} />;
          })}
        </StyledBadgeList>
      </StyledBadgeListWrapper>
    </div>
  );
};
const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 106px;
  text-align: center;
`;

const StyledBadgeListWrapper = styled.div`
  position: absolute;
  margin-top: 68px;
  overflow: hidden;
  width: ${({ theme }) => theme.layout.width}px;

  transform: translateX(-${({ theme }) => theme.layout.paddingX}px);
`;

const flowKeyframes = (layoutWidth: number) => css`
  @keyframes flowKeyframes {
    0% {
      transform: translateX(${layoutWidth}px);
    }
    100% {
      transform: translateX(${-layoutWidth * 2 + 110 * 3}px);
    }
  }
`;

const reverseFlowKeyframes = (layoutWidth: number) => css`
  @keyframes reverseFlowKeyframes {
    0% {
      transform: translateX(-${layoutWidth * 2 - 110}px);
    }
    100% {
      transform: translateX(${layoutWidth - 2 * 110}px);
    }
  }
`;
const StyledBadgeList = styled.div`
  display: flex;
  column-gap: 20px;

  svg {
    min-width: 110px;
    min-height: 110px;
  }
  ${({ theme }) => flowKeyframes(theme.layout.width)};
  ${({ theme }) => reverseFlowKeyframes(theme.layout.width)};

  &:first-child {
    transform: translateX(${({ theme }) => -theme.layout.width * 2 + 110 * 3}px);
    animation: flowKeyframes 10s linear;
    margin-bottom: 32px;
  }
  &:last-child {
    transform: translateX(${({ theme }) => theme.layout.width - 2 * 110}px);
    animation: reverseFlowKeyframes 10s linear;
  }
`;

export default RegisterVerfiyPage;
