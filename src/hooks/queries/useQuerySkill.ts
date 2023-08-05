import { useQuery } from 'react-query';
import { QUERIES } from '@/core/constants/queries';
import skillService from '@/services/skillService';
import { SkillResponseData } from '@/core/types/Skill';

export const useQuerySkill = () => {
  const { data: getSkillData, isLoading: getSkillLoading } =
    useQuery<SkillResponseData>(
      QUERIES.SKILLS.GET_SKILLS,
      skillService.getSkill,
    );
  return {
    getSkillData: getSkillData ?? ({} as SkillResponseData),
    getSkillLoading,
  };
};
