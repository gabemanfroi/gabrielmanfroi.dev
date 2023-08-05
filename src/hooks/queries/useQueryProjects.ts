import { useQuery } from 'react-query';
import { QUERIES } from '@/core/constants/queries';
import projectsService from '@/services/projectsService';
import { ProjectResponseData } from '@/core/types/Project';

export const useQueryProjects = () => {
  const { data: getProjectsData, isLoading: getProjectsLoading } =
    useQuery<ProjectResponseData>(
      QUERIES.PROJECTS.GET_PROJECTS,
      projectsService.getProjects,
    );

  return {
    getProjectsData: getProjectsData ?? ({} as ProjectResponseData),
    getProjectsLoading,
  };
};
