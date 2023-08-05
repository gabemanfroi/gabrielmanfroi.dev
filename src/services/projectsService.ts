import { Axios } from '@/core/utils/http';

const projectsService = () => {
  const getProjects = () =>
    Axios.get('/gabriel-portfolio-projects?populate=*&sort=position:asc');

  return {
    getProjects,
  };
};

export default projectsService();
