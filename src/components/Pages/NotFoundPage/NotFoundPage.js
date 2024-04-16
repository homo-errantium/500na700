import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.sass';

function NotFoundPage() {
    return (
        <div className='page'>
            <main className='not-found'>
                <h1 className='not-found__title'>404</h1>
                <p className='not-found__description'>Страница не найдена</p>
                <Link to='/' className='not-found__back-link'>
                    Назад
                </Link>
            </main>
        </div>
    );
}

export default NotFoundPage;
