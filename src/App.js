import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from './NavigationBar';
import Dashboard from './Dashboard';


class App extends Component {
  render () {
    return (<div className="App" >
      <NavBar />
      <div className="container"> 
      <div class="input-group rounded">
        <input type="search" class="form-control rounded" placeholder="Digite aqui sua busca..." aria-label="Search"
          aria-describedby="search-addon" />
      </div>
        <Dashboard/>   
      </div>
    </div>
    );
  }
}

export default App;
