import { PersonOutlined } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { SectionHeader } from '@/components/MainContent/SectionHeader';
import { colors } from '@/core/theme/colors';
import { PortfolioProjects } from '@/components/MainContent/Portfolio.projects';
import { MutableRefObject } from 'react';

interface Props {
  portfolioRef: MutableRefObject<any>;
}

export const Portfolio = ({ portfolioRef }: Props) => {
  return (
    <Stack gap={2} ref={portfolioRef}>
      <SectionHeader icon={PersonOutlined} title={'portfolio'}>
        <Typography
          color={'white'}
          variant={'h2'}
          fontSize={{ xs: 38, md: 48 }}
          lineHeight={{ xs: 1.4, md: '60px' }}
          fontWeight={300}
          letterSpacing={-0.2}
        >
          Featured <span style={{ color: colors.primary }}>Projects</span>
        </Typography>
      </SectionHeader>
      <PortfolioProjects />
    </Stack>
  );
};
