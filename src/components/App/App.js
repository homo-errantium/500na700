import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.sass';
import MainPage from '../Pages/MainPage/MainPage';
import ConnectPopup from '../ConnectPopup/ConnectPopup';
import NewsPage from '../Pages/NewsPage/NewsPage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';

function App() {
  const [isConnectPopupOpen, setIsConnectPopupOpen] = useState(false);

  const handleConnectPopupSubmit = () => {
    setIsConnectPopupOpen(true);
  };

  const closePopup = () => {
    setIsConnectPopupOpen(false);
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27 || e.target.classList.contains('popup_opened')) {
        closePopup();
      }
    };
    window.addEventListener('keydown', close);
    window.addEventListener('click', close);
    return () => {
      window.removeEventListener('keydown', close);
      window.removeEventListener('click', close);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MainPage handleConnectPopup={handleConnectPopupSubmit} />}
        />
        <Route path="/news" element={<NewsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ConnectPopup
        isOpen={isConnectPopupOpen}
        onClose={closePopup}
        onSubmit={handleConnectPopupSubmit}
      />
    </>
  );
}

export default App;
