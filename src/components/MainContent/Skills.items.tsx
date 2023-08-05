import { Grid } from '@mui/material';
import { useQuerySkill } from '@/hooks/queries/useQuerySkill';
import { SkillsItemsItem } from '@/components/MainContent/Skills.items.item';

export const SkillsItems = () => {
  const { getSkillData, getSkillLoading } = useQuerySkill();

  if (getSkillLoading) return <></>;

  return (
    <Grid container flexWrap={'wrap'} justifyContent={'flex-start'} gap={4}>
      {getSkillData.data.map((skill) => {
        return <SkillsItemsItem skill={skill} key={skill.id} />;
      })}
    </Grid>
  );
};
