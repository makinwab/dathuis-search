import axios from 'axios';
import GET_CLIENTS from './clients';

const axiosSearchGraphql = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const getClients = (data, cursor) => {
  const { searchTerm } = data;

  return axiosSearchGraphql.post('', {
    query: GET_CLIENTS,
    variables: { searchTerm, cursor }
  });
};

export default getClients;