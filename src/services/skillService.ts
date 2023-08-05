import { Axios } from '@/core/utils/http';

const skillService = () => {
  const getSkill = async () =>
    Axios.get('/gabriel-portfolio-skills?sort=proficiency:desc');
  return {
    getSkill,
  };
};

export default skillService();
