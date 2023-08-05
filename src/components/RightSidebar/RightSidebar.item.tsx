import { IconButton, SvgIconTypeMap } from '@mui/material';
import { MutableRefObject } from 'react';
import { OverridableComponent } from '@mui/types';
import { colors } from '@/core/theme/colors';
import { useRefsContext } from '@/providers/refsProvider';

interface Props {
  sectionRef: MutableRefObject<any>;
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
}

export const RightSidebarItem = ({ sectionRef, icon }: Props) => {
  const { activeSection } = useRefsContext();
  const Icon = icon;
  const scrollToRef = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const isActive = activeSection === sectionRef;

  return (
    <IconButton
      sx={{
        color: isActive ? colors.primary : 'white',
        p: 0,
        transition: 'all ease-in-out 0.2s',
        '&:hover': {
          color: colors.primary,
          borderColor: colors.primary,
        },
      }}
      onClick={scrollToRef}
    >
      <Icon />
    </IconButton>
  );
};
