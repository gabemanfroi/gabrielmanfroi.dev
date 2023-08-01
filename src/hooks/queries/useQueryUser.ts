import { useQuery } from 'react-query';
import { QUERIES } from '@/core/constants/queries';
import userService from '@/services/userService';

export const useQueryUser = () => {
  const {
    data: getUserByNameData,
    error,
    isLoading: getUserByNameLoading,
  } = useQuery(QUERIES.USERS.GET_USER_BY_NAME, () =>
    userService.getUserByName(''),
  );
  console.log({ error });

  return {
    getUserByNameData: getUserByNameData ?? {},
    getUserByNameLoading,
  };
};
