import React from 'react';

const RangeInput = ({ type, state, title, handleChange }) => {
  return (
    <>
      <label htmlFor={type}>{title}</label>
      <input
        type="range"
        name={type}
        value={state[type].slice(0, -1)}
        min="1"
        max="100"
        onChange={handleChange}
      ></input>
      <div>{state[type]}</div>
    </>
  );
};

export default RangeInput;
