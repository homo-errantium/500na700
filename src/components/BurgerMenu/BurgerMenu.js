import React from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.sass';

function BurgerMenu(props) {
    const handleClose = props.handleClose;
    return (
        <div className='burger-menu'>
            <div
                className='burger-menu__container-empty'
                onClick={handleClose}
            ></div>
            <div className='burger-menu__container'>
                <button
                    className='burger-menu__close-button'
                    type='button'
                    onClick={handleClose}
                ></button>
                <nav className='burger-menu__links'>
                    <NavLink to='/' className='burger-menu__link'>
                        Главная
                    </NavLink>
                    <NavLink to='/menu' className='burger-menu__link'>
                        Меню
                    </NavLink>
                    <NavLink to='/fillings' className='burger-menu__link'>
                        Начинки
                    </NavLink>
                    <NavLink to='/about-me' className='burger-menu__link'>
                        Обо мне
                    </NavLink>
                    <NavLink to='/contacts' className='burger-menu__link'>
                        Контакты
                    </NavLink>
                </nav>
            </div>
        </div>
    );
}

export default BurgerMenu;
