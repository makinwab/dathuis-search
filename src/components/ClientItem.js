import React from 'react';

const ClientItem = ({ client }) => (
  <li>
    <img src={client.photo} alt="client" />
    <p>Full Name: {client.first_name} {client.last_name}</p>
    <p>Origin: {client.origin}</p>
    <p>Email: {client.email}</p>
    <p>Gender: {client.gender}</p>
  </li>
);

export default ClientItem;