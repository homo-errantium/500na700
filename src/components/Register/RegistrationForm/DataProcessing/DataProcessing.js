import React from 'react';
import './DataProcessing.sass';

const DataProcessing = ({ handleChange, id }) => (
  <label className="data-processing__checkbox-label" htmlFor={id}>
    <input
      name="dataProcessing"
      type="checkbox"
      id={id}
      className="data-processing__checkbox"
      onClick={handleChange}
      required
    />
    <span className="data-processing__checkbox-text">
      Я согласен (-а) на обработку персональных данных
    </span>
  </label>
);

export default DataProcessing;
