import { useQuery } from 'react-query';
import { QUERIES } from '@/core/constants/queries';
import userService from '@/services/userService';
import { User } from '@/core/types/User';

export const useQueryUser = () => {
  const { data: getUserByNameData, isLoading: getUserByNameLoading } =
    useQuery<User>(QUERIES.USERS.GET_USER, userService.getUser);

  return {
    getUserByNameData: getUserByNameData ?? ({} as User),
    getUserByNameLoading,
  };
};
