import { createAsyncThunk } from '@reduxjs/toolkit';
import { IData_SnippetNews } from '../interfaces/interfaces'; // Укажите правильный путь

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  try {
    const response = await fetch('data.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData: IData_SnippetNews = await response.json();
    return jsonData;
  } catch (error: any) {
    console.error('Ошибка при получении JSON:', error);
    throw error; // Пробросьте ошибку, чтобы ее можно было обработать в редьюсере
  }
});
