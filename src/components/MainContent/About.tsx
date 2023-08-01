import { Stack, Typography } from '@mui/material';
import { PersonOutlined } from '@mui/icons-material';

export const About = () => {
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
          About
        </Typography>
      </Stack>
      <Typography
        color={'white'}
        variant={'h2'}
        fontSize={48}
        lineHeight={'60px'}
        fontWeight={300}
        letterSpacing={-0.2}
      >
        Every great design begin with an even better story
      </Typography>
      <Typography
        color={'white'}
        component={'p'}
        fontSize={16}
        lineHeight={'30px'}
        fontWeight={400}
      >
        Since beginning my journey as a freelance designer nearly 8 years ago,
        I've done remote work for agencies, consulted for startups, and
        collaborated with talented people to create digital products for both
        business and consumer use. I'm quietly confident, naturally curious, and
        perpetually working on improving my chopsone design problem at a time.
      </Typography>
    </Stack>
  );
};
