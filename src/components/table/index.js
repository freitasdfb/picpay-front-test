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
                  <input style={{ height: '18px', width: '100%'}} type="checkbox" checked={user.paid} onChange={e => {}} />
                </td>
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