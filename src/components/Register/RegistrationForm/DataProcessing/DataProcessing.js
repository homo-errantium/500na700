import React from 'react';
import './DataProcessing.scss';

const DataProcessing = ({ handleChange }) => (
    <label className='data-processing__checkbox-label' htmlFor='dataProcessing'>
        <input
            name='dataProcessing'
            type='checkbox'
            id='dataProcessing'
            className='data-processing__checkbox'
            onClick={handleChange}
            required
        />
        <span className='data-processing__checkbox-text'>
            Я согласен (-а) на обработку персональных данных
        </span>
    </label>
);

export default DataProcessing;
