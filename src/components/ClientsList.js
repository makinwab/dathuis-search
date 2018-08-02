import React from 'react';
import ClientItem from './ClientItem';

const ClientsList = ({ clients }) => (
  <div id="clients-list">
    <ul>
      {clients.map((client, key) => <ClientItem key={key} client={client} />)}
    </ul>
  </div>
);

export default ClientsList;