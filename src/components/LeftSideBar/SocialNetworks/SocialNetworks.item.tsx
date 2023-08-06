import { IconButton, Stack, SvgIconTypeMap } from '@mui/material';
import React from 'react';
import { OverridableComponent } from '@mui/types';
import Link from 'next/link';
import { colors } from '@/core/theme/colors';

interface Props {
  url: string;
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  renderBorder: boolean;
}

export const SocialNetworksItem = ({ url, icon, renderBorder }: Props) => {
  const IconComponent = icon;
  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      <Link href={url} target="_blank">
        <IconButton
          sx={{
            border: renderBorder ? `2px solid ${colors.gray.dark}` : '',
            color: '#999999',
            transition: 'all ease-in-out 0.2s',
            '&:hover': {
              color: colors.primary,
              borderColor: colors.primary,
            },
          }}
        >
          <IconComponent />
        </IconButton>
      </Link>
    </Stack>
  );
};
