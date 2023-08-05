import { Grid, Stack, Typography } from '@mui/material';
import { Code, Javascript } from '@mui/icons-material';
import { SectionHeader } from '@/components/MainContent/SectionHeader';
import { colors } from '@/core/theme/colors';

export const Skills = () => {
  return (
    <Stack justifyContent={'space-between'} gap={4}>
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
      <Grid container flexWrap={'wrap'} justifyContent={'flex-start'} gap={4}>
        <Grid
          gap={'29px'}
          container
          direction={'column'}
          item
          xs={5}
          md={2.5}
          border={'2px solid #565656'}
          borderRadius={'85px'}
          p={'54px 0 48px 0'}
          alignItems={'center'}
          justifyContent={'space-around'}
        >
          <Javascript sx={{ fontSize: '70px' }} />
          <Typography fontSize={30} color={colors.primary}>
            90%
          </Typography>
        </Grid>
        <Grid
          gap={'29px'}
          container
          direction={'column'}
          item
          xs={5}
          md={2.5}
          border={'2px solid #565656'}
          borderRadius={'85px'}
          p={'54px 0 48px 0'}
          alignItems={'center'}
          justifyContent={'space-around'}
        >
          <Javascript sx={{ fontSize: '70px' }} />
          <Typography fontSize={30} color={colors.primary}>
            90%
          </Typography>
        </Grid>
        <Grid
          gap={'29px'}
          container
          direction={'column'}
          item
          xs={5}
          md={2.5}
          border={'2px solid #565656'}
          borderRadius={'85px'}
          p={'54px 0 48px 0'}
          alignItems={'center'}
          justifyContent={'space-around'}
        >
          <Javascript sx={{ fontSize: '70px' }} />
          <Typography fontSize={30} color={colors.primary}>
            90%
          </Typography>
        </Grid>
        <Grid
          gap={'29px'}
          container
          direction={'column'}
          item
          xs={5}
          md={2.5}
          border={'2px solid #565656'}
          borderRadius={'85px'}
          p={'54px 0 48px 0'}
          alignItems={'center'}
          justifyContent={'space-around'}
        >
          <Javascript sx={{ fontSize: '70px' }} />
          <Typography fontSize={30} color={colors.primary}>
            90%
          </Typography>
        </Grid>
        <Grid
          gap={'29px'}
          container
          direction={'column'}
          item
          xs={5}
          md={2.5}
          border={'2px solid #565656'}
          borderRadius={'85px'}
          p={'54px 0 48px 0'}
          alignItems={'center'}
          justifyContent={'space-around'}
        >
          <Javascript sx={{ fontSize: '70px' }} />
          <Typography fontSize={30} color={colors.primary}>
            90%
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};
