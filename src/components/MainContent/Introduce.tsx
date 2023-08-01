import { Stack, Typography } from '@mui/material';
import { HomeOutlined } from '@mui/icons-material';

export const Introduce = () => {
  return (
    <Stack justifyContent={'space-between'}>
      <Stack
        alignItems={'center'}
        justifyContent={'space-evenly'}
        direction={'row'}
        width={135}
        sx={{
          padding: '9px 20px',
          opacity: 1,
          transform: 'translate(0px, 0px)',
        }}
        borderRadius={999}
        border={'1px solid #565656'}
        gap={1}
      >
        <HomeOutlined sx={{ fontSize: '14px', color: 'white' }} />
        <Typography
          fontWeight={300}
          textTransform={'uppercase'}
          color={'white'}
          fontSize={12}
        >
          Introduce
        </Typography>
      </Stack>
      <Typography
        color={'white'}
        variant={'h1'}
        fontSize={78}
        lineHeight={'90px'}
        fontWeight={300}
        letterSpacing={-0.2}
      >
        Hello! I am <span style={{ color: '#28e98c' }}>Gabriel</span>, and
        welcome to my Portfolio!
      </Typography>
    </Stack>
  );
};
