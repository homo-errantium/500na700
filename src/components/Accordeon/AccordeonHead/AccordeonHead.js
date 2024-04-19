import './AccordeonHead.sass';
import vectorUp from '../../../images/vectorUp.svg';
import { NavLink } from 'react-router-dom';

function AccordeonHead({ isActive, handleConnectPopup }) {
    return (
        <div className='navbar__container'>
            <nav className='navbar'>
                <div
                    className={`navbar__item navbar__down ${
                        isActive && 'navbar__item_dark'
                    }`}
                >
                    <button class='navbar__down-btn'>
                        О нас
                        <img
                            src={vectorUp}
                            alt='стрелка меню'
                            className='navbar__down-btn-img'
                        />
                    </button>
                    <div className='navbar__down-content'>
                        <a class='navbar__down-content-link' href='#'>
                            О 500na700
                        </a>
                        <a class='navbar__down-content-link' href='#'>
                            Документы
                        </a>
                        <a class='navbar__down-content-link' href='#'>
                            Устойчивое развитие
                        </a>
                        <a class='navbar__down-content-link' href='#'>
                            Команда
                        </a>
                        <a class='navbar__down-content-link' href='#'>
                            Стратегия
                        </a>
                    </div>
                </div>
                <div
                    className={`navbar__item navbar__down ${
                        isActive && 'navbar__item_dark'
                    }`}
                >
                    <button className='navbar__down-btn'>
                        Проекты
                        <img
                            src={vectorUp}
                            alt='стрелка меню'
                            className='navbar__down-btn-img'
                        />
                    </button>
                    <div className='navbar__down-content'>
                        <a className='navbar__down-content-link' href='#'>
                            Project-1
                        </a>
                        <a className='navbar__down-content-link' href='#'>
                            Project-1
                        </a>
                        <a className='navbar__down-content-link' href='#'>
                            Project-1
                        </a>
                    </div>
                </div>
                <NavLink
                    to='/news'
                    className={`navbar__item navbar__static ${
                        isActive && 'navbar__item_dark'
                    }`}
                >
                    Новости
                </NavLink>
                <NavLink
                    to='/'
                    className={`navbar__item navbar__static ${
                        isActive && 'navbar__item_dark'
                    }`}
                >
                    FAQ
                </NavLink>
                <NavLink
                    to='/'
                    className={`navbar__item navbar__static ${
                        isActive && 'navbar__item_dark'
                    }`}
                >
                    Контакты
                </NavLink>
            </nav>
            <button
                type='button'
                className='header__button'
                onClick={handleConnectPopup}
            >
                Связаться с нами
            </button>
        </div>
    );
}

export default AccordeonHead;
