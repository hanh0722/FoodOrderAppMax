import React from "react";
import styles from "./Modal.module.css";
import Backdrop from "./Backdrop";
import ReactDOM from "react-dom";

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalOverlay = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop
          changeOverlay={props.changeOverlay}
          className={styles.backdrop}
        />,
        portalOverlay
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalOverlay
      )}
    </>
  );
};

export default Modal;
