import React from 'react';

import ClassComponent from './class-components';
import FunctionalComponent from './functional-components';

const borderStyle = {
  borderRight: '1px solid rgba(0, 0, 0, 0.12)',
  height: '100vh',
};

const App = () => (
  <div className="uk-container">
    <div className="uk-grid">
      <div className="uk-width-1-2" style={borderStyle}>
        <ClassComponent />
      </div>
      <div className="uk-width-1-2">
        <FunctionalComponent />
      </div>
    </div>
  </div>
);

export default App;
