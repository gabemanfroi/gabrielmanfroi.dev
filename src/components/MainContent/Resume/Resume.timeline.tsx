import { Timeline, timelineItemClasses } from '@mui/lab';
import { useQueryResumeItems } from '@/hooks/queries/useQueryResumeItems';
import { ResumeTimelineItem } from '@/components/MainContent/Resume/Resume.timeline.item';

export const ResumeTimeline = () => {
  const { getResumeItemsData, getResumeItemsDataLoading } =
    useQueryResumeItems();

  if (getResumeItemsDataLoading) return <></>;

  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {getResumeItemsData.data.map((resumeItemDate, index) => (
        <ResumeTimelineItem
          last={index === getResumeItemsData.data.length - 1}
          key={resumeItemDate.id}
          resumeItemDate={resumeItemDate}
        />
      ))}
    </Timeline>
  );
};
