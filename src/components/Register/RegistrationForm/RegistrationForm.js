import React, { useState } from 'react';
import './RegistrationForm.scss';
import RegistrationField from './RegistrationField/RegistrationField';
import {
    EMAIL_REGEX,
    DATA_PROCESSING_TEXT,
} from '../../../constants/constants';
import DataProcessing from './DataProcessing/DataProcessing';

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

    const handlePasswordChange = (evt) => {
        handleChange(evt);
        const { name } = evt.target;
        if (name === 'password' && evt.target.value.length < 2) {
            setIsValid(false);
            setErrors({
                ...errors,
                password: 'Пароль должен иметь не менее 2 символов',
            });
        }
    };

    const handlePasswordConfirmationChange = (evt) => {
        handleChange(evt);
        const { name, value } = evt.target;
        if (name === 'passwordConfirmation' && evt.target.value.length < 1) {
            setIsValid(false);
            setErrors({
                ...errors,
                passwordConfirmation: 'Необходимо повторно ввести пароль',
            });
        } else {
            setValues({ ...values, [name]: value });
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
            className='registration-form'
            name='register'
            onSubmit={handleSubmit}
            noValidate
        >
            <div className='registration-form__fields'>
                <RegistrationField
                    name='email'
                    placeholder='Электронная почта'
                    type='email'
                    handleChange={handleEmailChange}
                    values={values}
                    errors={errors}
                />
                <RegistrationField
                    name='date'
                    placeholder='Дата (например, 01.01.1990)'
                    type='text'
                    handleChange={handleEmailChange}
                    values={values}
                    errors={errors}
                />
                <RegistrationField
                    label='Пароль'
                    name='password'
                    placeholder='Телефон'
                    type='password'
                    handleChange={handlePasswordChange}
                    values={values}
                    errors={errors}
                    eye
                />
                <RegistrationField
                    label='Подтвердите пароль'
                    name='date'
                    placeholder='Дата (например, 01.01.1990)'
                    type='text'
                    handleChange={handlePasswordConfirmationChange}
                    values={values}
                    errors={errors}
                />
            </div>
            <DataProcessing
                text={DATA_PROCESSING_TEXT}
                handleChange={handleCheckboxChange}
            />
            {responseMessage && (
                <p className='registration-form__input-error'>
                    {responseMessage}
                </p>
            )}

            <button
                type='submit'
                className={`registration-form__button ${
                    !isValid ? 'registration-form__button_inactive' : 'link'
                }`}
                disabled={!isValid}
            >
                {'Подписаться'}
            </button>
        </form>
    );
};

export default RegistrationForm;
