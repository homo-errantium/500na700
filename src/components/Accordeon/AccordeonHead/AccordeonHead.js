import './AccordeonHead.sass';
import vectorUp from '../../../images/vectorUp.svg';
import { NavLink } from 'react-router-dom';

function AccordeonHead({ handleConnectPopup }) {
  return (
    <div className="navbar__container">
      <nav className="navbar">
        <div className="navbar__item navbar__down">
          <button className="navbar__down-btn">
            О нас
            <img
              src={vectorUp}
              alt="стрелка меню"
              className="navbar__down-btn-img"
            />
          </button>
          <div className="navbar__down-content">
            <a href="/" className="navbar__down-content-link">
              О 500na700
            </a>
            <a href="/" className="navbar__down-content-link">
              Документы
            </a>
            <a href="/" className="navbar__down-content-link">
              Устойчивое развитие
            </a>
            <a href="/" className="navbar__down-content-link">
              Команда
            </a>
            <a href="/" className="navbar__down-content-link">
              Стратегия
            </a>
          </div>
        </div>
        <div className="navbar__item navbar__down">
          <button className="navbar__down-btn">
            Проекты
            <img
              src={vectorUp}
              alt="стрелка меню"
              className="navbar__down-btn-img"
            />
          </button>
          <div className="navbar__down-content">
            <a href="/" className="navbar__down-content-link">
              Project-1
            </a>
            <a href="/" className="navbar__down-content-link">
              Project-1
            </a>
            <a href="/" className="navbar__down-content-link">
              Project-1
            </a>
          </div>
        </div>
        <NavLink to="/news" className="navbar__item navbar__static">
          Новости
        </NavLink>
        <NavLink href="/" className="navbar__item navbar__static">
          FAQ
        </NavLink>
        <NavLink href="/" className="navbar__item navbar__static">
          Контакты
        </NavLink>
      </nav>
      <button
        type="button"
        className="header__button"
        onClick={handleConnectPopup}
      >
        Связаться с нами
      </button>
    </div>
  );
}

export default AccordeonHead;
