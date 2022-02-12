import React, { useState } from 'react';
import Navbar from '../../components/navbar'
import { ContainerPag, WrapperContent, PicButton } from './styles'
import TablePic from '../../components/table'
import ModalAddPag from '../../components/modal-adicionar-pagamento'

function Pagamentos() {

  const [userObj, setUserObj] = useState([{
    "id": 1,
    "name": 'Claudia',
    "nickname": '@claudia',
    "title": 'Professor',
    "date": '22/01/2020',
    "value": 100,
    "paid": true
  }]);

  const [modalAddOpen, setModalAddOpen] = useState(false);
  
  function handleAddUserObj(user) {
    setUserObj(oldArray => [ ...oldArray, user ])
  }

  return (
    <>
      <ModalAddPag show={modalAddOpen} handleClose={() => setModalAddOpen(false)} handleNewUser={(user) => handleAddUserObj(user)}/>
      <ContainerPag>
        <Navbar />
        <WrapperContent>
          <h2>Meus pagamentos</h2>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <PicButton onClick={() => setModalAddOpen(true)} variant="primary">Adicionar Pagamento</PicButton>
          </div>
          <TablePic userObj={userObj}/>
        </ WrapperContent>
      </ ContainerPag>
    </>
  );
}

export default Pagamentos;