import { Stack, Typography } from '@mui/material';
import { PersonOutlined } from '@mui/icons-material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from '@mui/lab';

export const Resume = () => {
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
        Education and Experience
      </Typography>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ paddingLeft: '74px', paddingBottom: '68px' }}>
            <Stack gap={'28px'}>
              <Stack>2020</Stack>
              <Stack>
                <Typography
                  variant={'h2'}
                  fontSize={24}
                  fontWeight={300}
                  color={'white'}
                >
                  Webflow Developer & Co-Founder
                </Typography>
                <Typography component={'p'} fontSize={13} fontWeight={300}>
                  Webflow Developer & Co-Founder
                </Typography>
              </Stack>
            </Stack>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Stack>
  );
};
