import { Button, Grid, Typography } from '@mui/material';
import { EmailOutlined } from '@mui/icons-material';
import React from 'react';
import { colors } from '@/core/theme/colors';

export const ContactButton = () => {
  return (
    <Grid item>
      <Button
        style={{
          color: 'black',
          padding: '11px 58px',
          background: colors.primary,
          width: '100%',
          borderRadius: '99999999px',
          display: 'flex',
          gap: '8px',
        }}
      >
        <EmailOutlined />
        <Typography>Contact me!</Typography>
      </Button>
    </Grid>
  );
};
