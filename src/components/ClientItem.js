import React from 'react';

const ClientItem = ({ client }) => (
  <li>
    {client.first_name} {client.last_name} - {client.origin}
  </li>
);

export default ClientItem;