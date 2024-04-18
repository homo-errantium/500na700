import './AccordeonFAQ.sass';
import vectorUp from '../../../images/vectorUp.svg';

function AccordeonFAQ() {
    return (
        <div className='accordeon__container'>
            <label class='accordion'>
                <input type='radio' name='radio-accordion' />
                <div class='accordion__header'>
                    <p className='accordion__header-text'>
                        Какие услуги предоставляет ваша студия?
                    </p>
                    <img
                        src={vectorUp}
                        alt='стрелка меню'
                        className='accordion__header-img'
                    />
                </div>
                <div class='accordion__content'>
                    <p class='accordion__content-text'>
                        Мы придерживаемся высоких стандартов качества и
                        стремимся создавать уникальный дизайн, отвечающий
                        потребностям и ожиданиям наших клиентов. Наши дизайнеры
                        постоянно совершенствуют свои навыки и следят за новыми
                        трендами в дизайне..
                    </p>
                </div>
            </label>
            <label class='accordion'>
                <input type='radio' name='radio-accordion' />
                <div class='accordion__header'>
                    <p className='accordion__header-text'>
                        Как вы обеспечиваете качество и уникальность дизайна?
                    </p>
                    <img
                        src={vectorUp}
                        alt='стрелка меню'
                        className='accordion__header-img'
                    />
                </div>
                <div class='accordion__content'>
                    <p class='accordion__content-text'>
                        Мы придерживаемся высоких стандартов качества и
                        стремимся создавать уникальный дизайн, отвечающий
                        потребностям и ожиданиям наших клиентов. Наши дизайнеры
                        постоянно совершенствуют свои навыки и следят за новыми
                        трендами в дизайне.
                    </p>
                </div>
            </label>
            <label class='accordion'>
                <input type='radio' name='radio-accordion' />
                <div class='accordion__header'>
                    <p className='accordion__header-text'>
                        Предоставляете ли вы услуги по созданию контента для
                        сайтов и приложений?
                    </p>
                    <img
                        src={vectorUp}
                        alt='стрелка меню'
                        className='accordion__header-img'
                    />
                </div>
                <div class='accordion__content'>
                    <p class='accordion__content-text'>
                        Мы придерживаемся высоких стандартов качества и
                        стремимся создавать уникальный дизайн, отвечающий
                        потребностям и ожиданиям наших клиентов. Наши дизайнеры
                        постоянно совершенствуют свои навыки и следят за новыми
                        трендами в дизайне..
                    </p>
                </div>
            </label>
        </div>
    );
}

export default AccordeonFAQ;
