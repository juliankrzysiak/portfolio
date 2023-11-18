export interface Project {
  title: string;
  summary: string;
  img: {
    src: ImageMetadata;
    alt?: string;
  };
  links: {
    website?: string;
    github?: string;
  };
}
