import { useState, useEffect } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { AddModal, TextField, PicButton } from './styles';


function ModalAddPag(props) {

  const [closeModal, setCloseModal] = useState(props.show);

  useEffect(() => {
    setCloseModal(props.show)
  }, [props.show])

  return (

    <AddModal show={closeModal} centered size="lg">
      <Modal.Header>
        <Modal.Title>Adicionar pagamento</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <Container>
            <Row>
              <Col>
                <TextField placeholder="Usuário" required />
              </Col>
              <Col>
                <TextField placeholder="Valor" required />
              </Col>
            </Row>
            <Row>
              <Col>
                <TextField placeholder="Data" required />
              </Col>
              <Col>
                <TextField placeholder="Título" required />
              </Col>
            </Row>
          </Container>
        </div>

      </Modal.Body>


      <Modal.Footer>
        <PicButton className="cancel" onClick={() => { setCloseModal(false); props.handleClose() }}>
          Cancelar
        </PicButton>
        <PicButton variant="primary" onClick={() => { setCloseModal(false); props.handleClose() }}>
          Salvar
        </PicButton>
      </Modal.Footer>
    </AddModal>

  )
}

export default ModalAddPag;
