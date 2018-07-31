import React, { Component } from 'react';
import './App.css';
import ClientsList from '../components/ClientsList';
import getClients from '../api/index';


const resolveClientsQuery = (queryResult) => {
  const { edges, pageInfo } = queryResult.data.clients;

  return {
    clients: edges,
    pageInfo: pageInfo,
    errors: queryResult.data.errors,
  };
};

class App extends Component {
  state = {
    clients: [],
    pageInfo: null,
    errors: null,
    name: undefined,
    origin: undefined,
    limit: 10,
    endCursor: undefined,
  };

  componentDidMount() {
    this.onFetchData();
  };

  onFetchData = () => {
    getClients(this.state)
      .then(result => {
        this.setState(resolveClientsQuery(
          result.data
        ));
      })
      .catch(error => {
        console.error("Error occurred", error);
      });
  };

  onSubmit = event => {
    event.preventDefault();
    this.onFetchData();
  }

  onChangeName = event => {
    this.setState({ name: event.target.value})
  }

  onChangeOrigin = event => {
    this.setState({ origin: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <label htmlFor="name">
            Search by full name
          </label>
          <input
            id="name"
            type="text"
            onChange={this.onChangeName}
          />

          <label htmlFor="origin">
            Search by origin
          </label>
          <input
            id="origin"
            type="text"
            onChange={this.onChangeOrigin}
          />
          <button type="submit"> Search </button>
        </form>

        <hr />

        <ClientsList clients={this.state.clients} />
      </div>
    );
  }
}

export default App;
