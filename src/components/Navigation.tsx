import styled from 'styled-components';
import Icon from './Icon';
import { useNavigate } from 'react-router-dom';
import WingInfo from './WingInfo';

type Props = {
  keyCount?: number;
};

const Navigation = ({ keyCount }: Props) => {
  const navigate = useNavigate();

  const goPreviousPage = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate('/');
  };

  return (
    <StyledNav>
      <StyledIcon icon="leftChevron" color="gray_900" width={20} height={30} onClick={goPreviousPage} />
      {keyCount !== undefined && <WingInfo keyCount={keyCount} />}
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

const StyledIcon = styled(Icon)`
  cursor: pointer;
  padding-right: 10px;
`;

export default Navigation;
