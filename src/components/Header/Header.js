import React from 'react';
import './Header.sass';
import { NavLink } from 'react-router-dom';
import headerLogo from '../../images/logo-img.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
    function handleButtonClick() {
        console.log('Здесь должен всплывать попап');
    }
    return (
        <header className='header' id='header'>
            <div className='container'>
                <NavLink to='/' className='header__logo-link'>
                    <img
                        src={headerLogo}
                        alt='логотип компании'
                        className='header__logo-img'
                    />
                </NavLink>
                <Navigation />
                <button
                    type='button'
                    className='header__button'
                    onClick={handleButtonClick}
                >
                    Связаться с нами
                </button>
            </div>
        </header>
    );
}

export default Header;
