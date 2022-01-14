import axios from "axios";
export default function ApiService({ method, url, config = {} }) {
  return axios({
    method,
    url,
    data: {
      ...config.data,
    },
    params: {
      ...config.params,
    },

  });
}
