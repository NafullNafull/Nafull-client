import styled from 'styled-components';

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.width}px;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  background-color: ${({ theme }) => theme.color.cream};
`;

const Main = styled.main`
  padding: ${({ theme }) => `0 ${theme.layout.paddingX}px ${theme.layout.paddingY}px`};
  overflow: hidden;
  min-height: 100vh;
`;

export default {
  Container,
  Main,
};
