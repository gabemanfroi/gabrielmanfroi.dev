import { ImageData } from '@/core/types/Image';

export type ProjectTag = {
  id: number;
  attributes: {
    name: string;
  };
};

export type Project = {
  id: number;
  attributes: {
    customer: string;
    title: string;
    url: string;
    projectTags: {
      data: ProjectTag[];
    };
    image: ImageData;
  };
};

export type ProjectResponseData = {
  data: Project[];
};
