import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useQueryUser } from '@/hooks/queries/useQueryUser';

export const EmailAndLocation = () => {
  const { getUserByNameData, getUserByNameLoading } = useQueryUser();

  if (getUserByNameLoading) return <></>;

  return (
    <Grid item>
      <Typography
        color={'white'}
        fontWeight={300}
        fontSize={24}
        textAlign={'center'}
      >
        {getUserByNameData.data.attributes.email}
      </Typography>
      <Typography
        color={'white'}
        fontWeight={300}
        fontSize={24}
        textAlign={'center'}
      >
        {getUserByNameData.data.attributes.location}
      </Typography>
    </Grid>
  );
};
