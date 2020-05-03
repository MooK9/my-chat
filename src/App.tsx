import React, {Component} from 'react';
import './App.css';
import {Login} from "./login/Login";
import { proxy } from './proxy/proxy';
import { Main } from './components/Main';

export default class App extends Component
{
    state = { showLogin: true };

    componentDidMount()
    {
      proxy.addEventListener( "login", () => { this.setState( { showLogin: false } ) } );
    }
  
    render()
    {
      return (
        <div className="app">
          { this.state.showLogin ? <Login /> : <Main /> }
        </div>
      );
    }
  

}
