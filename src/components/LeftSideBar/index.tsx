import { Grid } from '@mui/material';
import React from 'react';
import { Header } from '@/components/LeftSideBar/Header';
import { ProfilePicture } from '@/components/LeftSideBar/ProfilePicture';
import { EmailAndLocation } from '@/components/LeftSideBar/EmailAndLocation';
import { SocialNetworks } from '@/components/LeftSideBar/SocialNetworks/SocialNetworks';
import { ContactButton } from '@/components/LeftSideBar/ContactButton';
import { Reserved } from '@/components/LeftSideBar/Reserved';
import { animated, useSpring } from '@react-spring/web';

export const LeftSideBar = () => {
  const AnimatedGrid = animated(Grid);

  const styles = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 500,
    },
  });

  return (
    <AnimatedGrid
      style={styles}
      item
      container
      width={'100%'}
      borderRadius={8}
      zIndex={2}
      sx={{ border: '1px solid #565656' }}
      p={{ xs: 5 }}
    >
      <Grid
        zIndex={2}
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
    </AnimatedGrid>
  );
};
