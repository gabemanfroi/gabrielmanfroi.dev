import { Grid, Stack } from '@mui/material';
import { Introduce } from '@/components/MainContent/Introduce';
import { About } from '@/components/MainContent/About';
import { Resume } from '@/components/MainContent/Resume';
import { Services } from '@/components/MainContent/Services';
import { Skills } from '@/components/MainContent/Skills';
import { Portfolio } from '@/components/MainContent/Portfolio';

export const MainContent = () => {
  return (
    <Grid item flex={1}>
      <Stack justifyContent={'space-between'} gap={7}>
        <Introduce />
        <About />
        <Resume />
        <Services />
        <Skills />
        <Portfolio />
      </Stack>
    </Grid>
  );
};
