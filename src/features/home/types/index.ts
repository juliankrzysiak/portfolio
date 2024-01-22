export interface Project {
  title: string;
  summary: string;
  img: {
    src: string;
    alt?: string;
  };
  links: {
    website?: string;
    github?: string;
  };
}
