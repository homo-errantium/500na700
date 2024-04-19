import React from 'react';
import './PopupWithForm.sass';
import popupBtnClose from '../../images/popup-close-button.svg';
function PopupWithForm(props) {
    return (
        <div
            className={`popup ${props.popupName} ${
                props.isOpen ? `popup_opened` : ''
            }`}
        >
            <div className='popup__container'>
                <form
                    onSubmit={props.onSubmit}
                    className='popup__form'
                    name={`${props.formName}`}
                >
                    <h2 className='popup__title'>{props.title}</h2>

                    {props.children}

                    <button type='submit' className='popup__btn-save'>
                        {'Отправить'}
                    </button>
                </form>

                <button
                    className='popup__btn-close'
                    type='button'
                    onClick={props.onClose}
                >
                    <img
                        src={popupBtnClose}
                        alt='кнопка закрытия попапа'
                        className='popup__btn-close-img'
                    />
                </button>
            </div>
        </div>
    );
}

export default PopupWithForm;
