import { Stack, Typography } from '@mui/material';
import { useQuerySocialNetworks } from '@/hooks/queries/useQuerySocialNetworks';
import { SocialNetworksItem } from '@/components/LeftSideBar/SocialNetworks/SocialNetworks.item';
import React from 'react';
import { GitHub, Language, LinkedIn, Twitter } from '@mui/icons-material';

const ICON_BY_CATEGORY = {
  github: GitHub,
  linkedin: LinkedIn,
  blog: Language,
  twitter: Twitter,
};

export const RightSidebarDialogSocialNetworks = () => {
  const { getSocialNetworksData, getSocialNetworkLoading } =
    useQuerySocialNetworks();

  if (getSocialNetworkLoading) return <></>;
  return (
    <Stack gap={1}>
      <Typography color={'#999'}>Social</Typography>
      <Stack direction="row">
        {getSocialNetworksData.data.map((s) => (
          <SocialNetworksItem
            renderBorder={false}
            key={s.attributes.url}
            url={s.attributes.url}
            icon={ICON_BY_CATEGORY[s.attributes.category]}
          />
        ))}
      </Stack>
    </Stack>
  );
};
