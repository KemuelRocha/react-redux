import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './Counter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const initialStates = {
  count: 50,
  title: 'Título inicial',
}

function reducer(state = initialStates, action) {
  return state;
}

const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
