import React, { useEffect, useState } from 'react';
import './ConnectPopup.sass';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import DataProcessing from '../Register/RegistrationForm/DataProcessing/DataProcessing';
import {
  PHONE_REGEX,
  NAME_REGEX,
  DATA_PROCESSING_TEXT,
} from '../../constants/constants';
import RegistrationField from '../Register/RegistrationForm/RegistrationField/RegistrationField';

function ConnectPopup({ isOpen, onClose, onSubmit }) {
  const [responseMessage, setResponseMessage] = useState('');
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Мы свяжемся с Вами в ближайшее время');
  };
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setIsValid(evt.target.closest('form').checkValidity());
    console.log(name, value, errors);
  };

  const handlePhoneChange = (evt) => {
    handleChange(evt);
    const { name, value } = evt.target;
    if (name === 'phone' && !PHONE_REGEX.test(value)) {
      setIsValid(false);
      setErrors({
        ...errors,
        phone: 'Введите телефон в формате +7 999 999 99 99',
      });
    }
  };

  const handleNameChange = (evt) => {
    handleChange(evt);
    const { name, value } = evt.target;
    if (name === 'name' && !NAME_REGEX.test(value)) {
      setIsValid(false);
      setErrors({
        ...errors,
        name: 'Введите имя в формате Agent Smith',
      });
    }
  };

  const handleCheckbox = (evt) => {
    handleChange(evt);
    const { name, checked } = evt.target;
    if (name === 'dataProcessing' && evt.target.checked === false) {
      setIsValid(false);
      setErrors({
        ...errors,
        dataProcessing: 'Необходимо дать согласие на обработку данных',
      });
    } else {
      setValues({ ...values, [name]: toString(checked) });
    }
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      popupName="popup_form_add"
      formName="placeData"
      onClose={onClose}
      title="связаться с нами"
      buttonText="Связаться с нами"
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fieldset">
        <input
          className="popup__input"
          id="place-name"
          type="text"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="30"
          required
          onChange={handleNameChange}
          values={values}
        />
        {errors && (
          <span className="popup__input-error place-name-error">
            {errors['name']}
          </span>
        )}

        <input
          className="popup__input"
          id="place-link"
          type="phone"
          name="phone"
          placeholder="Телефон"
          minLength="7"
          maxLength="12"
          required
          onChange={handlePhoneChange}
          values={values}
        />
        {errors && (
          <span className="popup__input-error place-link-error">
            {errors['phone']}
          </span>
        )}
      </fieldset>
      <DataProcessing
        id={'connect'}
        text={DATA_PROCESSING_TEXT}
        handleChange={handleCheckbox}
      />
      <span className="popup__input-error dataProcessing-error">
        {errors['dataProcessing']}
      </span>
    </PopupWithForm>
  );
}

export default ConnectPopup;
