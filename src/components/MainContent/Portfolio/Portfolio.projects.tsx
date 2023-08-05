import { Grid } from '@mui/material';
import { useQueryProjects } from '@/hooks/queries/useQueryProjects';
import { PortfolioProjectsItem } from '@/components/MainContent/Portfolio/Portfolio.projects.item';

export const PortfolioProjects = () => {
  const { getProjectsData, getProjectsLoading } = useQueryProjects();

  if (getProjectsLoading) return <></>;

  return (
    <Grid container>
      {getProjectsData.data.map((project, index) => {
        return (
          <PortfolioProjectsItem
            last={index === getProjectsData.data.map.length - 1}
            key={project.id}
            project={project}
          />
        );
      })}
    </Grid>
  );
};
