import axios from 'axios';

/**
 * Create a new Axios client instance
 * @see https://github.com/mzabriskie/axios#creating-an-instance
 */
const getClient = (baseUrl = null) => {
  const options = {
    baseURL: baseUrl,
  };

  const client = axios.create(options);

  // Add a request interceptor
  client.interceptors.request.use(
    (requestConfig) => requestConfig,
    (requestError) => Promise.reject(requestError),
  );

  // Add a response interceptor
  client.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
  );

  return client;
};

class ApiClient {
  static get(url, conf = {}) {
    return getClient(null).get(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  static delete(url, conf = {}) {
    return getClient(null).delete(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  static head(url, conf = {}) {
    return getClient(null).head(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  static options(url, conf = {}) {
    return getClient(null).options(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  static post(url, data = {}, conf = {}) {
    return getClient(null).post(url, data, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  static put(url, data = {}, conf = {}) {
    return getClient(null).put(url, data, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  static patch(url, data = {}, conf = {}) {
    return getClient(null).patch(url, data, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  static getCancelToken() {
    return axios.CancelToken.source();
  }

  static axiosInstance() {
    return axios;
  }
}

export default ApiClient;
