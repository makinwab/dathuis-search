import React from 'react';

const ClientItem = ({ client }) => (
  <li className="client-item">
    <div className="client-photo" style={{ backgroundImage: `url(${client.photo})` }}></div>

    <div className="client-info">
      <p className="name">{client.first_name} {client.last_name}, <span className="gender">{client.gender}</span></p>
      <p className="origin">{client.origin}</p>
      <p className="email">{client.email}</p>
    </div>
  </li>
);

export default ClientItem;