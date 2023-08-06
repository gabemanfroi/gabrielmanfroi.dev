import { Stack } from '@mui/material';
import { SomeNumbersItem } from '@/components/MainContent/SomeNumbers/SomeNumbers.item';

export const SomeNumbers = () => {
  return (
    <Stack direction={'row'} gap={{ xs: 3, md: 12 }}>
      <SomeNumbersItem moreThan={4} description={'Years of Experience'} />
      <SomeNumbersItem
        flex={1}
        moreThan={60}
        description={'Projects Completed'}
      />
    </Stack>
  );
};
