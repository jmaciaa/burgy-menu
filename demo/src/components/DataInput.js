import React from 'react';

const DataInput = ({ elements, type, handleInputChange }) => {
  return (
    <div className="form-section">
      <h4>Add your {type}s</h4>
      {elements.map((element, i) => {
        return (
          <>
            <label htmlFor={`${type}${i}`}></label>
            <input
              key={`${type}${i}`}
              type="text"
              name={i}
              id={`${type}${i}`}
              value={element}
              onChange={e => handleInputChange(e, type)}
            />
          </>
        );
      })}
    </div>
  );
};

export default DataInput;
