import React from 'react';
import './App.css';
import Wrapper from './Components/Wrapper';
import Navbar from './Components/Navbar';
import FormWrapper from './Components/FormWrapper'

import userContext from './Context/userContext';

function App() {
  return (
  <userContext.Provider>
    <Wrapper> 
      <Navbar/>
      <FormWrapper/>
    </Wrapper>
  </userContext.Provider>
  );
}

export default App;
