export interface IRepo {
  __typename: string;
  description: string;
  id: string;
  name: string;
  url: string;
  languages: IRepoLanguage[];
}

export interface IRepoLanguage {
  id: string;
  name: string;
  color: string;
}

export interface IUser {
  __typename: string;
  name: string;
  url: string;
  location: string;
  bio: string;
  avatarUrl: string;
}

export interface IPost {
  __typename: string;
  createdAt: string;
  date: string;
  id: string;
  publishedAt?: string;
  slug: string;
  subtitle: string;
  title: string;
  updatedAt: string;
  content: string;
  coverPhoto?: {
    url: string,
  },
  color: {
    __typename: string;
    hex: string;
  };
}
