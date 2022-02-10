import React from 'react';
import Navbar from '../../components/navbar'
import { ContainerPag, WrapperContent } from './styles'
import TablePic from '../../components/table'
function Pagamentos() {

  return (
    <ContainerPag>
      <Navbar />
      <WrapperContent>
        <div>
          <h2>Meus pagamentos</h2>
        </div>
        <TablePic />
      </ WrapperContent>
    </ ContainerPag>
  );
}

export default Pagamentos;