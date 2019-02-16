import React, { useState } from 'react';

const FunctionalComponent = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <div>
        Hi, I am the functional component.
      </div>

      <div>
        <input
          type="number"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button>Update!</button>
      </div>
    </div>
  );
};

export default FunctionalComponent;
