import { PropsWithChildren } from 'react';
import ModalPortal from './ModalPortal';
import styled, { css } from 'styled-components';

interface ModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, open, onClose }) => {
  return (
    <ModalPortal>
      <ModalWrapper open={open}>
        <div className="modal-backdrop" onClick={onClose} />
        <ModalContent open={open}>
          <div className="modal-content">{children}</div>
        </ModalContent>
      </ModalWrapper>
    </ModalPortal>
  );
};

const openCss = css<{ open: boolean }>`
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
`;

const ModalWrapper = styled.div<{ open: boolean }>`
  position: absolute;
  pointer-events: none;
  width: ${({ theme }) => theme.layout.width}px;
  z-index: 100;
  top: 0;
  bottom: 0;

  .modal-backdrop {
    ${openCss}
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    transition: opacity ease-in 0.1s;
  }
`;

const ModalContent = styled.div<{ open: boolean }>`
  ${openCss}
  position: absolute;
  width: calc(100% - 40px);
  min-height: 230px;
  background-color: white;
  border-radius: 16px;
  padding: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export default Modal;
