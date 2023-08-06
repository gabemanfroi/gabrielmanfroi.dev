import { ImageData } from '@/core/types/Image';

export interface User {
  data: {
    id?: number;
    attributes: {
      name: string;
      email: string;
      location: string;
      role: string;
      profilePicture: ImageData;
    };
  };
}
