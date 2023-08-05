type ResumeItem = {
  id: number;
  attributes: {
    position: number;
    institution: string;
    role: string;
  };
};

type ResumeItemDate = {
  id: number;
  attributes: {
    initialYear: string;
    endYear: string;
    resumeItems: {
      data: ResumeItem[];
    };
  };
};

type ResumeItemDateResponseData = {
  data: ResumeItemDate[];
};
