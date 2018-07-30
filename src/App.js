import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClientsList from './components/ClientsList';

class App extends Component {
  state = {
    clients: ["client one", "client two"]
  };

  componentDidMount() {

  };

  render() {
    return (
      <div className="App">
        <form onSubmit>
          <label htmlFor="name">
            Search by full name
          </label>
          <input id="name" type="text" />

          <label htmlFor="origin">
            Search by origin
          </label>
          <input id="origin" type="text" />
          <button type="submit"> Search </button>
        </form>

        <hr />

        <ClientsList clients={this.state.clients} />
      </div>
    );
  }
}

export default App;
