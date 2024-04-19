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
                        <NavLink class='navbar__down-content-link'>
                            О 500na700
                        </NavLink>
                        <NavLink class='navbar__down-content-link'>
                            Документы
                        </NavLink>
                        <NavLink class='navbar__down-content-link'>
                            Устойчивое развитие
                        </NavLink>
                        <NavLink class='navbar__down-content-link'>
                            Команда
                        </NavLink>
                        <NavLink class='navbar__down-content-link'>
                            Стратегия
                        </NavLink>
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
                        <NavLink className='navbar__down-content-link'>
                            Project-1
                        </NavLink>
                        <NavLink className='navbar__down-content-link'>
                            Project-1
                        </NavLink>
                        <NavLink className='navbar__down-content-link'>
                            Project-1
                        </NavLink>
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
