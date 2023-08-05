import { Button, Grid, Typography } from '@mui/material';
import { colors } from '@/core/theme/colors';
import { SomeNumbers } from '@/components/MainContent/SomeNumbers/SomeNumbers';
import { SectionHeader } from '@/components/MainContent/SectionHeader';
import React from 'react';
import { HomeOutlined } from '@mui/icons-material';
import { useRefsContext } from '@/providers/refsProvider';

export const Introduce = () => {
  const { portfolioRef, introductionRef } = useRefsContext();
  const handleScrollToPortfoliosSection = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Grid
      item
      container
      justifyContent={'space-between'}
      gap={5}
      ref={introductionRef}
    >
      <SectionHeader icon={HomeOutlined} title={'Introduction'}>
        <Typography
          color={'white'}
          variant={'h1'}
          fontSize={{ xs: 50, md: 78 }}
          lineHeight={{ xs: 1.3, md: '90px' }}
          fontWeight={300}
          letterSpacing={-0.2}
        >
          Hello! I am <span style={{ color: '#28e98c' }}>Gabriel</span>, and
          welcome to my Portfolio!
        </Typography>
      </SectionHeader>
      <Grid item container gap={4}>
        <Grid item container xs={8}>
          <Typography fontSize={{ xs: 16 }}>
            I am a Full Stack Software Engineer passionated by Technology and a
            lifetime learner.
          </Typography>
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
    </Grid>
  );
};
