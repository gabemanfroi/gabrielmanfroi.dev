type ImageBase = {
  url: string;
};

type ImageAttributes = {
  id?: number;
  attributes: ImageBase & {
    formats?: {
      large?: ImageBase;
      small?: ImageBase;
      medium?: ImageBase;
      thumbnail?: ImageBase;
    };
  };
};

export type ImageData = {
  data: ImageAttributes;
};
