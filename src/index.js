import React from 'react';
import ReactDOM from 'react-dom';
import 'uikit/dist/css/uikit.min.css';

import { init } from './firebaseUtils';
import App from './App';
import * as serviceWorker from './serviceWorker';
import StyleContext from './StyleContext';
import styles from './styles.module.css';

console.log(styles);

init();

ReactDOM.render(
  <StyleContext.Provider value={styles.class}>
    <App />
  </StyleContext.Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
