import { Grid, SvgIconTypeMap, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/types';
import React from 'react';

interface Props {
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  title: string;
  children: React.ReactNode;
  width?: number;
}

export const SectionHeader = ({ children, icon, title, width }: Props) => {
  const IconComponent = icon;
  return (
    <Grid item container gap={5}>
      <Grid
        container
        item
        alignItems={'center'}
        justifyContent={'space-evenly'}
        direction={'row'}
        maxWidth={width ?? { xs: '50%', md: '25%' }}
        sx={{
          padding: '9px 20px',
          opacity: 1,
          transform: 'translate(0px, 0px)',
        }}
        borderRadius={999}
        border={'1px solid #565656'}
      >
        <IconComponent sx={{ fontSize: '14px', color: 'white' }} />
        <Typography
          fontWeight={300}
          textTransform={'uppercase'}
          color={'white'}
          fontSize={12}
        >
          {title}
        </Typography>
      </Grid>
      {children}
    </Grid>
  );
};
