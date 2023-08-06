import { Stack, SvgIconTypeMap, Typography } from '@mui/material';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { OverridableComponent } from '@mui/types';
import { useRefsContext } from '@/providers/refsProvider';
import { colors } from '@/core/theme/colors';

interface Props {
  title: string;
  sectionRef: MutableRefObject<any>;
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const RightSidebarDialogItem = ({
  title,
  sectionRef,
  icon,
  setIsActive,
}: Props) => {
  const { activeSection, setActiveSection } = useRefsContext();
  const scrollToRef = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onClick = () => {
    setIsActive(false);
    setActiveSection(sectionRef);
    setActiveSection(sectionRef);
    scrollToRef();
  };
  const isActive = activeSection === sectionRef;

  const Icon = icon;
  return (
    <Stack direction="row" alignItems="center" gap={1} onClick={onClick}>
      <Icon sx={{ color: isActive ? colors.primary : '#999' }} />
      <Typography fontSize={12} color={isActive ? 'white' : '#999'}>
        {title}
      </Typography>
    </Stack>
  );
};
