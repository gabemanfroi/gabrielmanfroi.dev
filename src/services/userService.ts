import { Axios } from '@/core/utils/http';

const userService = () => {
  const getUserByName = async (name: string) => {
    return Axios.get('/public-users');
  };

  return {
    getUserByName,
  };
};

export default userService();
