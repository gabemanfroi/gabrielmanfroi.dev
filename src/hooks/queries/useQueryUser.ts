import { useQuery } from 'react-query';
import { QUERIES } from '@/core/constants/queries';
import userService from '@/services/userService';
import { User } from '@/core/types/User';

const initialUser: User = {
  data: {
    attributes: {
      email: 'gabriel@gabrielmanfroi.dev',
      location: 'Porto, Portugal',
      name: 'Gabriel',
      role: 'Full Stack Software Engineer',
      profilePicture: {
        data: {
          attributes: {
            url: '/uploads/1690195024594_26aac7566c.jpeg',
          },
        },
      },
    },
  },
};

export const useQueryUser = () => {
  const { data: getUserByNameData, isLoading: getUserByNameLoading } =
    useQuery<User>(QUERIES.USERS.GET_USER, userService.getUser, {
      initialData: () => initialUser,
    });

  return {
    getUserByNameData: getUserByNameData ?? ({} as User),
    getUserByNameLoading,
  };
};
