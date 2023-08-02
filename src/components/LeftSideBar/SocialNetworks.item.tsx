import { IconButton, Stack, SvgIconTypeMap } from '@mui/material';
import React from 'react';
import { OverridableComponent } from '@mui/types';
import Link from 'next/link';
import { colors } from '@/core/theme/colors';

export const SocialNetworksItem = ({
  url,
  icon,
}: {
  url: string;
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
}) => {
  const IconComponent = icon;
  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      <Link href={url} target="_blank">
        <IconButton
          sx={{
            border: `2px solid ${colors.gray.dark}`,
            color: '#999999',
            '&:hover': {
              color: colors.primary,
              borderColor: colors.primary,
              transition: 'all ease-in-out 0.2s',
            },
          }}
        >
          <IconComponent />
        </IconButton>
      </Link>
    </Stack>
  );
};
