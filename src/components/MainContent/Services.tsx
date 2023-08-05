import { Stack, Typography } from '@mui/material';
import { Code, RoomService } from '@mui/icons-material';
import { SectionHeader } from '@/components/MainContent/SectionHeader';

export const Services = () => {
  return (
    <Stack justifyContent={'space-between'} gap={4}>
      <SectionHeader icon={RoomService} title={'Services'} width={120}>
        <Typography
          color={'white'}
          variant={'h1'}
          fontSize={{ xs: 38, md: 48 }}
          lineHeight={'60px'}
        >
          My Services
        </Typography>
      </SectionHeader>
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
