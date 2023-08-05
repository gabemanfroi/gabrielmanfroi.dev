import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import { Stack, Typography } from '@mui/material';

interface Props {
  resumeItemDate: ResumeItemDate;
  last: boolean;
}

interface ResumeItemProps {
  resumeItem: ResumeItem;
}

const ResumeItem = ({ resumeItem }: ResumeItemProps) => {
  return (
    <Stack gap={1}>
      <Typography variant={'h2'} fontSize={24} fontWeight={300} color={'white'}>
        {resumeItem.attributes.role}
      </Typography>
      <Typography component={'p'} fontSize={13} fontWeight={300}>
        {resumeItem.attributes.institution}
      </Typography>
    </Stack>
  );
};

export const ResumeTimelineItem = ({ resumeItemDate, last }: Props) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent
        sx={{
          paddingLeft: { xs: 6, md: '74px' },
          paddingBottom: !last ? '68px' : '',
        }}
      >
        <Stack gap={'28px'}>
          <Stack>
            {resumeItemDate.attributes.initialYear} -{' '}
            {resumeItemDate.attributes.endYear}
          </Stack>
          {resumeItemDate.attributes.resumeItems.data
            .sort((a, b) => a.attributes.position - b.attributes.position)
            .map((resumeItem) => (
              <ResumeItem key={resumeItem.id} resumeItem={resumeItem} />
            ))}
        </Stack>
      </TimelineContent>
    </TimelineItem>
  );
};
