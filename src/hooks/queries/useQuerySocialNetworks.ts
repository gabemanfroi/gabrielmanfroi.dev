import { useQuery } from 'react-query';
import { QUERIES } from '@/core/constants/queries';
import userService from '@/services/userService';
import { SocialNetworksRequestData } from '@/core/types/SocialNetwork';

export const useQuerySocialNetworks = () => {
  const { data: getSocialNetworksData, isLoading: getSocialNetworkLoading } =
    useQuery<SocialNetworksRequestData>(
      QUERIES.USERS.GET_SOCIAL_NETWORKS,
      userService.getSocialNetworks,
    );

  return {
    getSocialNetworksData:
      getSocialNetworksData ?? ({} as SocialNetworksRequestData),
    getSocialNetworkLoading,
  };
};
