import { Grid, Stack } from '@mui/material';
import { Introduction } from '@/components/MainContent/Introduction';
import { About } from '@/components/MainContent/About';
import { Resume } from '@/components/MainContent/Resume/Resume';
import { Skills } from '@/components/MainContent/Skills/Skills';
import { Portfolio } from '@/components/MainContent/Portfolio/Portfolio';

export const MainContent = () => {
  return (
    <Grid item flex={1}>
      <Stack justifyContent={'space-between'} gap={7}>
        <Introduction />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
      </Stack>
    </Grid>
  );
};
