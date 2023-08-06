import { Button, Grid, Typography } from '@mui/material';
import { colors } from '@/core/theme/colors';
import { SomeNumbers } from '@/components/MainContent/SomeNumbers/SomeNumbers';
import { SectionHeader } from '@/components/MainContent/SectionHeader';
import React, { useEffect } from 'react';
import { HomeOutlined } from '@mui/icons-material';
import { useRefsContext } from '@/providers/refsProvider';
import { animated, useSpring } from '@react-spring/web';

export const Introduction = () => {
  const { portfolioRef, introductionRef, sectionToAnimate } = useRefsContext();
  const handleScrollToPortfoliosSection = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const AnimatedGrid = animated(Grid);
  const [gridStyles, gridStylesApi] = useSpring(() => ({
    opacity: 0,
  }));

  const [typographyStyles, typographyStylesApi] = useSpring(() => ({
    opacity: 0,
    x: 500,
  }));

  const AnimatedTypography = animated(Typography);

  const hasToAnimate = sectionToAnimate === introductionRef;

  useEffect(() => {
    if (window.innerWidth > 767) {
      gridStylesApi.start({
        opacity: 1,
        config: {
          duration: 500,
        },
      });
      typographyStylesApi.start({
        opacity: 1,
        x: 500,
        config: {
          duration: 500,
        },
      });
    }
  }, [gridStylesApi, typographyStylesApi]);

  if (hasToAnimate) {
    gridStylesApi.start({
      opacity: 1,
      config: {
        duration: 500,
      },
    });
    typographyStylesApi.start({
      opacity: 1,
      x: 0,
      config: {
        duration: 500,
      },
    });
  }

  return (
    <AnimatedGrid
      style={gridStyles}
      item
      container
      justifyContent={'space-between'}
      gap={5}
      ref={introductionRef}
    >
      <SectionHeader icon={HomeOutlined} title={'Introduction'}>
        <AnimatedTypography
          style={typographyStyles}
          color={'white'}
          variant={'h1'}
          fontSize={{ xs: 50, md: 78 }}
          lineHeight={{ xs: 1.3, md: '90px' }}
          fontWeight={300}
          letterSpacing={-0.2}
        >
          Hello! I am <span style={{ color: '#28e98c' }}>Gabriel</span>, and
          welcome to my Portfolio!
        </AnimatedTypography>
      </SectionHeader>
      <Grid item container gap={4}>
        <Grid item container xs={12}>
          <AnimatedTypography style={typographyStyles} fontSize={{ xs: 16 }}>
            I am a Full Stack Software Engineer passionated by Technology and a
            lifetime learner.
          </AnimatedTypography>
        </Grid>
        <Grid item container xs={12} justifyContent={{ xs: 'flex-end' }}>
          <Button
            onClick={handleScrollToPortfoliosSection}
            sx={{
              alignSelf: 'flex-end',
              borderRadius: 99999,
              background: colors.primary,
              color: 'black',
              px: {
                xs: 5,
              },
            }}
          >
            Check some of my projects
          </Button>
        </Grid>
      </Grid>
      <SomeNumbers />
    </AnimatedGrid>
  );
};
