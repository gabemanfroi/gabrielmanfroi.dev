import { useQuery } from 'react-query';
import { QUERIES } from '@/core/constants/queries';
import { SocialNetworksRequestData } from '@/core/types/SocialNetwork';
import socialNetworkService from '@/services/socialNetworkService';

const initialSocialNetworks: SocialNetworksRequestData = {
  data: [
    {
      id: 1,
      attributes: {
        category: 'blog',
        url: 'https://thecodingcompass.com',
      },
    },
    {
      id: 2,
      attributes: {
        category: 'github',
        url: 'https://github.com/gabemanfroi',
      },
    },
    {
      id: 3,
      attributes: {
        category: 'twitter',
        url: 'https://twitter.com/gabemanfroi',
      },
    },
    {
      id: 4,
      attributes: {
        category: 'linkedin',
        url: 'https://linkedin.com/in/gabriel-manfroi',
      },
    },
  ],
};

export const useQuerySocialNetworks = () => {
  const { data: getSocialNetworksData, isLoading: getSocialNetworkLoading } =
    useQuery<SocialNetworksRequestData>(
      QUERIES.USERS.GET_SOCIAL_NETWORKS,
      socialNetworkService.getSocialNetworks,
      {
        initialData: () => initialSocialNetworks,
      },
    );

  return {
    getSocialNetworksData:
      getSocialNetworksData ?? ({} as SocialNetworksRequestData),
    getSocialNetworkLoading,
  };
};
