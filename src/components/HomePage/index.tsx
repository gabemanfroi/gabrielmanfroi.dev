import { Grid } from '@mui/material';
import { LeftSideBar } from '@/components/LeftSideBar';
import { MainContent } from '@/components/MainContent';

export const HomePage = () => {
  return (
    <Grid
      container
      px={{ xs: 0, md: 3 }}
      py={{ xs: 0, md: 4, lg: 12 }}
      gap={{ xs: 7, md: 13, xl: 30 }}
      height={'100%'}
      overflow={{ xs: 'scroll', lg: 'hidden' }}
    >
      <Grid
        item
        container
        pt={{ xs: 3, md: 0 }}
        xs={12}
        lg={3}
        xl={2.8}
        height={{ lg: '100%' }}
      >
        <LeftSideBar />
      </Grid>
      <Grid
        item
        container
        xs={12}
        lg={5.5}
        overflow={{
          lg: 'scroll',
        }}
        height={'100%'}
        px={{ xs: 2 }}
      >
        <MainContent />
      </Grid>
    </Grid>
  );
};
