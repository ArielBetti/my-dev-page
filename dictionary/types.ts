export interface IDictionaryLink {
  icon: string;
  name: string;
  path: string;
}

export interface IDictionary {
  sidebar: {
    role: string;
    social?: {
      linkedin?: string;
      youtube?: string;
      github?: string;
      medium?: string;
    };
    links?: IDictionaryLink[];
  };
  about?: {
    title: string;
    subTitle?: string;
    description: string;
    links?: {
      linkedin?: string;
      youtube?: string;
      github?: string;
    };
  };
}
