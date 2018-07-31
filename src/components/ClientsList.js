import React from 'react';
import ClientItem from './ClientItem';

const ClientsList = ({ clients }) => (
  <div>
    <ul>
      {clients.map((client, key) => <ClientItem key={key} client={client} />)}
    </ul>
  </div>
);

export default ClientsList;