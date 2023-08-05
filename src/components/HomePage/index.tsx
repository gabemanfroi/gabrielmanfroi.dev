import { Grid } from '@mui/material';
import { LeftSideBar } from '@/components/LeftSideBar';
import { MainContent } from '@/components/MainContent';

export const HomePage = () => {
  return (
    <Grid
      container
      px={{ xs: 0, md: 3 }}
      py={{ xs: 0, md: 12 }}
      gap={{ xs: 7, md: 30 }}
      height={'100%'}
      overflow={{ xs: 'scroll', md: 'hidden' }}
    >
      <Grid
        item
        container
        pt={{ xs: 3, md: 0 }}
        xs={12}
        md={2.8}
        height={{ md: '100%' }}
      >
        <LeftSideBar />
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={5.5}
        overflow={{
          md: 'scroll',
        }}
        height={'100%'}
        px={{ xs: 2 }}
      >
        <MainContent />
      </Grid>
    </Grid>
  );
};
