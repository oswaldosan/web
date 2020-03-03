import React from 'react';
import logo from './img/ninjatony.png';
import './App.css';
import Boton from './components/boton'
import Headerbar from './components/header'
import styled, { css } from 'styled-components'


function App() {
  return (
  <div>
    <Headerbar></Headerbar>
    <div className="App">
      <header className="App-header">
           <Titulos>React Tests</Titulos>
          <Boton></Boton>
       </header>
    </div>
  </div>  
  );
}

export default App;

const Titulos = styled.div`
   font-size: 25px;
   padding: 20px;
`
