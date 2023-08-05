import {
  Code,
  HomeOutlined,
  PersonOutlined,
  RoomServiceOutlined,
  WorkOutline,
} from '@mui/icons-material';
import { Stack } from '@mui/material';
import { useRefsContext } from '@/providers/refsProvider';
import { RightSidebarItem } from '@/components/RightSidebar/RightSidebar.item';

export const RightSidebar = () => {
  const {
    aboutRef,
    introductionRef,
    portfolioRef,
    resumeRef,
    serviceRef,
    skillsRef,
  } = useRefsContext();

  return (
    <Stack
      visibility={{ xs: 'hidden', lg: 'visible' }}
      borderRadius={999}
      border={'1px solid #565656'}
      direction="column"
      position="absolute"
      top={'50%'}
      px={2}
      py={3}
      right={64}
      gap={3}
      sx={{
        transform: 'translateY(-50%)',
      }}
    >
      <RightSidebarItem sectionRef={introductionRef} icon={HomeOutlined} />
      <RightSidebarItem sectionRef={aboutRef} icon={PersonOutlined} />
      <RightSidebarItem sectionRef={resumeRef} icon={WorkOutline} />
      <RightSidebarItem sectionRef={serviceRef} icon={RoomServiceOutlined} />
      <RightSidebarItem sectionRef={skillsRef} icon={Code} />
      <RightSidebarItem sectionRef={portfolioRef} icon={PersonOutlined} />
    </Stack>
  );
};
