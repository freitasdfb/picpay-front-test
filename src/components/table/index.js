import React from 'react';
import { PicTable, TextField } from './styles'
import { Card } from 'react-bootstrap'

function TablePic(props) {

  return (
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
            <th>Outas coisas</th>
          </tr>
        </thead>
        <thead id="mainHead">
          <tr>
            <th>Usuário</th>
            <th>Título </th>
            <th>Data </th>
            <th>Valor</th>
            <th>Pago </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            props.userObj.map(user => (
              <tr>
                <td>
                  {user.name}
                  {user.nickname}
                </td>
                <td>{user.title}</td>
                <td>{user.date}</td>
                <td>{user.value}</td>
                <td>{user.paid}</td>
                <td></td>
              </tr>
            ))
          }
        </tbody>
      </PicTable>
    </Card>
  );
}

export default TablePic;