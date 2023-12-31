import {
  createContext,
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';

interface RefsContext {
  introductionRef: MutableRefObject<any>;
  aboutRef: MutableRefObject<any>;
  resumeRef: MutableRefObject<any>;
  skillsRef: MutableRefObject<any>;
  portfolioRef: MutableRefObject<any>;
  activeSection: MutableRefObject<any> | null;
  setActiveSection: Dispatch<SetStateAction<MutableRefObject<any> | null>>;
  setSectionToAnimate: Dispatch<SetStateAction<MutableRefObject<any> | null>>;
  sectionToAnimate: MutableRefObject<any> | null;
  mainContentRef: MutableRefObject<any>;
}

const RefsContext = createContext<RefsContext>({} as unknown as RefsContext);

interface Props {
  children: ReactNode;
}

export const RefsProvider = ({ children }: Props) => {
  const introductionRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const resumeRef = useRef<any>(null);
  const skillsRef = useRef<any>(null);
  const portfolioRef = useRef<any>(null);
  const mainContentRef = useRef<any>(null);

  const [activeSection, setActiveSection] =
    useState<MutableRefObject<any> | null>(null);
  const [sectionToAnimate, setSectionToAnimate] =
    useState<MutableRefObject<any> | null>(null);

  const value = useMemo(
    () => ({
      introductionRef,
      aboutRef,
      resumeRef,
      skillsRef,
      portfolioRef,
      activeSection,
      setActiveSection,
      mainContentRef,
      sectionToAnimate,
      setSectionToAnimate,
    }),
    [
      introductionRef,
      aboutRef,
      resumeRef,
      skillsRef,
      portfolioRef,
      activeSection,
      mainContentRef,
      setActiveSection,
      sectionToAnimate,
      setSectionToAnimate,
    ],
  );
  return <RefsContext.Provider value={value}>{children}</RefsContext.Provider>;
};

export const useRefsContext = () => useContext(RefsContext);
