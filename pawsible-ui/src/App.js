import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pets: [],
    };
  }
  componentDidMount(){
    fetch('https://localhost:44386/api/pets')
    .then(response => response.json())
    .then(json => this.setState({pets: json}));
  }
  render() {
    return (
      <div className="App">
        <Home pets={this.state.pets}/>
      </div>
    );
  }
}

export default App;
