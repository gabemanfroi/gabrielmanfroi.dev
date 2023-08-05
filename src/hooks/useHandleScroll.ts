import { useCallback, useEffect } from 'react';
import { useRefsContext } from '@/providers/refsProvider';

export const useHandleScroll = () => {
  const {
    introductionRef,
    skillsRef,
    portfolioRef,
    serviceRef,
    aboutRef,
    resumeRef,
    setActiveSection,
    mainContentRef,
  } = useRefsContext();

  const handleScroll = useCallback(() => {
    const mainContentRect = mainContentRef.current?.getBoundingClientRect();

    for (const ref of [
      introductionRef,
      aboutRef,
      resumeRef,
      skillsRef,
      portfolioRef,
      serviceRef,
    ]) {
      const rect = ref.current?.getBoundingClientRect();
      if (
        (rect.top >= mainContentRect.top &&
          rect.top <= mainContentRect.bottom / 2) ||
        (rect.bottom <= mainContentRect.bottom &&
          rect.bottom >= mainContentRect.bottom / 2)
      ) {
        console.log({
          rect: rect.top,
          mainContentRect: mainContentRect.bottom / 2,
        });

        setActiveSection(ref);
        break;
      }
    }
  }, [
    mainContentRef,
    introductionRef,
    aboutRef,
    resumeRef,
    skillsRef,
    portfolioRef,
    serviceRef,
    setActiveSection,
  ]);

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  return handleScroll;
};
