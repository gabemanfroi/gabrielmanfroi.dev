import { Grid } from '@mui/material';
import { LeftSideBar } from '@/components/LeftSideBar';
import { MainContent } from '@/components/MainContent';

export const HomePage = () => {
  return (
    <Grid container px={3} py={9} gap={30} height={'100%'} overflow={'hidden'}>
      <Grid item container xs={2.8} height={'100%'}>
        <LeftSideBar />
      </Grid>
      <Grid item container xs={5.5} overflow={'scroll'} height={'100%'}>
        <MainContent />
      </Grid>
    </Grid>
  );
};
