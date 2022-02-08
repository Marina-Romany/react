import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Row from './Components/Row';
import nstance from '/components/axios';
import requests from '/components/requests'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <Navbar/>
       <Banner/>
       <Row/>
       <nstance />
       <requests/>
      </header>
     
      
    </div>
  );
}

export default App;
