import { useState, useEffect } from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import { AddModal, TextField, PicButton } from './styles';


function ModalAddPag(props) {

  const initialValue = {
    "id": Math.floor(Math.random() * 999),
    "name": null,
    "nickname": '',
    "title": '',
    "date": '',
    "value": '',
    "paid": false
  };
  const [closeModal, setCloseModal] = useState(props.show);
  const [newUserObj, setNewUserObj] = useState(initialValue);
  const [user, setUser] = useState(props.user);

  useEffect(() => {
    setCloseModal(props.show)
    setNewUserObj(initialValue);
  }, [props.show])

  useEffect(() => {
    setUser(props.user)
  }, [props.user])

  function handleSubmitForm(e) {
    e.preventDefault();
    setCloseModal(false);
    if (!user) {
      props.handleNewUser(newUserObj);
    } else {
      props.handleEdit(user);
    }
    props.handleClose()
  }

  return (

    <AddModal show={closeModal} centered size="lg">
      <Modal.Header>
        {props.edit ?
          <Modal.Title>Editar pagamento</Modal.Title>
          :
          <Modal.Title>Adicionar pagamento</Modal.Title>
        }
      </Modal.Header>

      <form onSubmit={(e) => { handleSubmitForm(e) }}>
        <Modal.Body>
          <div>
            {props.edit ?
              <Container>
                <Row>
                  <Col>
                    <TextField value={user.name} placeholder="Usuário" required={true} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                  </Col>
                  <Col>
                    <TextField type="number" value={user.value} placeholder="Valor" required onChange={(e) => setUser({ ...user, value: e.target.value })} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TextField value={user.date} placeholder="Data" required onChange={(e) => setUser({ ...user, date: e.target.value })} />
                  </Col>
                  <Col>
                    <TextField value={user.title} placeholder="Título" required onChange={(e) => setUser({ ...user, title: e.target.value })} />
                  </Col>
                </Row>
              </Container>
              :
              <Container>
                <Row>
                  <Col>
                    <TextField value={newUserObj.name} placeholder="Usuário" required={true} onChange={(e) => setNewUserObj({ ...newUserObj, name: e.target.value })} />
                  </Col>
                  <Col>
                    <TextField type="number" value={newUserObj.value} placeholder="Valor" required onChange={(e) => setNewUserObj({ ...newUserObj, value: e.target.value })} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TextField value={newUserObj.date} placeholder="Data" required onChange={(e) => setNewUserObj({ ...newUserObj, date: e.target.value })} />
                  </Col>
                  <Col>
                    <TextField value={newUserObj.title} placeholder="Título" required onChange={(e) => setNewUserObj({ ...newUserObj, title: e.target.value })} />
                  </Col>
                </Row>
              </Container>
            }
          </div>
        </Modal.Body>


        <Modal.Footer>
          <PicButton className="cancel" onClick={() => { setCloseModal(false); props.handleClose() }}>
            Cancelar
          </PicButton>
          <PicButton type="submit" variant="primary">
            Salvar
          </PicButton>
        </Modal.Footer>
      </form>
    </AddModal >

  )
}

export default ModalAddPag;
