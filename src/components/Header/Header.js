import React, { useEffect, useState } from 'react';
import './Header.sass';
import { NavLink } from 'react-router-dom';
import headerLogo from '../../images/logo-img.svg';
import Navigation from '../Navigation/Navigation';
import burgerButton from '../../images/burger-button.svg';
import burgerCloseButton from '../../images/burger-close-button.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header({ windowWidth, handleWindowWith, handleConnectPopup }) {
    const [isOverlay, setIsOverlay] = useState(false);

    function defineEventType() {
        return windowWidth > 768 ? 'mouseover' : 'click';
    }

    function handleOverlay() {
        const navbarDown = document.getElementsByClassName('navbar__down');

        // eslint-disable-next-line array-callback-return
        Array.from(navbarDown).map((item) => {
            item.addEventListener(`${defineEventType()}`, () => {
                setIsOverlay(true);
            });
            item.addEventListener('mouseout', function () {
                setIsOverlay(false);
            });
        });
    }

    useEffect(() => {
        handleOverlay();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowWidth]);

    const [isClicked, setIsClicked] = useState(false);

    function handleOpen() {
        setIsClicked(true);
    }

    function handleClose() {
        setIsClicked(false);
    }

    return (
        <header className='header' id='header'>
            <div
                className={`header__overlay ${
                    isOverlay && 'header__overlay_active'
                }`}
            >
                <div className='header__overlay-black-head-active'></div>
            </div>
            {/*поднимаем контейнер над оверлеем */}
            <div
                className={`container  ${
                    isOverlay && 'container_z-up'
                } header__container`}
            >
                <NavLink to='/' className='header__logo-link'>
                    <img
                        src={headerLogo}
                        alt='логотип компании'
                        className='header__logo-img'
                    />
                </NavLink>
                <Navigation
                    handleConnectPopup={handleConnectPopup}
                    isActive={isOverlay}
                />

                <button
                    type='button'
                    className='navigation__burger-button'
                    onClick={isClicked ? handleClose : handleOpen}
                >
                    <img
                        src={isClicked ? burgerCloseButton : burgerButton}
                        alt={
                            isClicked
                                ? 'кнопка закрытия меню'
                                : 'кнопка открытия меню'
                        }
                        className='navigation__burger-button-img'
                    />
                </button>
                {isClicked ? <BurgerMenu isActive={isOverlay} /> : ''}
            </div>
        </header>
    );
}

export default Header;
