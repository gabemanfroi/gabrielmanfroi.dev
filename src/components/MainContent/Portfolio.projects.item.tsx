import { Box, ButtonBase, Grid, Stack, Typography } from '@mui/material';
import { Project, ProjectTag } from '@/core/types/Project';
import Link from 'next/link';

interface ProjectTagProps {
  tag: ProjectTag;
}

const Tag = ({ tag }: ProjectTagProps) => {
  return (
    <Box px={3} py={0} sx={{ background: 'white' }} borderRadius={999}>
      <Typography component="span" fontSize={14} color="black">
        {tag.attributes.name}
      </Typography>
    </Box>
  );
};

interface Props {
  project: Project;
  last: boolean;
}

export const PortfolioProjectsItem = ({ project, last }: Props) => {
  return (
    <Grid
      item
      container
      direction="column"
      gap={2}
      xs={12}
      md={6}
      p={1}
      mb={last ? 0 : 6}
    >
      <Grid
        item
        container
        minHeight={{ xs: 410 }}
        borderRadius={8}
        sx={{
          background: `url(${process.env.NEXT_PUBLIC_STRAPI_HOST}${project.attributes.image?.data?.attributes.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&:before': {
            position: 'absolute',
            content: "''",
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'black',
            borderRadius: 8,
            opacity: 0.3,
            transition: 'opacity ease-in-out 0.2s',
          },
          '&:hover': {
            '&:before': {
              opacity: 0,
            },
          },
        }}
        alignItems="flex-end"
        position="relative"
      >
        <ButtonBase
          sx={{
            borderRadius: 8,
            zIndex: 1,
            position: 'absolute',
            height: '100%',
            width: '100%',
          }}
        >
          <Link
            href={project.attributes.url}
            target="_blank"
            style={{ height: '100%', width: '100%' }}
          />
        </ButtonBase>
        <Stack
          sx={{ p: 2 }}
          flex={1}
          direction={'row'}
          gap={1}
          flexWrap={'wrap'}
          zIndex={2}
        >
          {project.attributes.projectTags.data.map((tag) => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </Stack>
      </Grid>
      <Grid item>
        <Typography
          fontSize={18}
          fontWeight={300}
          color="white"
          textTransform="capitalize"
        >
          {project.attributes.title}
        </Typography>
      </Grid>
    </Grid>
  );
};
