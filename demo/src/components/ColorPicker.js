import React from 'react';

const ColorPicker = ({ state, type, handleChange }) => {
  return (
    <div className="colors-box">
      <label htmlFor={type}>
        <h4>{type}</h4>
      </label>
      <div className="color-picker-circle">
        <input type="color" name={type} value={state[type]} onChange={handleChange} />
        <input type="text" name={type} value={state[type]} onChange={handleChange} />
      </div>
    </div>
  );
};

export default ColorPicker;
