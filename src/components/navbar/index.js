import React from 'react';
import { WrapperNavbar } from './styles'
import logo from '../../images/payfriendslogowhite.svg'
import avatar from '../../images/avatar.png'

function Navbar() {

  return (
    <WrapperNavbar>
      <div>
        <img src={logo} alt='pay friends logo' />
      </div>
      <div>
        <img src={avatar} alt='pay friends logo' />
      </div>
    </WrapperNavbar>
  );
}

export default Navbar;