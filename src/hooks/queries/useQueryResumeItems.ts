import { useQuery } from 'react-query';
import { QUERIES } from '@/core/constants/queries';
import resumeService from '@/services/resumeService';

export const useQueryResumeItems = () => {
  const { data: getResumeItemsData, isLoading: getResumeItemsDataLoading } =
    useQuery<ResumeItemDateResponseData>(
      QUERIES.RESUME.GET_RESUME_ITEMS,
      resumeService.getResumeItems,
    );

  return {
    getResumeItemsData:
      getResumeItemsData ?? ({} as ResumeItemDateResponseData),
    getResumeItemsDataLoading,
  };
};
