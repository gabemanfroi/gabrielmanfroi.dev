import { Stack, Typography } from '@mui/material';
import { PersonOutlined } from '@mui/icons-material';
import { SectionHeader } from '@/components/MainContent/SectionHeader';
import { useRefsContext } from '@/providers/refsProvider';
import { animated, useSpring } from '@react-spring/web';

export const About = () => {
  const { aboutRef } = useRefsContext();
  const AnimatedStack = animated(Stack);
  const styles = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 500,
    },
  });

  return (
    <AnimatedStack
      style={styles}
      justifyContent={'space-between'}
      gap={4}
      ref={aboutRef}
    >
      <SectionHeader icon={PersonOutlined} title={'about'}>
        <Typography
          color={'white'}
          variant={'h2'}
          fontSize={{ xs: 38, md: 48 }}
          lineHeight={{ xs: 1.4, md: '60px' }}
          fontWeight={300}
          letterSpacing={-0.2}
        >
          Every great project begin with an even
          <span style={{ color: '#28e98c' }}> better story</span>
        </Typography>
      </SectionHeader>
      <Typography
        color={'#999999'}
        fontSize={16}
        lineHeight={'30px'}
        fontWeight={400}
      >
        My skills as a Full Stack Software Engineer and user experience are well
        developed. In addition to a broad interest in computer Problem Solving
        and new technologies. I&apos;m a hard worker, I like challenges, I try
        my best in everything I do, and I learn fast. As an aspiring person with
        the ability of self motivation and organization I always aim to complete
        all the tasks and goals assigned to me.
      </Typography>
    </AnimatedStack>
  );
};
