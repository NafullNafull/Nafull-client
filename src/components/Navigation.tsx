import styled from 'styled-components';
import Icon from './Icon';
import { useNavigate } from 'react-router-dom';

type Props = {
  isLoggedIn?: boolean;
};

const Navigation = ({ isLoggedIn = false }: Props) => {
  const navigate = useNavigate();

  const goPreviousPage = () => {
    navigate(-1);
  };

  return (
    <StyledNav>
      <StyledIcon icon="leftChevron" color="gray_900" width={20} height={30} onClick={goPreviousPage} />
      {isLoggedIn && <>{/**TOOD */}</>}
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
`;

const StyledIcon = styled(Icon)`
  cursor: pointer;
  padding-right: 10px;
`;

export default Navigation;
