import { Grid, Stack } from '@mui/material';
import { GitHub, Instagram, Language, LinkedIn } from '@mui/icons-material';
import React from 'react';

export const SocialNetworks = () => {
  return <Grid item>
    <Stack direction={'row'} gap={1} justifyContent={'center'}>
      <Stack
        justifyContent={'center'}
        alignItems={'center'}
        height={50}
        width={50}
        borderRadius={'50%'}
        border='2px solid #565656'
      >
        <LinkedIn style={{ color: '#999999' }} />
      </Stack>
      <Stack
        justifyContent={'center'}
        alignItems={'center'}
        height={50}
        width={50}
        borderRadius={'50%'}
        border='2px solid #565656'
      >
        <Instagram style={{ color: '#999999' }} />
      </Stack>
      <Stack
        justifyContent={'center'}
        alignItems={'center'}
        height={50}
        width={50}
        borderRadius={'50%'}
        border='2px solid #565656'
      >
        <Language style={{ color: '#999999' }} />
      </Stack>
      <Stack
        justifyContent={'center'}
        alignItems={'center'}
        height={50}
        width={50}
        borderRadius={'50%'}
        border='2px solid #565656'
      >
        <GitHub style={{ color: '#999999' }} />
      </Stack>
    </Stack>
  </Grid>;
};