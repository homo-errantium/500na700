import './Accordeon.sass';

function Accordeon() {
    return (
        <ul className='menu'>
            <li className='menu__item'>
                <a href='#' className='menu__link menu__link_pseudo'>
                    О нас
                </a>
                <ul className='menu__list'>
                    <li className='menu__item'>
                        <a href='#' className='menu__link'>
                            О 500na700
                        </a>
                    </li>
                    <li className='menu__item'>
                        <a href='#' className='menu__link'>
                            Документы
                        </a>
                    </li>
                    <li className='menu__item'>
                        <a href='#' className='menu__link'>
                            Устойчивое развитие
                        </a>
                    </li>
                    <li className='menu__item'>
                        <a href='#' className='menu__link'>
                            Команда
                        </a>
                    </li>
                    <li className='menu__item'>
                        <a href='#' className='menu__link'>
                            Стратегия
                        </a>
                    </li>
                </ul>
            </li>

            <li className='menu__item'>
                <a href='#' className='menu__link menu__link_pseudo'>
                    Проекты
                </a>
                <ul className='menu__list'>
                    <li className='menu__item'>
                        <a href='#' className='menu__link'>
                            Project-1
                        </a>
                    </li>
                    <li className='menu__item'>
                        <a href='#' className='menu__link'>
                            Project-2
                        </a>
                    </li>
                    <li className='menu__item'>
                        <a href='#' className='menu__link'>
                            Project-3
                        </a>
                    </li>
                </ul>
            </li>
            <li className='menu__item'>
                <a href='#' className='menu__link'>
                    Новости
                </a>
            </li>
            <li className='menu__item'>
                <a href='#' className='menu__link'>
                    FAQ
                </a>
            </li>
            <li className='menu__item'>
                <a href='#' className='menu__link'>
                    Контакты
                </a>
            </li>
        </ul>
    );
}

export default Accordeon;
