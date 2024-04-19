import React from 'react';
import './ConnectPopup.sass';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import DataProcessing from '../Register/RegistrationForm/DataProcessing/DataProcessing';

function ConnectPopup({ isOpen, onClose, onSubmit }) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit({
            name: name,
            link: link,
        });
    }

    React.useEffect(() => {
        if (isOpen) {
            setName('');
            setLink('');
        }
    }, [isOpen]);

    return (
        <PopupWithForm
            isOpen={isOpen}
            popupName='popup_form_add'
            formName='placeData'
            onClose={onClose}
            title='Новое место'
            buttonText='Связаться с нами'
            onSubmit={handleSubmit}
        >
            <fieldset className='popup__fieldset'>
                <input
                    className='popup__input'
                    id='place-name'
                    type='text'
                    name='name'
                    placeholder='Имя'
                    minLength='2'
                    maxLength='30'
                    required
                    onChange={handleNameChange}
                    value={name}
                />
                <span className='popup__input-error place-name-error'></span>
                <input
                    className='popup__input'
                    id='place-link'
                    type='phone'
                    name='phone'
                    placeholder='Телефон'
                    required
                    onChange={handleLinkChange}
                    value={link}
                />
                <span className='popup__input-error place-link-error'></span>
            </fieldset>
            <DataProcessing />
        </PopupWithForm>
    );
}

export default ConnectPopup;
