import axios from "axios";
const baseUrl = "https://www.googleapis.com/books/v1/" // move to env file 
export default function ApiService({ method, url, config = {} }) {
  return axios({
    method,
    url: `${baseUrl}${url}`,
    data: {
      ...config.data,
    },
    params: {
      ...config.params,
    },

  });
}
