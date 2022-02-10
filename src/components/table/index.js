import React from 'react';
import { PicTable, TextField } from './styles'
import { Card } from 'react-bootstrap'

function TablePic() {

  return (
    <Card style={{ marginTop: '2%' }}>
      <PicTable>
        <thead style={{ padding: '0px 2%'}}>
          <th>
            <TextField placeholder="Pesquisar por usuário" />
          </th>
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