import React from 'react';
import { PicTable } from './styles'
import { Card } from 'react-bootstrap'

function TablePic() {

  return (
    <Card style={{marginTop: '2%'}}>
      <PicTable>
        <thead>
          Dois heads na tabel
        </thead>
        <thead>
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
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </PicTable>
    </Card>
  );
}

export default TablePic;