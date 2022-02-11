import React from 'react';
import Navbar from '../../components/navbar'
import { ContainerPag, WrapperContent, PicButton } from './styles'
import TablePic from '../../components/table'
import ModalAddPag from '../../components/modal-adicionar-pagamento'
import { useState, useEffect } from 'react';



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

  const [modalOpen, setModalOpen] = useState(false);

  function handleAddUserObj(user) {
    setUserObj(oldArray => [ ...oldArray, user ])
  }

  useEffect(() => {
    console.log('modalOpen', modalOpen)
  }, [modalOpen])
  

  return (
    <>
      <ModalAddPag show={modalOpen} handleClose={() => setModalOpen(false)} handleNewUser={(user) => handleAddUserObj(user)}/>
      <ContainerPag>
        <Navbar />
        <WrapperContent>
          <h2>Meus pagamentos</h2>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <PicButton onClick={() => setModalOpen(true)} variant="primary">Adicionar Pagamento</PicButton>
          </div>
          <TablePic userObj={userObj} />
        </ WrapperContent>
      </ ContainerPag>
    </>
  );
}

export default Pagamentos;