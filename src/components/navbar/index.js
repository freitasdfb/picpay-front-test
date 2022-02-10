import React from 'react';
import { WrapperNavbar } from './styles'
import logo from '../../images/payfriendslogowhite.svg'
import avatar from '../../images/avatar.png'

function Navbar() {

  return (
    <WrapperNavbar>
      <div>
        <img style={{cursor: 'pointer'}} src={logo} alt='pay friends logo' href="/"/>
      </div>
      <div>
        <img src={avatar} alt='pay friends logo' />
      </div>
    </WrapperNavbar>
  );
}

export default Navbar;