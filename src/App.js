import React, { useState } from 'react';

import ClassComponent from './class-components';
import FunctionalComponent from './functional-components';

const componentTypes = {
  class: 'class',
  functional: 'functional',
};

const App = () => {
  const [activeComponent, setActiveComponent] = useState(componentTypes.class);

  return (
    <div className="uk-container uk-margin-top">
      <div className="uk-flex">
        <button
          onClick={() => setActiveComponent(componentTypes.class)}
          className={`uk-button uk-button-${(activeComponent === componentTypes.class) ? 'primary' : 'default'} uk-margin-small-right`}
        >
          Class Component
        </button>
        <button
          onClick={() => setActiveComponent(componentTypes.functional)}
          className={`uk-button uk-button-${(activeComponent === componentTypes.functional) ? 'primary' : 'default'}`}
        >
          Functional Component
        </button>
      </div>

      <div className="uk-margin-top">
        {
          activeComponent === componentTypes.class
            ? <ClassComponent />
            : <FunctionalComponent />
        }
      </div>
    </div>
  )
};

export default App;
