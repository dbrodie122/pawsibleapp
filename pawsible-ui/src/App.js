import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
    this.getPets = this.getPets.bind(this);
  }
  componentDidMount() {
    this.getPets();
  }

  getPets() {
    fetch("https://localhost:44386/api/pets")
      .then(response => response.json())
      .then(json => this.setState({ pets: json }));
  }

  render() {
    return (
      <div className="App">
        <Home pets={this.state.pets} getPets={this.getPets} />
      </div>
    );
  }
}

export default App;
