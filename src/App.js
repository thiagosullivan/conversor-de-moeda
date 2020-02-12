import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Conversor from "./components/Conversor"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Conversor de Moedas</h1>
        <div className="linha">
          <h2>Dólar</h2>
            <div className="linha-dois">
              <Conversor moedaA="USD" moedaB="BRL"></Conversor>
              <Conversor moedaA="BRL" moedaB="USD"></Conversor>
            </div>
          </div>
        <div className="linha">
          <h2>Dólar canadense</h2>
            <div className="linha-dois">
              <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
              <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
            </div>
        </div>
        <div className="linha">
          <h2>Euro</h2>
            <div className="linha-dois">
              <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
              <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
