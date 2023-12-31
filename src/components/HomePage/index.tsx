import { Grid } from '@mui/material';
import { LeftSideBar } from '@/components/LeftSideBar';
import { MainContent } from '@/components/MainContent';
import { RightSidebar } from '@/components/RightSidebar';
import { useHandleScroll } from '@/hooks/useHandleScroll';
import { useRefsContext } from '@/providers/refsProvider';
import { FloatingButton } from '@/components/RightSidebar/FloatingButton';

export const HomePage = () => {
  const { mainContentRef } = useRefsContext();

  const handleScroll = useHandleScroll();
  return (
    <>
      <Grid
        container
        px={{ xs: 0, md: 3 }}
        py={{ xs: 0, md: 4, lg: 12 }}
        gap={{ xs: 7, md: 13, xl: 30 }}
        margin={'0 auto'}
        maxWidth={1700}
        height={'100%'}
        overflow={{ xs: 'scroll', lg: 'hidden' }}
        position="relative"
        onScroll={() => {
          if (window.innerWidth < 768) {
            handleScroll();
          }
        }}
      >
        <Grid
          top={0}
          left={0}
          height={{ lg: '100%' }}
          px={{ xs: 0, md: 3, lg: 0 }}
          pl={{ lg: 3 }}
          py={{ xs: 0, md: 4, lg: 12 }}
          position={{ lg: 'absolute' }}
          item
          container
          pt={{ xs: 3, md: 0 }}
          xs={12}
          lg={4.2}
          xl={3}
          maxHeight={150}
        >
          <LeftSideBar />
        </Grid>
        <Grid
          ref={mainContentRef}
          item
          container
          xs={12}
          pl={{ lg: '40%' }}
          pr={{ lg: '10%', xl: '15%' }}
          overflow={{
            lg: 'scroll',
          }}
          height={'100%'}
          px={{ xs: 2 }}
          onScroll={handleScroll}
        >
          <MainContent />
        </Grid>
        <RightSidebar />
      </Grid>
      <FloatingButton />
    </>
  );
};
