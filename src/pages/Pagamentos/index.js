import React from 'react';
import Navbar from '../../components/navbar'
import { ContainerPag, WrapperContent, PicButton } from './styles'
import TablePic from '../../components/table'
function Pagamentos() {

  return (
    <ContainerPag>
      <Navbar />
      <WrapperContent>
        <h2>Meus pagamentos</h2>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
          <PicButton variant="primary">Adicionar Pagamento</PicButton>
        </div>
        <TablePic />
      </ WrapperContent>
    </ ContainerPag>
  );
}

export default Pagamentos;