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
      position="relative"
    >
      <Grid
        top={0}
        left={0}
        height={{ lg: '100%' }}
        px={{ xs: 0, md: 3 }}
        py={{ xs: 0, md: 4, lg: 12 }}
        position={{ lg: 'absolute' }}
        item
        container
        pt={{ xs: 3, md: 0 }}
        xs={12}
        lg={4.2}
        xl={3}
      >
        <LeftSideBar />
      </Grid>
      <Grid
        item
        container
        xs={12}
        pl={{ lg: '40%' }}
        pr={{ lg: '10%', xl: '15%' }}
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
