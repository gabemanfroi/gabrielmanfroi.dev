export interface SocialNetwork {
  id: number;
  attributes: {
    url: string;
    category: 'github' | 'linkedin' | 'blog' | 'twitter';
  };
}

export interface SocialNetworksRequestData {
  data: SocialNetwork[];
}
