import { Stack, Typography } from '@mui/material';
import { Code, PersonOutlined } from '@mui/icons-material';

export const Services = () => {
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
          Resume
        </Typography>
      </Stack>
      <Typography variant={'h1'} fontSize={48} lineHeight={'60px'}>
        My Services
      </Typography>
      <Stack p={6} border={'1px solid #565656'} borderRadius={4}>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'flex-start'}
        >
          <Stack>
            <Typography fontSize={24} color={'white'} fontWeight={300}>
              Website Design
            </Typography>
            <Typography>
              I created digital products with unique ideas use Figma & Framer
            </Typography>
          </Stack>
          <Stack>
            <Code />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
