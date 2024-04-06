import styled from 'styled-components';

const LogoImage = styled.div`
  background-image: url(/icons/Logo.png);
  background-size: cover;
  width: 229px;
  height: 132px;
`;

const MainLogo = styled(LogoImage)`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 115px;
  transform: translateX(-10px);
`;

export default MainLogo;
