// react
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import MenuOpenCloseApp from './reducer';

// component
import App from './App';

// css
import './css/reset.css';
import './css/class.css';

const store = createStore(MenuOpenCloseApp);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
