import { Grid } from '@mui/material';
import { GitHub, Language, LinkedIn, Twitter } from '@mui/icons-material';
import React from 'react';
import { useQuerySocialNetworks } from '@/hooks/queries/useQuerySocialNetworks';
import { SocialNetworksItem } from '@/components/LeftSideBar/SocialNetworks.item';

const ICON_BY_CATEGORY = {
  github: GitHub,
  linkedin: LinkedIn,
  blog: Language,
  twitter: Twitter,
};

export const SocialNetworks = () => {
  const { getSocialNetworksData, getSocialNetworkLoading } =
    useQuerySocialNetworks();

  if (getSocialNetworkLoading) return <></>;
  return (
    <Grid item container direction={'row'} justifyContent={'space-around'}>
      {getSocialNetworksData.data.map((s) => (
        <SocialNetworksItem
          key={s.attributes.url}
          url={s.attributes.url}
          icon={ICON_BY_CATEGORY[s.attributes.category]}
        />
      ))}
    </Grid>
  );
};
