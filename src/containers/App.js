import React, { Component } from 'react';
import './App.css';
import ClientsList from '../components/ClientsList';
import getClients from '../api/index';


const resolveClientsQuery = (queryResult, cursor) => state => {
  const { edges, pageInfo } = queryResult.data.clients;

  if (!cursor) {
    return {
      clients: edges,
      pageInfo,
      errors: queryResult.data.errors,
    };
  }

  const updatedClientLists = [...state.clients, ...edges];

  return {
    clients: updatedClientLists,
    pageInfo,
    errors: queryResult.data.errors,
  };
};

class App extends Component {
  state = {
    clients: [],
    pageInfo: { hasNextPage: false },
    errors: null,
    name: undefined,
    origin: undefined,
  };

  componentDidMount() {
    this.onFetchData(this.state);
  }

  onFetchData = (data, cursor) => {
    getClients(data, cursor)
      .then(result => {
        this.setState(resolveClientsQuery(
          result.data,
          cursor
        ));
      })
      .catch(error => console.error("Error occurred", error));
  }

  onSubmit = event => {
    event.preventDefault();
    this.onFetchData(this.state);
  }

  onChangeName = event => {
    this.setState({ name: event.target.value})
  }

  onChangeOrigin = event => {
    this.setState({ origin: event.target.value})
  }

  onFetchMoreClients = () => {
    const { cursor } = this.state.pageInfo;

    this.onFetchData(this.state, cursor);
  };

  clientElement = () => {
    if (this.state.clients.length > 0) {
      return <ClientsList clients={this.state.clients} />;
    }
    
    return "No Client Information...";
  }

  buttonElement = () => {
    if (this.state.pageInfo.hasNextPage) {
      return <button onClick={this.onFetchMoreClients}>Load More</button>
    }
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

        
        {this.clientElement()}
        
        {this.buttonElement()}
      </div>
    );
  }
}

export default App;
