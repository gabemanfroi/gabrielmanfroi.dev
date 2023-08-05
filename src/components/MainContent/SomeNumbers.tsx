import { Stack } from '@mui/material';
import { SomeNumbersItem } from '@/components/MainContent/SomeNumbers.item';

export const SomeNumbers = () => {
  return (
    <Stack direction={'row'} gap={{ xs: 3, md: 10 }}>
      <SomeNumbersItem moreThan={4} description={'Years of Experience'} />
      <SomeNumbersItem
        flex={1}
        moreThan={182}
        description={'Projects Completed'}
      />
    </Stack>
  );
};
