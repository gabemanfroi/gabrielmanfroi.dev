import { Grid, Typography } from '@mui/material';
import { colors } from '@/core/theme/colors';
import { PossibleSkills, Skill } from '@/core/types/Skill';
import { SiFastapi, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { IconType } from 'react-icons';

interface Props {
  skill: Skill;
}

const ICON_BY_SKILL: Record<PossibleSkills, IconType> = {
  fastapi: SiFastapi,
  next: TbBrandNextjs,
  node: FaNodeJs,
  react: FaReact,
  python: FaPython,
  typescript: SiTypescript,
  go: FaGolang,
};

export const SkillsItemsItem = ({ skill }: Props) => {
  const Icon = ICON_BY_SKILL[skill.attributes.skill];
  return (
    <Grid
      item
      container
      xs={5}
      md={2.5}
      direction="column"
      gap={2}
      justifyContent="center"
    >
      <Grid
        gap={'29px'}
        container
        direction={'column'}
        item
        border={'2px solid #565656'}
        borderRadius={'85px'}
        p={'54px 0 48px 0'}
        alignItems={'center'}
        justifyContent={'space-around'}
      >
        <Icon size={48} />
        <Typography fontSize={30} color={colors.primary}>
          {skill.attributes.proficiency}%
        </Typography>
      </Grid>
      <Typography
        textAlign="center"
        color="white"
        textTransform="capitalize"
        fontSize={14}
      >
        {skill.attributes.skill}
      </Typography>
    </Grid>
  );
};
