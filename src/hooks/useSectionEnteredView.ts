import { useCallback, useEffect } from 'react';
import { useRefsContext } from '@/providers/refsProvider';

export const useSectionEnteredView = () => {
  const {
    introductionRef,
    skillsRef,
    portfolioRef,
    aboutRef,
    resumeRef,
    setSectionToAnimate,
    mainContentRef,
  } = useRefsContext();

  const handleSectionToAnimate = useCallback(() => {
    const mainContentRect = mainContentRef.current?.getBoundingClientRect();

    for (const ref of [
      introductionRef,
      aboutRef,
      resumeRef,
      skillsRef,
      portfolioRef,
    ]) {
      const rect = ref.current?.getBoundingClientRect();
      const bottom =
        window.innerWidth <= 768 ? window.innerHeight : mainContentRect.bottom;
      if (rect.top <= bottom / 1.1 && rect.top >= bottom / 2) {
        setSectionToAnimate(ref);
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
    setSectionToAnimate,
  ]);

  useEffect(() => {
    handleSectionToAnimate();
  }, [handleSectionToAnimate]);

  return handleSectionToAnimate;
};
