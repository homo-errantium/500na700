import './Footer.sass';
import { NavLink } from 'react-router-dom';
import footerMainLogo from '../../images/footerLogo/footer-logo.svg';
import footerYouTubeLogo from '../../images/footerLogo/footer-logo-youtube.svg';
import footerTelegramLogo from '../../images/footerLogo/footer-logo-telegram.svg';
import footerVKLogo from '../../images/footerLogo/footer-logo-vk.svg';

function Footer() {
    return (
        <footer className='footer' id='footer'>
            <div className='container'>
                <div className='footer__logo-container'>
                    <NavLink
                        to='/'
                        className='footer__logo-link footer__logo-link_main'
                    >
                        <img
                            src={footerMainLogo}
                            alt='логотип компании'
                            className='footer__logo-img-main'
                        />
                    </NavLink>
                    <div className='footer__social-logo-container'>
                        <NavLink
                            to='/'
                            className='footer__logo-link footer__logo-link_social'
                        >
                            <img
                                src={footerYouTubeLogo}
                                alt='логотип компании'
                                className='footer__logo-img-youtube'
                            />
                        </NavLink>
                        <NavLink
                            to='/'
                            className='footer__logo-link footer__logo-link_social'
                        >
                            <img
                                src={footerTelegramLogo}
                                alt='логотип компании'
                                className='footer__logo-img-telegram'
                            />
                        </NavLink>
                        <NavLink
                            to='/'
                            className='footer__logo-link footer__logo-link_social'
                        >
                            <img
                                src={footerVKLogo}
                                alt='логотип компании'
                                className='footer__logo-img-vk'
                            />
                        </NavLink>
                    </div>
                </div>
                <nav className='footer__nav'>
                    <ul className='footer__nav-list'>
                        <li className='footer__nav-item'>
                            <NavLink to='/'>O нас</NavLink>
                        </li>
                        <li className='footer__nav-item'>
                            <NavLink to='/'>Проекты</NavLink>
                        </li>
                        <li className='footer__nav-item'>
                            <NavLink to='/'>Новости</NavLink>
                        </li>
                        <li className='footer__nav-item'>
                            <NavLink to='/'>FAQ</NavLink>
                        </li>
                        <li className='footer__nav-item'>
                            <NavLink to='/'>Контакты</NavLink>
                        </li>
                    </ul>
                </nav>
                <ul className='footer__contact-list'>
                    <li className='footer__contact-item'>
                        <a
                            href='https://yandex.ru/maps'
                            target='_blank'
                            rel='noreferrer'
                            className='footer__contact-location'
                        >
                            г. Горгород, ул. Мегаполисная, 1
                        </a>
                    </li>
                    <li className='footer__contact-item'>
                        <a
                            className='contacts__link'
                            href='tel:+70000000000'
                            target='_blank'
                            rel='noreferrer'
                        >
                            +7 (000) 000-00-00
                        </a>
                    </li>
                    <li className='footer__contact-item'>
                        <a
                            className='contacts__link'
                            href='mailto:email@email.ru?body=Привет, вопрос по поводу:'
                            target='_blank'
                            rel='noreferrer'
                        >
                            email@email.ru
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
