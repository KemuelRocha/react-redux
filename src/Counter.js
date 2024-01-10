import React from 'react';
import { connect } from 'react-redux';
import './App.css';

class Counter extends React.Component{
  
  increment = () =>{
    //TODO: Chamar função para incrementar no próprio redux
    this.props.dispatch({ type: 'INCREMENT', 'count': 10 });
  }

  alterarTitulo = () =>{
    //TODO: Chamar função para alterar o título no redux
  }

    render(){
      return (
        <>
          <button onClick={this.alterarTitulo}>Alterar título!</button>
          <button onClick={this.increment}>Incrementa</button>
          <h2>{this.props.count}</h2>
          <h3>{this.props.title}</h3>
        </>
      )
    }
}

const mapStateToProps = state => ({count:state.count, title:state.title});

export default connect(mapStateToProps)(Counter);