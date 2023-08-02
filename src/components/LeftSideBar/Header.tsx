import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useQueryUser } from '@/hooks/queries/useQueryUser';

export const Header = () => {
  const { getUserByNameData, getUserByNameLoading } = useQueryUser();

  if (getUserByNameLoading) return <></>;

  return (
    <Grid
      xs={1}
      item
      container
      direction={'row'}
      justifyContent={'space-between'}
    >
      <Grid xs={7}>
        <Typography color={'white'} fontSize={36}>
          {getUserByNameData.data.attributes.name}
        </Typography>
      </Grid>
      <Grid xs={5}>
        <Typography color={'white'} fontSize={14} textAlign={'right'}>
          {getUserByNameData.data.attributes.role}
        </Typography>
      </Grid>
    </Grid>
  );
};
