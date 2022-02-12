import { useState, useEffect } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { AddModal, TextField, PicButton } from './styles';


function ModalAddPag(props) {

  const [closeModal, setCloseModal] = useState(props.show);
  const [newUserObj, setNewUserObj] = useState({
    // "id": '',
    "name": null,
    "nickname": '',
    "title": '',
    "date": '',
    "value": '',
    "paid": false
  })

  useEffect(() => {
    setCloseModal(props.show)
  }, [props.show])

  // useEffect(() => {
  //   setNewUserObj({...newUserObj, id: (Math.random() * 10)})
  // }, [])

  return (

    <AddModal show={closeModal} centered size="lg">
      <Modal.Header>
        <Modal.Title>Adicionar pagamento</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <Container>
            <form>
              <Row>
                <Col>
                  <TextField value={newUserObj.name} placeholder="Usuário" required onChange={(e) => setNewUserObj({...newUserObj, name: e.target.value})}/>
                </Col>
                <Col>
                  <TextField type="number" value={newUserObj.value} placeholder="Valor" required onChange={(e) => setNewUserObj({...newUserObj, value: e.target.value})}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextField value={newUserObj.date} placeholder="Data" required onChange={(e) => setNewUserObj({...newUserObj, date: e.target.value})}/>
                </Col>
                <Col>
                  <TextField value={newUserObj.title} placeholder="Título" required onChange={(e) => setNewUserObj({...newUserObj, title: e.target.value})}/>
                </Col>
              </Row>
            </form>
          </Container>
        </div>

      </Modal.Body>


      <Modal.Footer>
        <PicButton className="cancel" onClick={() => { setCloseModal(false); props.handleClose() }}>
          Cancelar
        </PicButton>
        <PicButton variant="primary" onClick={() => { setCloseModal(false); props.handleNewUser(newUserObj); props.handleClose() }}>
          Salvar
        </PicButton>
      </Modal.Footer>
    </AddModal>

  )
}

export default ModalAddPag;
