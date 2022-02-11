import React from 'react';
import { WrapperNavbar } from './styles'
import logo from '../../images/payfriendslogowhite.svg'
import avatar from '../../images/avatar.png'
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <WrapperNavbar>
      <div>
        <Link to="/">
          <img style={{ cursor: 'pointer' }} src={logo} alt='pay friends logo'/>
        </Link>
      </div>
      <div>
        <img src={avatar} alt='pay friends logo' />
      </div>
    </WrapperNavbar>
  );
}

export default Navbar;