import { Axios } from '@/core/utils/http';

const socialNetworkService = () => {
  const getSocialNetworks = async () =>
    Axios.get('/gabriel-portfolio-social-networks');

  return {
    getSocialNetworks,
  };
};

export default socialNetworkService();
