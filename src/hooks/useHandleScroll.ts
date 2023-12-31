import { useCallback, useEffect } from 'react';
import { useRefsContext } from '@/providers/refsProvider';
import { useSectionEnteredView } from '@/hooks/useSectionEnteredView';

export const useHandleScroll = () => {
  const {
    introductionRef,
    skillsRef,
    portfolioRef,
    aboutRef,
    resumeRef,
    setActiveSection,
    mainContentRef,
  } = useRefsContext();

  const handleHasToAnimate = useSectionEnteredView();

  const handleScroll = useCallback(() => {
    handleHasToAnimate();
    const mainContentRect = mainContentRef.current?.getBoundingClientRect();

    for (const ref of [
      introductionRef,
      aboutRef,
      resumeRef,
      skillsRef,
      portfolioRef,
    ]) {
      const rect = ref.current?.getBoundingClientRect();
      if (
        (rect.top >= mainContentRect.top &&
          rect.top <= mainContentRect.bottom / 2) ||
        (rect.bottom <= mainContentRect.bottom &&
          rect.bottom >= mainContentRect.bottom / 2)
      ) {
        setActiveSection(ref);
        break;
      }
    }
  }, [
    handleHasToAnimate,
    mainContentRef,
    introductionRef,
    aboutRef,
    resumeRef,
    skillsRef,
    portfolioRef,
    setActiveSection,
  ]);

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  return handleScroll;
};
