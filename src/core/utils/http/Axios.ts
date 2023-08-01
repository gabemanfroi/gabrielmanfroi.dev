import axios from 'axios';

const axiosConfig = {
  baseURL: `http://${process.env.NEXT_PUBLIC_STRAPI_HOST}/api`,
  timeout: 5000, // Set the request timeout (in milliseconds)

  headers: {
    'Content-Type': 'application/json', // Replace with the desired content type
    // You can add other headers as needed, e.g. authorization token:
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN} `,
  },
};

export const Axios = axios.create(axiosConfig);
