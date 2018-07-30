import React, { Component } from 'react';
import ClientItem from './ClientItem';

const ClientsList = ({ clients }) => (
  <div>
    <ul>
      {clients.map(client => <ClientItem client={client} />)}
    </ul>
  </div>
);

export default ClientsList;