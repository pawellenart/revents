import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import { modalClose } from './modalSlice';

const ModalWrapper = ({ children, size, header }) => {
  const dispatch = useDispatch();

  return (
    <Modal open={true} onClose={() => dispatch(modalClose())} size={size}>
      {header && <Modal.Header>{header}</Modal.Header>}
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
};

export default ModalWrapper;
