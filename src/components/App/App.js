import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.sass';
import MainPage from '../Pages/MainPage/MainPage';
import ConnectPopup from '../ConnectPopup/ConnectPopup';

function App() {
    const [isConnectPopupOpen, setIsConnectPopupOpen] = useState(false);

    function handleConnectPopupSubmit() {
        setIsConnectPopupOpen(true);
    }

    function closePopup() {
        setIsConnectPopupOpen(false);
    }

    useEffect(() => {
        const close = (e) => {
            if (
                e.keyCode === 27 ||
                e.target.classList.contains('popup_opened')
            ) {
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
                    path='/'
                    element={
                        <MainPage
                            handleConnectPopup={handleConnectPopupSubmit}
                        />
                    }
                />
                {/* <Route path='/news' element={<NewsPage />} /> */}
                {/* <Route path='/about-500na700' element={<AboutUsPage />} />
            <Route path='/documents' element={<DocumentsPage />} />
            <Route path='/sust-development' element={<DevelopmentPage />} />
            <Route path='/team' element={<TeamPage />} />
            <Route path='/strategy' element={<StrategyPage />} />
            <Route path='/project-one' element={<ProjectOnePage />} />
            <Route path='/project-two' element={<ProjectTwoPage />} />
            <Route path='/project-three' element={<ProjectThreePage />} />
            
            <Route path='/faq' element={<faqPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='*' element={<NotFoundPage />} /> */}
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
