/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { mainReducer } from './graphing/Redux/index';
import './graphing/index.css';
import App from './graphing/App';
import registerServiceWorker from './graphing/registerServiceWorker';

const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
    serialize: {
        options: {
            undefined: true,
            function: function(fn) { return fn.toString() }
        }
    }
}));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
