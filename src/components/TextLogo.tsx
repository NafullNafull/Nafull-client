import styled from 'styled-components';

const LogoImage = styled.div`
  background-image: url(/icons/text-logo.svg);
  background-size: cover;
  width: 105px;
  height: 40px;
`;

const TextLogo = styled(LogoImage)`
  /* position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 115px;
  transform: translateX(-10px); */
`;

export default TextLogo;
