import React from 'react';
import Navbar from '../../components/navbar'
import { ContainerPag, WrapperContent } from './styles'
import TablePic from '../../components/table'
import { Button } from 'react-bootstrap'
function Pagamentos() {

  return (
    <ContainerPag>
      <Navbar />
      <WrapperContent>
        <h2>Meus pagamentos</h2>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
          <Button style={{textTransform: 'uppercase'}} variant="primary">Adicionar Pagamento</Button>
        </div>
        <TablePic />
      </ WrapperContent>
    </ ContainerPag>
  );
}

export default Pagamentos;