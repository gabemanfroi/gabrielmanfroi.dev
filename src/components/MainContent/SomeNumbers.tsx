import { Stack, Typography } from '@mui/material';

export const SomeNumbers = () => {
  return (
    <Stack direction={'row'} gap={10}>
      <Stack gap={5}>
        <Typography variant={'h2'} lineHeight={'56px'} fontSize={76}>
          4+
        </Typography>
        <Typography>Years of Experience</Typography>
      </Stack>
      <Stack gap={5}>
        <Typography variant={'h2'} lineHeight={'56px'} fontSize={76}>
          182+
        </Typography>
        <Typography>Projects Completed</Typography>
      </Stack>
    </Stack>
  );
};
