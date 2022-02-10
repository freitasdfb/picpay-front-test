import React from 'react';
import Navbar from '../../components/navbar'
import { ContainerPag, WrapperContent, PicButton } from './styles'
import TablePic from '../../components/table'
import { useState } from 'react';



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

  function handleAddUserObj(user) {
    setUserObj({ ...userObj, user })
  }

  return (
    <ContainerPag>
      <Navbar />
      <WrapperContent>
        <h2>Meus pagamentos</h2>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <PicButton variant="primary">Adicionar Pagamento</PicButton>
        </div>
        <TablePic userObj={userObj} />
      </ WrapperContent>
    </ ContainerPag>
  );
}

export default Pagamentos;