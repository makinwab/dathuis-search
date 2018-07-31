import axios from 'axios';
import GET_CLIENTS from './clients';

const axiosSearchGraphql = axios.create({
  baseURL: 'http://localhost:4000/graphql',
});

const getClients = (data, cursor) => {
  const { name, origin } = data;

  return axiosSearchGraphql.post('', {
    query: GET_CLIENTS,
    variables: { name, origin, cursor }
  });
};

export default getClients;