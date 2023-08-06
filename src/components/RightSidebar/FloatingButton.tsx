import { Menu } from '@mui/icons-material';
import { Stack } from '@mui/material';
import { useState } from 'react';
import { RightSidebarDialog } from '@/components/RightSidebar/RightSidebar.dialog';

export const FloatingButton = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        border="1px solid #575757"
        width="55px"
        height="55px"
        position="absolute"
        right={32}
        top={32}
        borderRadius="50%"
        zIndex={3}
        sx={{
          background: '#111',
          visibility: { xs: 'visible', md: 'hidden' },
        }}
        onClick={(e) => {
          setIsActive(true);
          e.stopPropagation();
        }}
      >
        <Menu />
      </Stack>
      <RightSidebarDialog isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};
