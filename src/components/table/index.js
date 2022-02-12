import React, { useState } from 'react';
import { PicTable, TextField } from './styles'
import { Card } from 'react-bootstrap'
import { HiOutlinePencil } from "react-icons/hi";
import { GiCancel } from "react-icons/gi";
import ModalDeletePag from '../modal-excluir-pagamento'

function TablePic(props) {

  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});


  function handleIsChecked(_checked, user) {
    console.log('Executei', _checked)
    const objIndex = props.userObj.findIndex((obj => obj.id === user.id))
    props.userObj[objIndex].paid = _checked
    // console.log(props.userObj[objIndex])
  }

  function getUserPaid(user) {
    return user.paid
  }

  function handleClickDelete(user) {
    setModalDeleteOpen(true);
    setSelectedUser(user);
  }


  function handleDelete() {
    console.log('Deleeeeeeeeeeta')
    setModalDeleteOpen(false);
  }

  return (
    <>
      <ModalDeletePag user={selectedUser} show={modalDeleteOpen} handleClose={() => setModalDeleteOpen(false)} delete={() => handleDelete()} />
      <Card style={{ marginTop: '2%' }}>
        <PicTable>
          <thead>
            <tr>
              <th style={{ width: '20%' }}>
                <TextField placeholder="Pesquisar por usuário" />
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <thead id="mainHead">
            <tr>
              <th>Usuário</th>
              <th>Título</th>
              <th>Data</th>
              <th>Valor</th>
              <th>Pago</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              props.userObj.map(user => {
                return (
                  <tr key={user.id}>
                    <td>
                      <div>
                        {user.name}
                        <div style={{ fontSize: '14px', color: '#69788C' }}>
                          {user.nickname}
                        </div>
                      </div>
                    </td>
                    <td>{user.title}</td>
                    <td>{user.date}</td>
                    <td>{user.value}</td>
                    <td>
                      <input style={{ height: '18px', width: '100%', cursor: 'pointer' }} type="checkbox" checked={getUserPaid(user.paid)} onChange={e => { handleIsChecked(e.target.checked, user) }} />
                    </td>
                    <th>
                      <HiOutlinePencil className="icon" />
                      <GiCancel onClick={ () => handleClickDelete(user)} className="icon" />
                    </th>
                  </tr>
                )
              }
              )
            }
          </tbody>
        </PicTable>
      </Card>
    </>
  );
}

export default TablePic;