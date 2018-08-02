import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import ClientsList from '../components/ClientsList';
import getClients from '../api';


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
    searchTerm: null,
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

  onChange = event => {
    this.setState({ searchTerm: event.target.value});
    this.onFetchData(this.state);
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
        <Header onChange={this.onChange} />

        <div className="container">
          <div id="mid-section">
            <div id="mid-head">
              <span className="clients-text">Clients</span>
              <span className="count">{this.state.pageInfo.size} of {this.state.pageInfo.totalCount} results</span>
            </div>

            <div id="mid-body">
              {this.clientElement()}
            </div>

            <div id="load-more">
              {this.buttonElement()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
