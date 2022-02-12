import { useState, useEffect } from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import { AddModal, PicButton } from './styles';


function ModalDeletePag(props) {

  const [closeModal, setCloseModal] = useState(props.show);


  useEffect(() => {
    setCloseModal(props.show)
  }, [props.show])

  return (

    <AddModal show={closeModal} centered size="sm">
      <Modal.Header>
        <Modal.Title>Excluir pagamento</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <Container>
            <Row>
              <div>
                Usuário: {props.user.name}
              </div>
              <div>
                Data: {props.user.date}
              </div>
              <div>
                Valor: {props.user.value}
              </div>
              
            </Row>

          </Container>
        </div>

      </Modal.Body>


      <Modal.Footer>
        <Container>
          <Row>
            <Col>
              <PicButton className="cancel" onClick={() => { setCloseModal(false); props.handleClose() }}>
                Cancelar
              </PicButton>
            </Col>
            <Col>
              <PicButton variant="primary" onClick={() => { setCloseModal(false); props.delete() }}>
                Salvar
              </PicButton>
            </Col>
          </Row>
        </Container>
      </Modal.Footer>
    </AddModal>

  )
}

export default ModalDeletePag;
