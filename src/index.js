import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppAddPerson from './AppAddPerson'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<AppAddPerson />, document.getElementById('add-person'));
registerServiceWorker();
