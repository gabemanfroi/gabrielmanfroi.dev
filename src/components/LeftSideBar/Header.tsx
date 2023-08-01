import { Grid, Typography } from '@mui/material';
import React from 'react';

export const Header = () => {
  return <Grid
    xs={1}
    item
    container
    direction={'row'}
    justifyContent={'space-between'}
  >
    <Grid xs={7}>
      <Typography color={'white'} fontSize={36}>
        Gabriel
      </Typography>
    </Grid>
    <Grid xs={5}>
      <Typography color={'white'} fontSize={14} textAlign={'right'}>
        FullStack Software Engineer
      </Typography>
    </Grid>
  </Grid>;
};