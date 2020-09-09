import React from 'react';
import { Modal, Button } from 'react-bootstrap'

function blogModal({ id, title, description, history }) {

  const handleClick = () => {
    history.push(`/post/${id}`)
  };

  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{description}</p>
        <Button
          variant="primary"
          onClick={handleClick}
        >Read more</Button>
      </Modal.Body>
    </Modal.Dialog>
  );
};

export default blogModal;