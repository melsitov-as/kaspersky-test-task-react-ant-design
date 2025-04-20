import { useState, useEffect } from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import Content from './components/Content/Content';
import Dublicates from './components/Dublicates/Dublicates';

import { IData_SnippetNews } from './interfaces/interfaces';

function App() {
  const [data, setData] = useState<IData_SnippetNews | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('/kaspersky-test-task-react-ant-design/data.json')
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
    return <div style={{ color: '#ffffff' }}> Загрузка данных...</div>;
  }

  if (error) {
    return (
      <div style={{ color: '#ffffff' }}>
        Ошибка при загрузке данных: {error.message}
      </div>
    );
  }

  return (
    <div
      className='App'
      style={{
        width: '100%',
        margin: '0 auto',
        background:
          'linear-gradient(to bottom, transparent 0, transparent 800px, black 800px)',
      }}
    >
      <AppHeader data={data} />
      <Content data={data} />
      <Dublicates data={data} />
    </div>
  );
}

export default App;
