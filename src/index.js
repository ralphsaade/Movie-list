import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { StateProvider } from './State'
ReactDOM.render(<React.StrictMode>
    <StateProvider>
    <App />
    </StateProvider>
  </React.StrictMode>, 
    document.getElementById('root'));
registerServiceWorker();
