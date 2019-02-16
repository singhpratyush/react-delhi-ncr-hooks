import React, { useState } from 'react';

import { updateValue } from '../firebaseUtils';

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
        <button
          onClick={() => {
            updateValue(inputValue);
            setInputValue('');
          }}
        >
          Update!
        </button>
      </div>
    </div>
  );
};

export default FunctionalComponent;
