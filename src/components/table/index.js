import React from 'react';
import { PicTable, TextField } from './styles'
import { Card } from 'react-bootstrap'

function TablePic() {

  return (
    <Card style={{ marginTop: '2%' }}>
      <PicTable>
        <thead>
          <tr>
            <th style={{ width: '20%'}}>
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </PicTable>
    </Card>
  );
}

export default TablePic;