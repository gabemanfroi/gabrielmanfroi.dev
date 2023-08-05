import { Stack, Typography } from '@mui/material';
import { SectionHeader } from '@/components/MainContent/SectionHeader';
import { WorkOutline } from '@mui/icons-material';
import { colors } from '@/core/theme/colors';
import { ResumeTimeline } from '@/components/MainContent/Resume.timeline';

export const Resume = () => {
  return (
    <Stack justifyContent={'space-between'}>
      <SectionHeader icon={WorkOutline} title={'Resume'}>
        <Typography
          color={'white'}
          variant={'h1'}
          fontSize={{ xs: 38, md: 48 }}
          lineHeight={{ xs: 1.4, md: '60px' }}
        >
          Education and{' '}
          <span style={{ color: colors.primary }}> Experience</span>
        </Typography>
      </SectionHeader>
      <ResumeTimeline />
    </Stack>
  );
};
