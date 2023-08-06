import { Stack, Typography } from '@mui/material';
import { Code } from '@mui/icons-material';
import { SectionHeader } from '@/components/MainContent/SectionHeader';
import { colors } from '@/core/theme/colors';
import { useRefsContext } from '@/providers/refsProvider';
import { SkillsItems } from '@/components/MainContent/Skills/Skills.items';
import { animated, useSpring } from '@react-spring/web';

export const Skills = () => {
  const { skillsRef, sectionToAnimate } = useRefsContext();
  const [styles, api] = useSpring(() => ({
    opacity: 0,
    y: 100,
  }));

  const hasToAnimate = sectionToAnimate === skillsRef;

  const AnimatedStack = animated(Stack);

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
      style={styles}
      justifyContent={'space-between'}
      gap={4}
      ref={skillsRef}
    >
      <SectionHeader title={'Skills'} icon={Code}>
        <Typography
          color={'white'}
          variant={'h1'}
          fontSize={{ xs: 38, md: 48 }}
          lineHeight={'60px'}
        >
          How I may <span style={{ color: colors.primary }}> help you</span>
        </Typography>
      </SectionHeader>
      <SkillsItems />
    </AnimatedStack>
  );
};
