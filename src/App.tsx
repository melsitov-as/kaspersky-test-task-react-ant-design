import React from 'react';
import logo from './logo.svg';
import './App.css';
import _Header from './components/Header/Header';
import Content from './components/Content/Content';
import Dublicates from './components/Dublicates';

function App() {
  return (
    <div
      className='App'
      style={{ width: '100%', margin: '0 auto', background: '#000000' }}
    >
      <_Header />
      <Content />
      <Dublicates />
    </div>
  );
}

export default App;
