import { useEffect } from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import Content from './components/Content/Content';
import Dublicates from './components/Dublicates/Dublicates';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './store/actions';
import { AppDispatch, RootState } from './store/store';

function App() {
  const data = useSelector((state: RootState) => state.data.data);
  const loading = useSelector((state: RootState) => state.data.loading);
  const error = useSelector((state: RootState) => state.data.error);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Загрузка данных...</div>;
  }

  if (error) {
    return <div>Ошибка при загрузке данных: {error.message}</div>;
  }

  return (
    <div className='App'>
      <AppHeader />
      <Content />
      <Dublicates />
    </div>
  );
}

export default App;
