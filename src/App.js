import React from 'react';
import logo from './img/ninjatony.png';
import './App.css';
import Boton from './components/boton'
import Headerbar from './components/header'



function App() {
  return (
  <div>
    <Headerbar></Headerbar>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> <h1>TonyLoops Trest Clone</h1> </p>
          <Boton></Boton>
       </header>
    </div>
  </div>  
  );
}

export default App;
