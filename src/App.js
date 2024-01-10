import React from 'react';
import {createStore} from 'redux';
import axios from 'axios';
import './App.css';

const reducer = function(state, action){
  console.log(action)
  if(action.type === "INC"){
    console.log("aqui incrementa");
    console.log(action.payload);
    return state + action.payload;
  }else if(action.type === "DESC"){
    console.log("aqui decrementa");
    console.log(action.payload);
    return state - action.payload;
  }else if(action.type === "RESET"){
    return 0;
  }else if(action.type === "info"){
    return action.title;
  }
  return state
}

const store = createStore(reducer, 0);

store.subscribe(function(){
  console.log("mudou o estado", store.getState());
})

store.dispatch({type:"INC", payload: 1});

axios.get('https://my-json-server.typicode.com/typicode/demo/posts').then((response)=>{
  console.log(response);
  store.dispatch({type:"info", title: response.data[0].title});
});

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {count:0};
  }

  increment = () =>{
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement = () =>{
    this.setState({
      count: this.state.count - 1
    });
  }

    render(){
      return (
        <>
          <button onClick={this.increment}>Incrementa</button>
          <button onClick={this.decrement}>Decrementa</button>
          <h2>{this.state.count}</h2>
        </>
      )
    }
}

export default App;