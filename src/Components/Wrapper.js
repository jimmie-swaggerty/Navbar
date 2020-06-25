import React, {useState} from 'react';

import userContext from '../Context/userContext'

export default ({children}) => {
  const [name, setName] = useState("New User");
  
  return (
    <userContext.Provider value={{name,setName}}>
    {children}
    </userContext.Provider>
  );
}
