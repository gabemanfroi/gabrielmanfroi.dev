import { Axios } from '@/core/utils/http';

const userService = () => {
  const getUser = async () => {
    return Axios.get('/gabriel-portfolio-users/1?populate=*');
  };

  return {
    getUser,
  };
};

export default userService();
