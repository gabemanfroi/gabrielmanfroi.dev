import { Grid, Stack, Typography } from '@mui/material';
import { RightSidebarDialogItem } from '@/components/RightSidebar/RightSidebar.dialog.item';
import {
  Code,
  HomeOutlined,
  PersonOutlined,
  WorkOutline,
} from '@mui/icons-material';
import { useRefsContext } from '@/providers/refsProvider';
import { Dispatch, SetStateAction } from 'react';
import { RightSidebarDialogSocialNetworks } from '@/components/RightSidebar/RightSidebar.dialog.socialNetworks';

interface Props {
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const RightSidebarDialogContent = ({ setIsActive }: Props) => {
  const { portfolioRef, introductionRef, aboutRef, resumeRef, skillsRef } =
    useRefsContext();
  return (
    <Grid
      height={'100%'}
      container
      px="25%"
      py={6}
      direction="column"
      justifyContent="space-around"
      gap={8}
    >
      <Typography fontSize={18} color="#999">
        Menu
      </Typography>
      <Stack gap={2}>
        <RightSidebarDialogItem
          title={'Introduction'}
          sectionRef={introductionRef}
          icon={HomeOutlined}
          setIsActive={setIsActive}
        />
        <RightSidebarDialogItem
          title={'About'}
          sectionRef={aboutRef}
          icon={PersonOutlined}
          setIsActive={setIsActive}
        />
        <RightSidebarDialogItem
          title={'Resume'}
          sectionRef={resumeRef}
          icon={WorkOutline}
          setIsActive={setIsActive}
        />
        <RightSidebarDialogItem
          title={'Skills'}
          sectionRef={skillsRef}
          icon={Code}
          setIsActive={setIsActive}
        />
        <RightSidebarDialogItem
          title={'Portfolio'}
          sectionRef={portfolioRef}
          icon={PersonOutlined}
          setIsActive={setIsActive}
        />
      </Stack>
      <RightSidebarDialogSocialNetworks />
    </Grid>
  );
};
