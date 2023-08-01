import { Grid, Typography } from '@mui/material';
import React from 'react';

export const EmailAndLocation = () => {
  return <Grid item>
    <Typography
      color={'white'}
      fontWeight={300}
      fontSize={24}
      textAlign={'center'}
    >
      gabriel@gabrielmanfroi.dev
    </Typography>
    <Typography
      color={'white'}
      fontWeight={300}
      fontSize={24}
      textAlign={'center'}
    >
      Porto, Portugal
    </Typography>
  </Grid>;
};