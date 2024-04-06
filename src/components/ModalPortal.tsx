import React, { PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const MODAL_PORTAL_ID = 'modal-portal';

export default function ModalPortal({ children }: PropsWithChildren) {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById(MODAL_PORTAL_ID));
  }, []);

  if (!element) {
    return <></>;
  }

  return createPortal(children, element);
}
