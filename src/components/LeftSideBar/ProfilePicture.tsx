import Image from 'next/image';
import { Grid } from '@mui/material';
import React from 'react';
import { useQueryUser } from '@/hooks/queries/useQueryUser';

export const ProfilePicture = () => {
  const { getUserByNameData, getUserByNameLoading } = useQueryUser();

  if (getUserByNameLoading) return <></>;

  return (
    <Grid item xs={5} maxHeight={'300px'}>
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_HOST}${getUserByNameData.data.attributes.profilePicture.data.attributes.url}`}
        alt={'something'}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto', borderRadius: '30px' }} // optional
      />
    </Grid>
  );
};
