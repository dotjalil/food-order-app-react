import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const overlay = document.getElementById('overlays');

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseCart} />;
};

const Overlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseCart={props.onCloseCart} />,
        overlay
      )}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, overlay)}
    </React.Fragment>
  );
};

export default Modal;
