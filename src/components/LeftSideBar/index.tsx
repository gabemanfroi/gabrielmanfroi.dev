import { Grid } from '@mui/material';
import React from 'react';
import { Header } from '@/components/LeftSideBar/Header';
import { ProfilePicture } from '@/components/LeftSideBar/ProfilePicture';
import { EmailAndLocation } from '@/components/LeftSideBar/EmailAndLocation';
import { SocialNetworks } from '@/components/LeftSideBar/SocialNetworks';
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
      p={6}
    >
      <Grid
        flex={1}
        direction={'column'}
        gap={2}
        item
        container
        justifyContent={'space-evenly'}
      >
        <Header />
        <ProfilePicture />
        <EmailAndLocation />
        <Reserved />
        <SocialNetworks />
        <ContactButton />
      </Grid>
    </Grid>
  );
};
