import { Dialog } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { RightSidebarDialogContent } from '@/components/RightSidebar/RightSidebar.dialog.content';

interface Props {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const RightSidebarDialog = ({ isActive, setIsActive }: Props) => {
  return (
    <Dialog
      open={isActive}
      onClose={() => setIsActive(false)}
      PaperProps={{
        sx: {
          background: '#191919',
          width: '90vw',
          height: '100vh!important',
          maxHeight: 'unset',
          m: 0,
          position: 'absolute',
          top: 0,
          right: 0,
        },
      }}
    >
      <RightSidebarDialogContent setIsActive={setIsActive} />
    </Dialog>
  );
};
