import React, { useContext } from 'react';

import userContext from '../Context/userContext';

const formStyle = {
  padding: '20px',
  fontSize: '20px'
}

const inputStyle = {
  fontSize: '20px'
}

export default() => {
  const {name, setName} = useContext(userContext);
  return (
    <form style={formStyle}>
      <label >Your Name: </label>
      <input style={inputStyle} type="text" name="name" value={name} onChange={(e => {setName(e.target.value)})}/>
  </form>
  );
}