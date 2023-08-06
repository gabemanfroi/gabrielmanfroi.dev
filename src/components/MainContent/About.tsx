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
        Since beginning my journey as a freelance designer nearly 8 years ago,
        I&apos;ve done remote work for agencies, consulted for startups, and
        collaborated with talented people to create digital products for both
        business and consumer use. I&apos;m quietly confident, naturally
        curious, and perpetually working on improving my chopsone design problem
        at a time.
      </Typography>
    </AnimatedStack>
  );
};
