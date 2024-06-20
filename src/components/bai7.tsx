import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './bai7';
import { toggleTheme, setTheme } from './bai7';
export default function bai7() {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    // Lưu trạng thái chế độ vào localStorage
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    // Lấy trạng thái chế độ từ localStorage khi trang được làm mới
    const savedTheme = localStorage.getItem('isDarkMode');
    if (savedTheme) {
      dispatch(setTheme(JSON.parse(savedTheme)));
    }
  }, [dispatch]);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <div style={{
        backgroundColor: isDarkMode ? '#333' : '#fff',
        color: isDarkMode ? '#fff' : '#000',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <label>
          <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
          {' '}Toggle Dark Mode
        </label>
      </div>
  )
}
