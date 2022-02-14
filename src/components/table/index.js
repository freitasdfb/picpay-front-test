import React, { useState, useEffect } from 'react';
import { PicTable, TextField } from './styles'
import { Card } from 'react-bootstrap'
import { HiOutlinePencil } from "react-icons/hi";
import { GiCancel } from "react-icons/gi";
import ModalDeletePag from '../modal-excluir-pagamento'
import ModalAddPag from '../modal-adicionar-pagamento';

function TablePic(props) {

  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [users, setUsers] = useState(props.userObj)
  const [modalAddOpen, setModalAddOpen] = useState(false);

  useEffect(() => {
    setUsers(props.userObj);
  }, [props.userObj])


  function handleIsChecked(_checked, user) {
    let _users = [...users]
    const objIndex = _users.findIndex((obj => obj.id === user.id))
    let _user = _users[objIndex]
    _user.paid = _checked;
    _users[objIndex] = _user;
    setUsers(_users);
  }

  function handleClickDelete(user) {
    setModalDeleteOpen(true);
    setSelectedUser(user);
  }

  function handleClickEdit(user){
    setSelectedUser(user);
    setModalAddOpen(true);
  }


  function handleDelete(user) {
    setModalDeleteOpen(false);
    let _users = [...users]
    const objIndex = _users.findIndex((obj => obj.id === user.id))
    _users.splice(objIndex, 1);
    setUsers(_users);
  }

  function handleEditUser(_user) {
    let _users = [...users]
    const objIndex = _users.findIndex((obj => obj.id === _user.id))
    _users[objIndex] = _user;
    setUsers(_users);
  }

  return (
    <>
      <ModalAddPag show={modalAddOpen} handleClose={() => setModalAddOpen(false)} edit={true} user={selectedUser} handleEdit={(user) => handleEditUser(user)}/>
      <ModalDeletePag user={selectedUser} show={modalDeleteOpen} handleClose={() => setModalDeleteOpen(false)} delete={() => handleDelete(selectedUser)} />
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
              users.map(user => {
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
                      <input style={{ height: '18px', width: '100%', cursor: 'pointer' }} type="checkbox" checked={user.paid} onChange={e => { handleIsChecked(e.target.checked, user) }} />
                    </td>
                    <th>
                      <HiOutlinePencil onClick={() => handleClickEdit(user)} className="icon" />
                      <GiCancel onClick={() => handleClickDelete(user)} className="icon" />
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