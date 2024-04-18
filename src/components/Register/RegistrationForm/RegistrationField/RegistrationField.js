import React from 'react';
import './RegistrationField.scss';

const RegistrationField = ({
    name,
    placeholder,
    type,
    errors,
    handleChange,
    values,
    eye,
    isOpen,
}) => {
    const inputReference = React.createRef();

    return (
        <div className='registration-field'>
            <input
                className={`registration-field__input ${
                    isOpen && 'registration-field__input_popup'
                }`}
                name={name}
                type={type}
                placeholder={placeholder}
                required
                onChange={handleChange}
                value={values[name] || ''}
                ref={inputReference}
            />

            {errors && (
                <span className='registration-field__input-error'>
                    {errors[name]}
                </span>
            )}
        </div>
    );
};

export default RegistrationField;
