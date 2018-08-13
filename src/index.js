import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/App';
import './style/style.scss'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
