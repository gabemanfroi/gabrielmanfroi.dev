import { Button, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import {
  EmailOutlined,
  GitHub,
  Instagram,
  Language,
  LinkedIn,
} from '@mui/icons-material';
import React from 'react';

export const LeftSideBar = () => {
  return (
    <Grid
      item
      container
      width={'100%'}
      borderRadius={8}
      style={{ border: '1px solid #565656' }}
      p={6}
    >
      <Grid
        flex={1}
        direction={'column'}
        gap={3}
        item
        container
        justifyContent={'space-evenly'}
      >
        <Grid
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
        </Grid>
        <Grid item xs={5} maxHeight={'300px'}>
          <Image
            src={'https://wpriverthemes.com/HTML/drake/assets/images/me.jpg'}
            alt={'something'}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', borderRadius: '30px' }} // optional
          />
        </Grid>
        <Grid item>
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
        </Grid>
        <Grid item>
          <Typography fontSize={14} textAlign={'center'}>
            © 2022 Drake. All Rights Reserved
          </Typography>
        </Grid>
        <Grid item>
          <Stack direction={'row'} gap={1} justifyContent={'center'}>
            <Stack
              justifyContent={'center'}
              alignItems={'center'}
              height={50}
              width={50}
              borderRadius={'50%'}
              border="2px solid #565656"
            >
              <LinkedIn style={{ color: '#999999' }} />
            </Stack>
            <Stack
              justifyContent={'center'}
              alignItems={'center'}
              height={50}
              width={50}
              borderRadius={'50%'}
              border="2px solid #565656"
            >
              <Instagram style={{ color: '#999999' }} />
            </Stack>
            <Stack
              justifyContent={'center'}
              alignItems={'center'}
              height={50}
              width={50}
              borderRadius={'50%'}
              border="2px solid #565656"
            >
              <Language style={{ color: '#999999' }} />
            </Stack>
            <Stack
              justifyContent={'center'}
              alignItems={'center'}
              height={50}
              width={50}
              borderRadius={'50%'}
              border="2px solid #565656"
            >
              <GitHub style={{ color: '#999999' }} />
            </Stack>
          </Stack>
        </Grid>
        <Grid item>
          <Button
            style={{
              color: 'black',
              padding: '11px 58px',
              background: '#28e98c',
              width: '100%',
              borderRadius: '99999999px',
              display: 'flex',
              gap: '8px',
            }}
          >
            <EmailOutlined />
            <Typography>Contact me!</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
