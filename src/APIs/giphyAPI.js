import axios from 'axios';

const giphyApi = search => {
  const api_key = 's9IrhhxtErPkYuvlJWRBNXv6WHQ6hZC0';
  const limit = 50;
  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${api_key}&limit=${limit}`;

  return axios.get(url);
};

export default giphyApi;
