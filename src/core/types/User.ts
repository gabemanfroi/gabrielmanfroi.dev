export interface User {
  data: {
    attributes: {
      name: string;
      email: string;
      location: string;
      role: string;
      profilePicture: {
        data: {
          attributes: { url: string };
        };
      };
    };
  };
}
