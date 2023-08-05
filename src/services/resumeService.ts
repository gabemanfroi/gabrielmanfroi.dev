import { Axios } from '@/core/utils/http';

const resumeService = () => {
  const getResumeItems = async () =>
    Axios.get(
      '/gabriel-portfolio-resume-item-dates?populate=*&sort=initialYear:desc',
    );

  return {
    getResumeItems,
  };
};

export default resumeService();
