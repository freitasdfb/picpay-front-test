import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'


function ModalAddPag(props) {

  const [closeModal, setCloseModal] = useState(props.show);

  useEffect(() => {
    setCloseModal(props.show)
  },[props.show])

  return (

    // <Modal show={props.show} onHide={props.handleClose}>
    <Modal show={closeModal} centered >
      <Modal.Header>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => { setCloseModal(false); props.handleClose()}}>
          Close
        </Button>
        <Button variant="primary" onClick={() => {setCloseModal(false); props.handleClose()}}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

  )
}

export default ModalAddPag;
