import { Stack, Typography } from '@mui/material';
import { colors } from '@/core/theme/colors';

interface Props {
  moreThan: number;
  description: string;
  flex?: number;
}

export const SomeNumbersItem = ({ moreThan, description, flex }: Props) => {
  return (
    <Stack gap={5} flex={flex ?? 0}>
      <Typography
        color={colors.primary}
        variant={'h2'}
        lineHeight={'56px'}
        fontSize={{ xs: 58, md: 72 }}
      >
        {moreThan}+
      </Typography>
      <Typography textTransform="uppercase" fontSize={{ xs: 14 }}>
        {description}
      </Typography>
    </Stack>
  );
};
