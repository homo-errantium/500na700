import React, { useState } from 'react';
import './RegistrationForm.sass';
import RegistrationField from './RegistrationField/RegistrationField';
import {
  EMAIL_REGEX,
  DATA_PROCESSING_TEXT,
} from '../../../constants/constants';
import DataProcessing from './DataProcessing/DataProcessing';
import {
  PHONE_REGEX,
  DATE_REGEX,
  TIME_REGEX,
} from '../../../constants/constants';

const RegistrationForm = () => {
  function onSubmit() {
    console.log('Форма отправлена');
  }
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setIsValid(evt.target.closest('form').checkValidity());
  };

  const handleEmailChange = (evt) => {
    handleChange(evt);
    const { name, value } = evt.target;
    if (name === 'email' && !EMAIL_REGEX.test(value)) {
      setIsValid(false);
      setErrors({
        ...errors,
        email: 'Введите email в формате address@domain.com',
      });
    }
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
      console.log(errors);
    }
  };

  const handleDateChange = (evt) => {
    handleChange(evt);
    const { name, value } = evt.target;
    if (name === 'email' && !DATE_REGEX.test(value)) {
      setIsValid(false);
      setErrors({
        ...errors,
        date: 'Введите дату в формате дд.мм.гггг',
      });
      console.log(errors);
    } else console.log(errors);
  };

  const handleTimeChange = (evt) => {
    handleChange(evt);
    const { name, value } = evt.target;
    if (name === 'email' && !TIME_REGEX.test(value)) {
      setIsValid(false);
      setErrors({
        ...errors,
        time: 'Введите время в формате 00:00',
      });
    }
  };

  const handleCheckboxChange = (evt) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.password !== values.passwordConfirmation) {
      setIsValid(false);
      setErrors({
        ...errors,
        passwordConfirmation: 'Необходимо заполнить все поля',
      });
    } else {
      onSubmit();
    }
  };

  return (
    <form
      className="registration-form"
      name="register"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="registration-form__fields">
        <RegistrationField
          name="email"
          placeholder="Электронная почта"
          type="email"
          handleChange={handleEmailChange}
          values={values}
          errors={errors}
        />
        <RegistrationField
          name="date"
          placeholder="Дата (например, 01.01.1990)"
          type="text"
          handleChange={handleDateChange}
          values={values}
          errors={errors}
        />
        <RegistrationField
          label="Телефон"
          name="phone-number"
          placeholder="Телефон"
          type="tel"
          handleChange={handlePhoneChange}
          values={values}
          errors={errors}
        />
        <RegistrationField
          name="time"
          placeholder="Время (например, 10:00)"
          type="text"
          handleChange={handleTimeChange}
          values={values}
          errors={errors}
        />
      </div>
      <DataProcessing
        id={'subscribe'}
        text={DATA_PROCESSING_TEXT}
        handleChange={handleCheckboxChange}
      />
      {responseMessage && (
        <p className="registration-form__input-error">{responseMessage}</p>
      )}

      <button
        type="submit"
        className={`registration-form__button ${
          !isValid ? 'registration-form__button_inactive' : 'link'
        }`}
        disabled={!isValid}
        // onSubmit={alert('Благодарим за подписку!' )}
      >
        {'Подписаться'}
      </button>
    </form>
  );
};

export default RegistrationForm;
