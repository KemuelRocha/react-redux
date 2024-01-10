import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios';
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
  if (action.type === 'INCREMENT') {
    return {
      count: state.count + 1,
      title: state.title
    }
  }else if(action.type === 'ALTERAR_TITULO'){
    axios.get('https://my-json-server.typicode.com/typicode/demo/posts').then(response => {
      store.dispatch({type: 'ALTERAR_TITULO_FINAL', title: response.data[0].title});
    })
  }else if(action.type === 'ALTERAR_TITULO_FINAL'){
    return {
      count: state.count,
      title: action.title
    }
  }
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
