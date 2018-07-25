// REACT
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import 'bulma/css/bulma.min.css';
import './css/main.css';
import './css/linearicons.css';
import './css/customicons.css';

// JS
import './lib/main.js';

// COMPONENTS
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ==========

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
