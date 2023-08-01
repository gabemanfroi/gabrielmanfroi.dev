import { Button, Grid, Stack, Typography } from '@mui/material';
import { Introduce } from '@/components/MainContent/Introduce';
import { SomeNumbers } from '@/components/MainContent/SomeNumbers';
import { About } from '@/components/MainContent/About';
import { Resume } from '@/components/MainContent/Resume';
import { Services } from '@/components/MainContent/Services';
import { Skills } from '@/components/MainContent/Skills';

export const MainContent = () => {
  return (
    <Grid item flex={1}>
      <Stack justifyContent={'space-between'}>
        <Introduce />
        <Typography>
          I am a Full Stack Software Engineer passionated by Technology
        </Typography>
        <Button sx={{ height: 175 }}>Check some of my projects</Button>
        <SomeNumbers />
        <About />
        <Resume />
        <Services />
        <Skills />
      </Stack>
    </Grid>
  );
};
