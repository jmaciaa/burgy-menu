import React from 'react';

const LinksInput = ({ elements, type, handleInputChange }) => {
  return (
    <div className="form-section">
      <h2>{type}s Input</h2>
      {elements.map((element, i) => {
        return (
          <label>
            {type} {i + 1}
            <input
              key={`${type}${i}`}
              type="text"
              name={i}
              id={`${type}${i}`}
              value={element}
              onChange={e => handleInputChange(e, type)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default LinksInput;
