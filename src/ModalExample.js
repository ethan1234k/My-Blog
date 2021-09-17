import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const ModalExample = (props) => {
  const [modalOpen, setModalOpen] = useState(props.open);

  useEffect(() => {
    setModalOpen(props.open)
  }, [props.refresh])

  return (
    <div>
      <Modal isOpen={modalOpen}>
        <h1>This is a modal</h1>
        <button onClick={() => setModalOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default ModalExample;











