import { Grid, Stack, Typography } from '@mui/material';
import { Javascript, PersonOutlined } from '@mui/icons-material';

export const Skills = () => {
  return (
    <Stack justifyContent={'space-between'}>
      <Stack
        alignItems={'center'}
        justifyContent={'space-evenly'}
        direction={'row'}
        width={110}
        sx={{
          padding: '9px 20px',
          opacity: 1,
          transform: 'translate(0px, 0px)',
        }}
        borderRadius={999}
        border={'1px solid #565656'}
        gap={1}
      >
        <PersonOutlined sx={{ fontSize: '14px', color: 'white' }} />
        <Typography
          fontWeight={300}
          textTransform={'uppercase'}
          color={'white'}
          fontSize={12}
        >
          Skills
        </Typography>
      </Stack>
      <Typography variant={'h1'} fontSize={48} lineHeight={'60px'}>
        How I may help you
      </Typography>
      <Grid container justifyContent={'flex-start'} gap={4}>
        <Grid
          gap={'29px'}
          container
          direction={'column'}
          item
          xs={2.5}
          border={'2px solid #565656'}
          borderRadius={'85px'}
          p={'54px 0 48px 0'}
          alignItems={'center'}
          justifyContent={'space-around'}
        >
          <Javascript sx={{ fontSize: '40px' }} />
          <Typography fontSize={30}>90%</Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};
