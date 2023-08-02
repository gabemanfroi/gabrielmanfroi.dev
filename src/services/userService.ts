import { Axios } from '@/core/utils/http';

const userService = () => {
  const getUser = async () => {
    return Axios.get('/gabriel-portfolio-users/1?populate=*');
  };

  const getSocialNetworks = async () =>
    Axios.get('/gabriel-portfolio-social-networks');

  return {
    getUser,
    getSocialNetworks,
  };
};

export default userService();
