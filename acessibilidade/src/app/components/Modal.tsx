"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: ModalProps) => {
  const portalRoot = document.getElementById("portal-root");
  const modalRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  if (!portalRoot || !isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.backgroundModal} onClick={onClose}>
      {/* TabIndex impede dele ser focado pelo teclado */}
      <div
        ref={modalRef}
        className={styles.modal}
        role="dialog"
        aria-labelledby="modal1Title"
        aria-describedby="modal1Description"
        tabIndex={1}
      >
        <h2 id="modal1Title">Termos de uso:</h2>
        <p id="modal1Description">
          Acessibilidade se tornou uma tendência no ecossistema tecnológico
          mundial, diversas empresas passaram a adotar critérios de
          desenvolvimento acessível em seus projetos — por uma questão prática
          ou por exigências legais —, no entanto, ainda faltam recursos e
          consciência do que de fato é inclusivo na internet para pessoas com
          deficiências.
        </p>
      </div>
    </div>,
    portalRoot
  );
};
