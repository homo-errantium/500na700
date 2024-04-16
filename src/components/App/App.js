import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.sass';
import MainPage from '../Pages/MainPage/MainPage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            {/* <Route path='/about-500na700' element={<AboutUsPage />} />
            <Route path='/documents' element={<DocumentsPage />} />
            <Route path='/sust-development' element={<DevelopmentPage />} />
            <Route path='/team' element={<TeamPage />} />
            <Route path='/strategy' element={<StrategyPage />} />
            <Route path='/project-one' element={<ProjectOnePage />} />
            <Route path='/project-two' element={<ProjectTwoPage />} />
            <Route path='/project-three' element={<ProjectThreePage />} />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/faq' element={<faqPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='*' element={<NotFoundPage />} /> */}
        </Routes>
    );
}

export default App;
