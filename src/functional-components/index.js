import React, { useState, useContext } from 'react';

import { updateValue } from '../firebaseUtils';
import StyleContext from '../StyleContext';

const FunctionalComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const myStyleClass = useContext(StyleContext);

  return (
    <div className={myStyleClass}>
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
