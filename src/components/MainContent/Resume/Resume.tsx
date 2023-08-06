import { Stack, Typography } from '@mui/material';
import { SectionHeader } from '@/components/MainContent/SectionHeader';
import { WorkOutline } from '@mui/icons-material';
import { colors } from '@/core/theme/colors';
import { ResumeTimeline } from '@/components/MainContent/Resume/Resume.timeline';
import { useRefsContext } from '@/providers/refsProvider';
import { animated, useSpring } from '@react-spring/web';

export const Resume = () => {
  const { resumeRef, sectionToAnimate } = useRefsContext();
  const AnimatedStack = animated(Stack);
  const [styles, api] = useSpring(() => ({
    opacity: 0,
    y: 100,
  }));

  const hasToAnimate = sectionToAnimate === resumeRef;

  if (hasToAnimate) {
    api.start({
      opacity: 1,
      y: 0,
      config: {
        duration: 500,
      },
    });
  }

  return (
    <AnimatedStack
      style={{ ...styles }}
      justifyContent={'space-between'}
      ref={resumeRef}
    >
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
    </AnimatedStack>
  );
};
