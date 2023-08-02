import axios from 'axios';

const axiosConfig = {
  baseURL: `${process.env.NEXT_PUBLIC_STRAPI_HOST}/api`,
  timeout: 5000, // Set the request timeout (in milliseconds)

  headers: {
    'Content-Type': 'application/json', // Replace with the desired content type
    // You can add other headers as needed, e.g. authorization token:
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN} `,
  },
};

const AxiosInstance = axios.create(axiosConfig);

AxiosInstance.interceptors.response.use(
  ({ data }) => {
    // Process successful responses before they are passed to the calling code
    return data;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  },
);

export const Axios = AxiosInstance;
