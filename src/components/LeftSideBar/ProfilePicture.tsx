import Image from 'next/image';
import { Grid } from '@mui/material';
import React from 'react';

export const ProfilePicture = () => {
  return <Grid item xs={5} maxHeight={'300px'}>
    <Image
      src={'https://wpriverthemes.com/HTML/drake/assets/images/me.jpg'}
      alt={'something'}
      width={0}
      height={0}
      sizes='100vw'
      style={{ width: '100%', height: 'auto', borderRadius: '30px' }} // optional
    />
  </Grid>;
};