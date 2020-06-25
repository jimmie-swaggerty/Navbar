import React, { useContext } from 'react';
import userContext from '../Context/userContext';

const navBarStyle = {
    backgroundColor: 'purple',
    height: '36px',
    padding: '10px',
    textAlign: 'right',
    verticalAlign:'bottom',
    fontSize: '26px',
    color: 'white',
    display: 'block'
}

const Navbar = () => {
  const {name} = useContext(userContext);
  return (
    <div style={navBarStyle}>
      <span>Hello {name}!</span>
    </div>
  )
}

export default Navbar;
