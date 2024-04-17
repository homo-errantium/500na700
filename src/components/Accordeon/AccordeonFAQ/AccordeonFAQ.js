import './AccordeonFAQ.sass';

function AccordeonFAQ() {
    return (
        <div className='accordeon__container'>
            <label class='accordion'>
                <input type='radio' name='radio-accordion' />
                <div class='accordion__header'>
                    Какие услуги предоставляет ваша студия?
                </div>
                <div class='accordion__content'>
                    <p>
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
                    Как вы обеспечиваете качество и уникальность дизайна?
                </div>
                <div class='accordion__content'>
                    <p>
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
                    Предоставляете ли вы услуги по созданию контента для сайтов
                    и приложений?
                </div>
                <div class='accordion__content'>
                    <p>
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
