export type PossibleSkills =
  | 'react'
  | 'python'
  | 'fastapi'
  | 'next'
  | 'typescript'
  | 'go'
  | 'node';

export type Skill = {
  id: number;
  attributes: {
    skill: PossibleSkills;
    proficiency: number;
  };
};

export type SkillResponseData = {
  data: Skill[];
};
