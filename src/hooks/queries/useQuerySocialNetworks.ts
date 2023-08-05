import { useQuery } from 'react-query';
import { QUERIES } from '@/core/constants/queries';
import { SocialNetworksRequestData } from '@/core/types/SocialNetwork';
import socialNetworkService from '@/services/socialNetworkService';

export const useQuerySocialNetworks = () => {
  const { data: getSocialNetworksData, isLoading: getSocialNetworkLoading } =
    useQuery<SocialNetworksRequestData>(
      QUERIES.USERS.GET_SOCIAL_NETWORKS,
      socialNetworkService.getSocialNetworks,
    );

  return {
    getSocialNetworksData:
      getSocialNetworksData ?? ({} as SocialNetworksRequestData),
    getSocialNetworkLoading,
  };
};
