import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import _Header from './components/Header/Header';
import Content from './components/Content/Content';
import Dublicates from './components/Dublicates';

import { IData_SnippetNews } from './interfaces/interfaces';

function App() {
  const [data, setData] = useState<IData_SnippetNews | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.error('Ошибка при получении JSON:', err);
      });
  }, []);

  if (loading) {
    return <div>Загрузка данных...</div>;
  }

  if (error) {
    return <div>Ошибка при загрузке данных: {error.message}</div>;
  }

  return (
    <div
      className='App'
      style={{ width: '100%', margin: '0 auto', background: '#000000' }}
    >
      <_Header data={data} />
      <Content data={data} />
      <Dublicates data={data} />
    </div>
  );
}

export default App;
