import React, { useState, useContext, useEffect } from 'react';

import { updateValue, getCountRef } from '../firebaseUtils';
import StyleContext from '../StyleContext';

const FunctionalComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const myStyleClass = useContext(StyleContext);

  const [valueObj, setValueObj] = useState({
    value: '',
    time: '',
  });

  useEffect(
    () => {
      const firebaseListener = getCountRef()
        .onSnapshot((doc) => {
          const value = doc.data();
          setValueObj(value);
        })
      return () => firebaseListener();
    },
  );

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
      <div>
        <h2>{valueObj.value}</h2>
        <h3>{valueObj.time}</h3>
      </div>
    </div>
  );
};

export default FunctionalComponent;
