import React from "react";
import "../styles/components/Modal.css";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-child">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
