import { Grid } from '@mui/material';
import React from 'react';
import { Header } from '@/components/LeftSideBar/Header';
import { ProfilePicture } from '@/components/LeftSideBar/ProfilePicture';
import { EmailAndLocation } from '@/components/LeftSideBar/EmailAndLocation';
import { SocialNetworks } from '@/components/LeftSideBar/SocialNetworks/SocialNetworks';
import { ContactButton } from '@/components/LeftSideBar/ContactButton';
import { Reserved } from '@/components/LeftSideBar/Reserved';

export const LeftSideBar = () => {
  return (
    <Grid
      item
      container
      width={'100%'}
      borderRadius={8}
      style={{ border: '1px solid #565656' }}
      p={{ xs: 5 }}
    >
      <Grid
        flex={1}
        direction={'column'}
        item
        container
        justifyContent={'space-between'}
      >
        <Grid
          item
          container
          direction={'column'}
          justifyContent={'space-between'}
          gap={2}
        >
          <Header />
          <ProfilePicture />
        </Grid>
        <Grid
          item
          container
          direction={'column'}
          justifyContent={'space-between'}
          flex={1}
          gap={4}
        >
          <EmailAndLocation />
          <Reserved />
          <SocialNetworks />
          <ContactButton />
        </Grid>
      </Grid>
    </Grid>
  );
};
